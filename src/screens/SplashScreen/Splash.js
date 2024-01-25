import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import styles from '.';
import DrawerNavigate from '../../navigation/DrawerNavigate';
import Login from '../LoginScreen/Login';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Image
        source={require('../../../assets/images/icube_logo.png')}
        style={styles.SplashImg}
      />
    </View>
  );
};

export default SplashScreen;
