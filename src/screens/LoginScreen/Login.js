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
          source={require('../../Assets/images/Image1.png')}
          style={styles.LoginTopImg}
        />
      </View>

      {/* AppLogo */}

      <View style={styles.AppLogoView}>
        <Image
          source={require('../../Assets/images/IcubeLogo.png')}
          style={styles.AppLogoImg}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../Assets/images/parking.png')}
          style={{height: 80, width: 80, bottom: 10}}
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
            source={require('../../Assets/images/LoginLogo.png')}
            style={{height: 20, width: 20, left: 5}}
          />
        </View>
      </TouchableOpacity>

      {/* BottomImg */}

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <ImageBackground
          source={require('../../Assets/images/footer.png')}
          style={styles.footerImg}>
          <View style={styles.footerCarImg}>
            <Image
              source={require('../../Assets/images/footerCar.png')}
              style={{height: 170, width: 160, top: 15}}
            />
          </View>
          <View style={styles.footerTxtView}>
            <Text style={styles.footerTxt1}>Don’t have an account? </Text>
            <Text
              style={styles.footerTxt2}
              onPress={() => navigation.navigate('Sign')}>
              Sign Up
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Login;
