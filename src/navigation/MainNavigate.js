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
      {/* <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/> */}
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Otp' component={Otp} options={{headerShown:false}}/>
      <Stack.Screen  name='Sign' component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name='MainHome' component={DrawerNavigate} />
      <Stack.Screen name='Profile'  component={Profile}/>
      <Stack.Screen name='EditProfile'  component={EditProfile}/>
      <Stack.Screen name='ProductInfo'  component={PRoductInfo}/>
      
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigate