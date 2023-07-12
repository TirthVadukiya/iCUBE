import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,ScrollView
} from 'react-native';
import React from 'react';
import styles from '.';

const Login = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.main}>
        <View>
          <Image source={require("../../../assets/images/Image.png")} style={styles.LoginImg}/>
        </View>

       <ScrollView style={{flex:1,}} showsVerticalScrollIndicator={false}>
        <View style={styles.AppLogoView}>
        <Image
          source={require('../../../assets/images/IcubeLogo.png')}
          style={styles.AppLogoImg}
        />
      </View>

      <View style={{alignItems: 'center',top:30}}>
        <Image
          source={require('../../../assets/images/parking.png')}
          style={{height: 140, width: 140,  }}
        />
      </View>

      {/* LoginTxt */}

      <View style={styles.LoginTxtView}>
        <Text style={styles.LoginTxt1}>Log In</Text>
        <Text style={styles.LoginTxt2}>
        Use your i-cube Parking Elevators account to continue
        </Text>
      </View>

      {/* TextInput */}

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Mobile Number"
          maxLength={10}
          keyboardType="numeric"
          placeholderTextColor={'#AEA8B2'}
        />
      </View>

      {/* LoginBtn */}

      <TouchableOpacity onPress={() => navigation.navigate('MainHome')}>
        <View style={styles.LoginBtn}>
          <Text style={styles.LoginTxt}>LOGIN</Text>
          <Image
            source={require('../../../assets/images/LoginLogo.png')}
            style={{height: 20, width: 20, left: 5}}
          />
        </View>
      </TouchableOpacity>

      <View style={{flexDirection:"row",justifyContent:"center",marginTop:60,marginBottom:10}}>
      <Text style={styles.footerTxt1}>Don’t have an account?</Text>
      <Text style={styles.footerTxt2} onPress={()=> navigation.navigate("Sign")}> Sign Up</Text>
      </View>
      </ScrollView>
      </View>
  );
};

export default Login;