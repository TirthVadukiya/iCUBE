import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {ICONS} from '../../constants/icons';
import {EDIT_PROFILE} from '../../constants/route-names';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfileDetailAction} from '../../redux/action/GetProfileDetailAction';
import {resetUpdateProfileDetail} from '../../redux/slices/UpdateProfileDetailSlice';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomProgress from '../../utils/CustomProgress';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';

const Profile = ({navigation, item}) => {
  const isConnected = useNetworkStatus();
  const dispatch = useDispatch();

  const {user, loading} = useSelector(state => state.GetProfileDetail);
  const getUpdateProfileDetails = useSelector(
    state => state.UpdateProfileDetail,
  );

  useEffect(() => {
    dispatch(GetProfileDetailAction());
  }, []);

  useEffect(() => {
    if (getUpdateProfileDetails === undefined) return;
    loadSaveStaffDetails(getUpdateProfileDetails);
  }, [getUpdateProfileDetails]);

  function loadSaveStaffDetails(getUpdateProfileDetails) {
    if (getUpdateProfileDetails?.data?.status) {
      dispatch(resetUpdateProfileDetail());
      dispatch(GetProfileDetailAction());
    }
  }

  return (
    <View style={styles.main}>
      <View style={{flex: 0.4}}>
        <ImageBackground
          source={require('../../../assets/images/BookService.png')}
          style={styles.headerImg}>
          <CustomHeaderAdd
            navigation={navigation}
            title={'My Profile'}
            icon={ICONS.notification_icon}
            // redirect={ADD_TAXES}
          />

          <View style={{alignItems: 'center', marginTop: 65}}>
            <Image
              source={user.image ? {uri: user.image} : ICONS.user_image}
              style={styles.profileImg}
            />
            <Text style={styles.userNameTxt}>{user.name}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 0.7}}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileTxt}>Profile Information</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(EDIT_PROFILE, {
                Type: 'Edit',
                id: user.id,
              })
            }>
            <Image
              source={require('../../../assets/images/player.png')}
              style={styles.editBtn}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailView}>
          <View>
            <Text style={styles.detailTxt}>Mobile Number</Text>
            <Text style={styles.detailNumberTxt}>{user.mobile_no}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.detailTxt}>Primary Email Address</Text>
            <Text style={styles.detailNumberTxt}>{user.email}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.detailTxt}>City / Zip</Text>
            <Text style={styles.detailNumberTxt}>
              {user.city} - {user.pincode}
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.detailTxt}>Address</Text>
            <Text style={styles.detailNumberTxt}>{user.address}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.detailTxt}>Occupation</Text>
            <Text style={styles.detailNumberTxt}>{user.occupation}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.detailTxt}>Own car 1</Text>
            <Text style={styles.detailNumberTxt}>{user.car_no}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.detailTxt}>Own car 2</Text>
            <Text style={styles.detailNumberTxt}>Hyundai Creta</Text>
          </View>
        </View>
      </View>
      {loading ? (
        <View style={styles.loading}>
          <CustomProgress />
        </View>
      ) : null}
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Profile;
