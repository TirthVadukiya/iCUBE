import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '.';
import OTPTextView from 'react-native-otp-textinput';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../redux/action/LoginAction';
import SnackbarShow from '../../utils/SnackbarShow';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';

const Otp = ({route}) => {
  const isConnected = useNetworkStatus();
  const dispatch = useDispatch();

  const {confirmation} = route.params;
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const confirmCode = async () => {
    try {
      await confirmation.confirm(code);
      const mobile_no = route.params.number;
      const type = 2;
      dispatch(LoginAction({mobile_no, type}));
    } catch (error) {
      SnackbarShow(error.toString());
    }
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {/* TopImg */}

      <View>
        <Image
          source={require('../../../assets/images/image.png')}
          style={styles.OtpTopImg}
        />
      </View>

      {/* AppLogo */}

      <View style={styles.AppLogoView}>
        <Image
          source={require('../../../assets/images/icube_logo.png')}
          style={styles.AppLogoImg}
        />
      </View>

      {/* otpTxt */}

      <Text style={styles.OtpVerificationTxt}>OTP Verification</Text>

      <View style={styles.OtpTxtView}>
        <Text style={styles.OtpTxt1}>
          Enter the code from the sms we sent to
        </Text>
        <Text style={styles.OtpTxt2}>{route.params.number}</Text>
      </View>

      <Text style={styles.OtpTimer}>{formatTime(timer)}</Text>

      {/* OtpTextInput */}
      <View style={{alignItems: 'center'}}>
        <OTPTextView
          ref={e => (otpInput = e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          handleTextChange={text => setCode(text)}
          inputCount={6}
          keyboardType="numeric"
          tintColor="#EC581F"
          color="#727270"
          offTintColor={[
            '#EC581F',
            '#EC581F',
            '#EC581F',
            '#EC581F',
            '#EC581F',
            '#EC581F',
          ]}
        />
      </View>

      {/* OtpResendTxt */}

      <View style={styles.OtpResendView}>
        <Text style={styles.OtpReceiveTxt}>I didn't receive any code.</Text>
        <Text style={styles.OtpResendTxt}> RESEND</Text>
      </View>

      <View style={{margin: 10}}>
        <TouchableOpacity style={styles.submitButton} onPress={confirmCode}>
          <Text style={styles.submitButtonText}>SUBMIT OTP</Text>
        </TouchableOpacity>
      </View>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Otp;
