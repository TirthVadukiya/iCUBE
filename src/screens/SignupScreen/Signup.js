import {View, Text, Image, TextInput,TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '.';

const Signup = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [address, onChangeAddress] = useState('');

  return (
    <View style={styles.main}>
         
    {/* Top Image */}

     <View style={styles.TopImgView}>       
     <Image source={require("../../../assets/images/Image.png")} style={styles.SignImg}/>
      </View>    
      
     <View style={styles.DetailView}>
  
     <View style={styles.AppLogoView}>
        <Image
          source={require('../../../assets/images/IcubeLogo.png')}
          style={styles.AppLogoImg}
        />

        <Image
          source={require('../../../assets/images/parking.png')}
          style={{height: 140, width: 140, top:20 }}
        />
      </View>

   
     {/* SignupTxt */}

     <View style={styles.signupView}>
        <Text style={styles.signupTxt}>Sing Up</Text>
        <Text style={styles.signupTxt1}>
        Use your i-cube Parking Elevators  account to continue
        </Text>
      </View>

      <View style={{alignItems: 'center', margin: 10,marginTop:30}}>
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
            maxLength={10}
            placeholderTextColor={'#AEA8B2'}
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

        <TouchableOpacity onPress={() => navigation.navigate('Otp')} style={styles.LoginBtn}>
          <Text style={styles.LoginTxt}>SIGNUP</Text>
          <Image
            source={require('../../../assets/images/LoginLogo.png')}
            style={{height: 20, width: 20, left: 5}}
          />
      </TouchableOpacity>
 
     </View>
      
     <View style={styles.BottomView}>
      <View style={{flexDirection:"row",justifyContent:"center"}}>
      <Text style={styles.footerTxt1} onPress={()=> navigation.navigate("Login")}>Don’t have an account?</Text>
      <Text style={styles.footerTxt2} onPress={()=> navigation.navigate("Login")}> Login</Text>
      </View>
      </View>


    </View>
    
  );
};

export default Signup;