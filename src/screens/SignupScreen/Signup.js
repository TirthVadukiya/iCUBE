import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '.';
import {IMAGES} from '../../constants/images';
import {ICONS} from '../../constants/icons';
import {useDispatch, useSelector} from 'react-redux';
import SnackbarShow from '../../utils/SnackbarShow';
import {
  PLEASE_ENTER_ADDRESS,
  PLEASE_ENTER_NAME,
  PLEASE_ENTER_PHONE,
} from '../../utils/SnackBarLabel';
import {SignUpAction} from '../../redux/action/SignUAction';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomProgress from '../../utils/CustomProgress';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';

const Signup = ({navigation}) => {
  const isConnected = useNetworkStatus();
  const dispatch = useDispatch();
  const signupResponse = useSelector(state => state.AuthSignup);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (signupResponse === undefined) return;
    else callSignUpResponse(signupResponse);
  }, [signupResponse]);

  async function callSignUpResponse(signupResponse) {
    if (signupResponse?.data.status) {
      SnackbarShow(signupResponse?.data.message);
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }
    if (signupResponse.data.error_message) {
      dispatch(resetSignupAdmin());
    }
    signupResponse.data.error_message
      ? SnackbarShow(signupResponse.data.error_message)
      : null;
  }

  function callSignUp() {
    if (name == '') {
      SnackbarShow(PLEASE_ENTER_NAME);
      return;
    }
    if (number == '') {
      SnackbarShow(PLEASE_ENTER_PHONE);
      return;
    }
    if (address == '') {
      SnackbarShow(PLEASE_ENTER_ADDRESS);
      return;
    }

    let data = new FormData();
    data.append('name', name);
    data.append('mobile_no', number);
    data.append('email', address);

    dispatch(SignUpAction({data}));
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 0.2}}>
        <Image source={IMAGES.Image} style={styles.headerImg} />
      </View>

      <View style={{margin: 20, flex: 0.8, alignItems: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <Image source={ICONS.icube_logo} style={styles.imageLogo} />

            <Image source={ICONS.parking} style={styles.carLogo} />
          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={styles.loginTxt}>Sing Up</Text>
            <Text style={styles.descriptionTxt}>
              Use your i-cube Parking Elevators account to continue
            </Text>
          </View>
          <TextInput
            style={styles.txtInput}
            placeholder={'Name'}
            placeholderTextColor={'#AEA8B2'}
            value={name}
            onChangeText={v => setName(v)}
          />
          <TextInput
            style={styles.txtInput}
            placeholder={'Mobile Number'}
            placeholderTextColor={'#AEA8B2'}
            value={number}
            maxLength={10}
            keyboardType="number-pad"
            onChangeText={v => setNumber(v)}
          />
          <TextInput
            style={styles.txtAnnInput}
            placeholder={'Address'}
            placeholderTextColor={'#AEA8B2'}
            value={address}
            onChangeText={v => setAddress(v)}
          />

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => callSignUp()}>
            <Text style={styles.loginTxtBtn}>Sing Up</Text>
            <Image source={ICONS.login_logo} style={styles.loginLogo} />
          </TouchableOpacity>

          <View style={styles.viewLoginBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signupTxt}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {signupResponse.loading ? (
        <View style={styles.loading}>
          <CustomProgress />
        </View>
      ) : null}
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Signup;
