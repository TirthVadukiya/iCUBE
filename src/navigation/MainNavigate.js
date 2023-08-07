import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'


import SplashScreen from '../screens/SplashScreen/Splash';
import Login from '../screens/LoginScreen/Login';
import DrawerNavigate from './DrawerNavigate';
import Otp from '../screens/OtpScreen/Otp';
import Profile from '../screens/ProfileScreen/Profile';
import EditProfile from '../screens/EditProfileScreen/EditProfile';
import Signup from '../screens/SignupScreen/Signup';
import PRoductInfo from '../screens/ProductInfoScreen/PRoductInfo';



const Stack = createNativeStackNavigator();


const MainNavigate = () => {
  return (
    <NavigationContainer>

   <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName={SplashScreen}>
      <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false,animation:'slide_from_right'}} />
      <Stack.Screen name='Login' component={Login} options={{headerShown:false, animation:"slide_from_right"}}/>
      <Stack.Screen name='Otp' component={Otp} options={{headerShown:false,animation:"slide_from_right"}}/>
      <Stack.Screen  name='Sign' component={Signup} options={{headerShown:false, animation:"slide_from_right"}}/>
      <Stack.Screen name='MainHome' component={DrawerNavigate} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='Profile'  component={Profile} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='EditProfile'  component={EditProfile} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='ProductInfo'  component={PRoductInfo} options={{animation:"slide_from_right"}}/>
      
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigate