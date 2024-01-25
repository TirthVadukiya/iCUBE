import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '.';
import {IMAGES} from '../../constants/images';
import {ICONS} from '../../constants/icons';
import {firebase} from '@react-native-firebase/auth';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, resetLogin} from '../../redux/slices/LoginSlice';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import {PLEASE_ENTER_PHONE} from '../../utils/SnackBarLabel';
import {LoginAction} from '../../redux/action/LoginAction';
import SnackbarShow from '../../utils/SnackbarShow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomProgress from '../../utils/CustomProgress';
import {OTP, OTP_VERIFICATION, SIGNUP} from '../../constants/route-names';

const Login = ({navigation}) => {
  const isConnected = useNetworkStatus();
  const dispatch = useDispatch();

  const loginResponse = useSelector(state => state.Auth);

  const [number, setNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  useEffect(() => {
    if (loginResponse === undefined) return;
    else callLoginResponse(loginResponse);
  }, [loginResponse]);

  async function callLoginResponse(loginResponse) {
    if (loginResponse.data.data)
      loginResponse.data.success ? signInWithPhoneNumber() : null;

    loginResponse.data.success ? dispatch(resetLogin()) : null;
  }

  async function callLogin() {
    if (number == '') {
      SnackbarShow(PLEASE_ENTER_PHONE);
      return;
    }
    await AsyncStorage.setItem('number', number);
    const mobile_no = number;
    const type = 1;
    if (isConnected) {
      dispatch(LoginAction({mobile_no, type}));
    }
  }

  const signInWithPhoneNumber = async () => {
    const number = await AsyncStorage.getItem('number');
    try {
      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(`+91${number}`);
      console.log(confirmation.verificationId); // Accessing a property, for example
      console.warn('Navigating to Hello screen...'); // Accessing a property, for example
      navigation.navigate(OTP, {confirmation, number});
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.2}}>
        <Image source={IMAGES.Image} style={styles.headerImg} />
      </View>

      {/* logo */}
      <View style={{margin: 20, flex: 0.8, alignItems: 'center'}}>
        <Image source={ICONS.icube_logo} style={styles.imageLogo} />

        <Image source={ICONS.parking} style={styles.carLogo} />

        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text style={styles.loginTxt}>Log In</Text>
          <Text style={styles.descriptionTxt}>
            Use your i-cube Parking Elevators account to continue
          </Text>
        </View>
        <TextInput
          style={styles.txtInput}
          placeholder={'Mobile Number'}
          placeholderTextColor={'#AEA8B2'}
          value={number}
          maxLength={10}
          keyboardType="number-pad"
          onChangeText={v => setNumber(v)}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={() => callLogin()}>
          <Text style={styles.loginTxtBtn}>LOGIN</Text>
          <Image source={ICONS.login_logo} style={styles.loginLogo} />
        </TouchableOpacity>

        <View style={styles.viewLoginBtn}>
          <TouchableOpacity
            onPress={() => {
              setTimeout(() => {
                navigation.navigate(SIGNUP);
              }, 300);
            }}>
            <Text style={styles.signupTxt}>Don’t have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomDialogNetwork visible={!isConnected} />
      {loginResponse.loading ? (
        <View style={styles.loading}>
          <CustomProgress />
        </View>
      ) : null}
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Login;
