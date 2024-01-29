import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomSheet} from 'react-native-btr';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {checkMultiple, PERMISSIONS} from 'react-native-permissions';
import {ICONS} from '../../constants/icons';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfileDetailAction} from '../../redux/action/GetProfileDetailAction';
import {resetUpdateProfileDetail} from '../../redux/slices/UpdateProfileDetailSlice';
import {UpdateProfileDetailAction} from '../../redux/action/UpdateProfileDetailAction';
import CustomProgress from '../../utils/CustomProgress';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';
import SnackbarShow from '../../utils/SnackbarShow';

var optionsCapture = {
  mediaType: 'photo',
  includeBase64: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.5,
};

const EditProfile = ({navigation, route}) => {
  const isConnected = useNetworkStatus();
  const dispatch = useDispatch();

  const {user, loading} = useSelector(state => state.GetProfileDetail);

  const getUpdateProfileDetails = useSelector(
    state => state.UpdateProfileDetail,
  );

  const [firstName, setFirstName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [ownCar1, setOwnCar1] = useState('');
  const [ownCar2, setOwnCar2] = useState('');

  const [visible, setVisible] = useState(false);
  const [permissions, setPermissions] = useState(false);
  const [photo, setPhoto] = useState();
  const [type, setType] = useState();
  const [fileName, setFileName] = useState();

  useEffect(() => {
    dispatch(GetProfileDetailAction(route.params.id));
  }, [route.params.id]);

  useEffect(() => {
    if (user === undefined) return;
    else loadStaffData(user);
    if (getUpdateProfileDetails === undefined) return;
    else callUpdateProfileDetail(getUpdateProfileDetails);
  }, [user, getUpdateProfileDetails]);

  function callUpdateProfileDetail(getUpdateProfileDetails) {
    if (getUpdateProfileDetails?.data?.status) {
      SnackbarShow(getUpdateProfileDetails.data.message);
      navigation.goBack();
    }
    if (getUpdateProfileDetails?.data?.message) {
      dispatch(resetUpdateProfileDetail());
      getUpdateProfileDetails.data.message
        ? SnackbarShow(getUpdateProfileDetails.data.message)
        : null;
    }
  }

  function loadStaffData() {
    if (user) {
      setPhoto(user.image);
      setFirstName(user.name);
      setMobile(user.mobile_no);
      setEmail(user.email);
      setCity(user.city);
      setZipCode(user.pincode);
      setAddress(user.address);
      setOccupation(user.occupation);
      // setOwnCar1(user.cars);
      // setOwnCar2(user.cars);
    }
  }

  function toggle() {
    setVisible(visible => !visible);
  }

  const openDialog = type => {
    if (type === 0) {
      launchCamera(optionsCapture, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          setPhoto(res.assets[0].uri);
          setType(res.assets[0].type);
          setFileName(res.assets[0].fileName);
          setVisible(false);
        }
      });
    }
    if (type === 1) {
      launchImageLibrary(optionsCapture, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          console.log(res.assets);
          setPhoto(res.assets[0].uri);
          setType(res.assets[0].type);
          setFileName(res.assets[0].fileName);
          setVisible(false);
        }
      });
    }
  };

  const checkPermission = () => {
    checkMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]
        : [
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ],
    ).then(statuses => {
      console.log(statuses);
      if (
        statuses[PERMISSIONS.IOS.CAMERA] === 'granted' &&
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'granted'
      ) {
        setPermissions(true);
      }

      if (
        statuses[PERMISSIONS.IOS.CAMERA] === 'denied' ||
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'unavailable' ||
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'denied'
      ) {
        // requestPermissionIOSCamera();
        setPermissions(true);
      }

      if (Platform.Version >= 33) {
        setPermissions(true);
      } else {
        if (
          statuses[PERMISSIONS.ANDROID.CAMERA] === 'granted' &&
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'granted'
        ) {
          setPermissions(true);
        }
      }

      if (statuses[PERMISSIONS.ANDROID.CAMERA] === 'denied') {
        setPermissions(false);
        requestCameraPermission();
      }

      if (statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'denied') {
        setPermissions(false);
        requestStoragePermission();
      }
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App neeed Camera Permission',
          message:
            'App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPermissions(true);
      } else {
        console.log('Camera permission denied');
        setPermissions(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App need Storage Permission',
          message:
            'App needs access to your Storage ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPermissions(true);
      } else {
        console.log('Camera permission denied');
        setPermissions(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function callSaveProfileDetails() {
    let dataSend = new FormData();
    if (type && fileName) {
      dataSend.append('image', {
        uri: Platform.OS === 'android' ? photo : photo.replace('file://', ''),
        type: type,
        name: fileName,
      });
    }
    dataSend.append('name', firstName);
    dataSend.append('mobile_no', mobile);
    dataSend.append('email', email);
    dataSend.append('city', city);
    dataSend.append('pincode', zipCode);
    dataSend.append('address', address);
    dataSend.append('occupation', occupation);
    dataSend.append('cars', 'alto');

    dispatch(UpdateProfileDetailAction(dataSend));
  }

  return (
    <View style={styles.main}>
      <View style={{flex: 0.4}}>
        <ImageBackground
          source={require('../../../assets/images/BookService.png')}
          style={styles.headerImg}>
          <CustomHeaderAdd
            navigation={navigation}
            title={'Profile Edit'}
            icon={ICONS.notification_icon}
            // redirect={ADD_TAXES}
          />
          <View style={{alignItems: 'center', marginTop: 65}}>
            <Image
              source={photo ? {uri: photo} : ICONS.user_image}
              style={styles.profileImg}
            />
            <TouchableOpacity
              style={{marginLeft: 80, bottom: 40}}
              onPress={() => setVisible(true)}>
              <Image
                source={require('../../../assets/images/updateImg.png')}
                style={styles.uploadImg}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={{flex: 0.7}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            style={{flexDirection: 'column', flex: 1, margin: 10}}>
            <View style={{margin: 10}}>
              <View>
                <TextInput
                  style={styles.txtInput}
                  onChangeText={setFirstName}
                  value={firstName}
                  placeholder="Name"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  style={styles.txtInput}
                  onChangeText={setMobile}
                  value={mobile}
                  placeholder="Mobile"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  style={styles.txtInput}
                  onChangeText={setEmail}
                  keyboardType={'email-address'}
                  value={email}
                  placeholder="Email"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                {/* Zip */}

                <TextInput
                  style={[styles.txtInput, {flex: 1, marginEnd: 10}]}
                  placeholder="City"
                  placeholderTextColor={'gray'}
                  // keyboardType={'phone-pad'}
                  value={city}
                  onChangeText={v => setCity(v)}
                />
                {/* GMT */}

                <TextInput
                  style={[styles.txtInput, {flex: 1, marginStart: 10}]}
                  placeholder="380008"
                  placeholderTextColor={'gray'}
                  keyboardType={'phone-pad'}
                  value={zipCode}
                  onChangeText={v => setZipCode(v)}
                />
              </View>
              {/* Address */}
              <View style={{marginTop: 10}}>
                <TextInput
                  style={styles.txtInput}
                  onChangeText={setAddress}
                  value={address}
                  placeholder="Address"
                  placeholderTextColor={'gray'}
                />
              </View>
              {/* Occupation */}
              <View style={{marginTop: 10}}>
                <TextInput
                  style={styles.txtInput}
                  onChangeText={setOccupation}
                  value={occupation}
                  placeholder="Occupation"
                  placeholderTextColor={'gray'}
                />
              </View>

              {/* Own car 1 */}

              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                {/* Zip */}

                <TextInput
                  style={[styles.txtInput, {flex: 1.8}]}
                  placeholder="Own car 1"
                  placeholderTextColor={'gray'}
                  keyboardType={'phone-pad'}
                  value={ownCar1}
                  onChangeText={v => setOwnCar1(v)}
                />
                {/* GMT */}

                <View style={{flex: 1.1}}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/images/plusBtn.png')}
                      style={styles.plusBtn}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* Own car 1 */}

              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                {/* Zip */}

                <TextInput
                  style={[styles.txtInput, {flex: 1.8}]}
                  placeholder="Own car 2"
                  placeholderTextColor={'gray'}
                  keyboardType={'phone-pad'}
                  value={ownCar2}
                  onChangeText={v => setOwnCar2(v)}
                />
                {/* GMT */}

                <View style={{flex: 1.1}}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/images/minsBtn.png')}
                      style={styles.plusBtn}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                margin: 10,
              }}>
              <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => callSaveProfileDetails()}>
                <Text style={styles.updateTxt}>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}>
        <View style={styles.viewBSUpload}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => (permissions ? openDialog(0) : checkPermission())}>
            <Text style={styles.txtButton}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => (permissions ? openDialog(1) : checkPermission())}>
            <Text style={styles.txtButton}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewButtonCancel}
            onPress={() => setVisible(false)}>
            <Text style={styles.txtButtonCancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      {getUpdateProfileDetails.loading ? (
        <View style={styles.loading}>
          <CustomProgress />
        </View>
      ) : null}
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default EditProfile;
