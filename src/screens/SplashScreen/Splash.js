import { View, Text,Image, StyleSheet,ImageBackground } from 'react-native'
import React, {useEffect} from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import styles from '.'
import DrawerNavigate from '../../navigation/DrawerNavigate'
import Login from '../LoginScreen/Login'


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  // const checkIsLogin = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('token');
  //     if (value !== null) {
  //       navigation.navigate(DrawerNavigate);
  //     } else {
  //       navigation.navigate(Login);
  //     }
  //   } catch (e) {
  //     console.error('Splash');
  //   }
  // };

  return (
    <View style={styles.main}>
       <Image  source={require('../../Assets/images/IcubeLogo.png')} style={{resizeMode:"center"}}/>
    </View>
  )
}


export default SplashScreen;