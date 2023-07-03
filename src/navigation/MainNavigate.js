import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'


import SplashScreen from '../screens/SplashScreen/Splash';
import Safety from '../screens/SafetyScreen/Safety';
import Signup from '../screens/SignupScreen/Signup';
import Login from '../screens/LoginScreen/Login';
import Home from '../screens/HomeScreen/Home';
import Product from '../screens/ProductScreen/Product';
import DrawerNavigate from './DrawerNavigate';
import CustomDrawer from '../Components/CustomDrawer';
import Otp from '../screens/OtpScreen/Otp';
import Service from '../screens/ServiceScreen/Service';


const Stack = createNativeStackNavigator();


const MainNavigate = () => {
  return (
    <NavigationContainer>

   <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName={SplashScreen}>
      {/* <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Otp' component={Otp} options={{headerShown:false}}/>
      <Stack.Screen  name='Sign' component={Signup} options={{headerShown:false}}/> */}
      <Stack.Screen name='MainHome' component={DrawerNavigate} />
      <Stack.Screen name='Service' component={Service} />  
     
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigate