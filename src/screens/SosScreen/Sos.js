import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';
import {BottomSheet} from 'react-native-btr';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {checkMultiple, PERMISSIONS} from 'react-native-permissions';
import {IMAGES} from '../../constants/images';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import {ICONS} from '../../constants/icons';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';

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

const Sos = ({navigation}) => {
  const isConnected = useNetworkStatus();

  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);

  const [visible, setVisible] = useState(false);
  const [permissions, setPermissions] = useState(false);
  const [photo, setPhoto] = useState();
  const [type, setType] = useState();
  const [fileName, setFileName] = useState();

  const [number, setNumber] = React.useState('');

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

  return (
    <View style={styles.main}>
      {/* header */}
      <View style={{flex: 0.4}}>
        <ImageBackground
          source={require('../../../assets/images/BookService.png')}
          style={styles.headerImg}>
          <CustomHeaderAdd
            navigation={navigation}
            title={'Emergency Contact'}
            icon={ICONS.notification_icon}
            // redirect={ADD_TAXES}
          />
          <View style={{alignItems: 'center', marginTop: 65}}>
            <Image
              source={require('../../../assets/images/sos.png')}
              style={styles.profileImg}
            />
          </View>
        </ImageBackground>
      </View>

      <View style={{flex: 0.7, margin: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 10,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* CheckBox 1 */}
            <View style={styles.checkBox}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#EC581F'}
              />
              <Text style={styles.checkBoxTxt}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
            </View>
            {/* CheckBox 2 */}
            <View style={styles.checkBox}>
              <Checkbox
                status={checked1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked1(!checked1);
                }}
                color={'#EC581F'}
              />
              <Text style={styles.checkBoxTxt}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
            </View>
            {/* checkBox 3 */}
            <View style={styles.checkBox}>
              <Checkbox
                status={checked2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked2(!checked2);
                }}
                color={'#EC581F'}
              />
              <Text style={styles.checkBoxTxt}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            {/* CheckBox 4 */}
            <View style={styles.checkBox}>
              <Checkbox
                status={checked3 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked3(!checked3);
                }}
                color={'#EC581F'}
              />
              <Text style={styles.checkBoxTxt}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            {/* CheckBox 5 */}
            <View style={styles.checkBox}>
              <Checkbox
                status={checked4 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked4(!checked4);
                }}
                color={'#EC581F'}
              />
              <Text style={styles.checkBoxTxt}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            {/* CheckBox 6 */}
            <View style={styles.checkBox}>
              <Checkbox
                status={checked5 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked5(!checked5);
                }}
                color={'#EC581F'}
              />
              <Text style={styles.checkBoxTxt}>
                Borem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>

          {/* Upload Img */}

          <View style={{marginStart: 10, marginEnd: 10}}>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Image
                source={photo ? {uri: photo} : IMAGES.upload_img}
                style={styles.uploadImg}
              />
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
              <TextInput
                value={number}
                style={styles.txtInput}
                onChangeText={setNumber}
                placeholder="+91- 97582 62353"
                placeholderTextColor={'black'}
                editable={false}
              />
            </View>

            <View style={{marginTop: 20, marginBottom: 15}}>
              <TouchableOpacity style={styles.updateBtn}>
                <Text style={styles.submitTxt}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
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
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Sos;
