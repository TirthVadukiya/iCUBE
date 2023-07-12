import {StyleSheet, Text, View,Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from '.';
import OTPTextView from 'react-native-otp-textinput';

const Otp = (props) => {
 
  return (
    <View style={styles.container}>

      {/* TopImg */}

      <View>
        <Image
          source={require('../../../assets/images/Image.png')}
          style={styles.OtpTopImg}
        />
      </View>

      {/* AppLogo */}

      <View style={styles.AppLogoView}>
        <Image
          source={require('../../../assets/images/IcubeLogo.png')}
          style={styles.AppLogoImg}
        />
      </View>

      {/* otpTxt */}
     
      <Text style={styles.OtpVerificationTxt}>OTP Verification</Text>

      <View style={styles.OtpTxtView}>
        <Text style={styles.OtpTxt1}>Enter the code from the sms we sent to</Text>
        <Text style={styles.OtpTxt2}>+1 202-555-0139</Text>
      </View>

      <Text style={styles.OtpTimer}>02:32</Text>
     

     {/* OtpTextInput */}
      <View style={{alignItems:'center'}}>
      <OTPTextView
          ref={e => (otpInput = e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          // handleTextChange={text => redirectForgotPassword(text)}
          inputCount={6}
          keyboardType="numeric"
          tintColor='#EC581F'
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
      <Text style={styles.OtpResendTxt}>  RESEND</Text>
     </View>

      </View>
  );
};

export default Otp;




 