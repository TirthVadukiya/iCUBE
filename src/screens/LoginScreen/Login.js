import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from '.';

const Login = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.main}>
      {/* LoginTopImg */}
      <View>
        <Image
          source={require('../../../assets/images/Image1.png')}
          style={styles.LoginTopImg}
        />
      </View>

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
          style={{height: 60, width: 60, bottom: 10}}
        />
      </View>

      {/* LoginTxt */}

      <View style={styles.LoginTxtView}>
        <Text style={styles.LoginTxt1}>Log In</Text>
        <Text style={styles.LoginTxt2}>
          Use your Diesel Sports account to continue
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
          secureTextEntry
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

      {/* BottomImg */}
    
     <ImageBackground source={require("../../../assets/images/footer.png")} style={{height:"52%",width:"100%",marginTop:76}}>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-end",top:170}}>
      <Text style={styles.footerTxt1}>Don’t have an account?</Text>
      <Text style={styles.footerTxt2} onPress={()=> navigation.navigate("Sign")}> Sign Up</Text>
      </View>
     </ImageBackground>
     
    </View>
  );
};

export default Login;
