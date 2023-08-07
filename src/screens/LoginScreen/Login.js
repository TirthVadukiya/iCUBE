import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView
} from 'react-native';
import React from 'react';
import styles from '.';

const Login = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.main}>
         
    {/* HeaderView */}

     <View style={styles.ImageView}>
        <Image source={require("../../../assets/images/Image.png")} style={styles.LoginImg}/>
     </View>

     {/* DetailView */}

     <View style={styles.DetailView}>

     <View style={styles.AppLogoView}>
        <Image
          source={require('../../../assets/images/IcubeLogo.png')}
          style={styles.AppLogoImg}
        />

       <Image
          source={require('../../../assets/images/parking.png')}
          style={{height: 140, width: 140,top:50  }}
        />
      </View>

    
         {/* LoginTxt */}

      <View style={styles.LoginTxtView}>
        <Text style={styles.LoginTxt1}>Log In</Text>
        <Text style={styles.LoginTxt2}>
        Use your i-cube Parking Elevators account to continue
        </Text>
      </View>
     
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

      <TouchableOpacity onPress={() => navigation.navigate('MainHome')} style={styles.LoginBtn}>
       
          <Text style={styles.LoginTxt}>LOGIN</Text>
          <Image
            source={require('../../../assets/images/LoginLogo.png')}
            style={{height: 20, width: 20, left: 5}}
          />
      
      </TouchableOpacity>
      
     </View>


      <View style={styles.BottomView}>
      <View style={{flexDirection:"row",justifyContent:"center"}}>
      <Text style={styles.footerTxt1} onPress={()=> navigation.navigate("Sign")}>Don’t have an account?</Text>
      <Text style={styles.footerTxt2} onPress={()=> navigation.navigate("Sign")}> Sign Up</Text>
      </View>
      </View>

    </SafeAreaView>
  );
};

export default Login;