import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen/Splash';
import Login from '../screens/LoginScreen/Login';
import DrawerNavigate from './DrawerNavigate';
import Otp from '../screens/OtpScreen/Otp';
import Profile from '../screens/ProfileScreen/Profile';
import EditProfile from '../screens/EditProfileScreen/EditProfile';
import Signup from '../screens/SignupScreen/Signup';
import PRoductInfo from '../screens/ProductInfoScreen/PRoductInfo';
import {login, logout} from '../redux/slices/LoginSlice';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  EDIT_PROFILE,
  LOGIN,
  OTP,
  PRODUCT_INFO,
  PROFILE,
  SIGNUP,
  SPLASH,
} from '../constants/route-names';
import axios from 'axios';

const Stack = createNativeStackNavigator();

const MainNavigate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {isLogin, data} = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getToken();
  }, [dispatch, data]);

  async function getToken() {
    const value = await AsyncStorage.getItem('token');
    if (value != null) {
      axios.defaults.headers['Authorization'] = `Bearer ${value}`;
      dispatch(login());
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      dispatch(logout());
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={LOGIN}>
          {isLogin ? (
            <>
              <Stack.Screen
                name="MainHome"
                component={DrawerNavigate}
                options={{animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name={PROFILE}
                component={Profile}
                options={{animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name={EDIT_PROFILE}
                component={EditProfile}
                options={{animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name={PRODUCT_INFO}
                component={PRoductInfo}
                options={{animation: 'slide_from_right'}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name={SPLASH}
                component={SplashScreen}
                options={{headerShown: false, animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name={LOGIN}
                component={Login}
                options={{headerShown: false, animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name={OTP}
                component={Otp}
                options={{headerShown: false, animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name={SIGNUP}
                component={Signup}
                options={{headerShown: false, animation: 'slide_from_right'}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainNavigate;
