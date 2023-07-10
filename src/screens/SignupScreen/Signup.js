import {View, Text, Image, TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from '.';

const Signup = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [address, onChangeAddress] = useState('');

  return (
    <View style={styles.main}>
      {/* footerImg */}

      <ImageBackground resizeMode="stretch" source={require("../../../assets/images/Login.png")} style={styles.LoginImg}>

    {/* AppLogo */}

      <View style={styles.AppLogoView}>
        <Image
          source={require('../../../assets/images/IcubeLogo.png')}
          style={styles.AppLogoImg}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/parking.png')}
          style={{height: 160, width: 160,  }}
        />
      </View>

       {/* SignupTxt */}

      <View style={styles.signupView}>
        <Text style={styles.signupTxt}>Sing Up</Text>
        <Text style={styles.signupTxt1}>
        Use your i-cube Parking Elevators  account to continue
        </Text>
      </View>

      {/* SignupTextInput */}

      <View style={{alignItems: 'center', margin: 10}}>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.txtInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Name"
            placeholderTextColor={'#AEA8B2'}
          />
        </View>

        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.txtInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor={'#AEA8B2'}
            secureTextEntry
          />
        </View>

        <View style={styles.viewTextInputAddress}>
          <TextInput
            style={styles.txtInput}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address"
            placeholderTextColor={'#AEA8B2'}
          />
        </View>
      </View>

      {/* SignupBtn */}

      <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
        <View style={styles.LoginBtn}>
          <Text style={styles.LoginTxt}>SIGNUP</Text>
          <Image
            source={require('../../../assets/images/LoginLogo.png')}
            style={{height: 20, width: 20, left: 5}}
          />
        </View>
      </TouchableOpacity>

      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-end",top:15}}>
      <Text style={styles.footerTxt1}>Don’t have an account?</Text>
      <Text style={styles.footerTxt2} onPress={()=> navigation.navigate("Login")}> Login</Text>
      </View>

      </ImageBackground>
    </View>
  );
};

export default Signup;