import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

import SplashScreen from '../screens/SplashScreen/Splash';
import Safety from '../screens/SafetyScreen/Safety';
import Signup from '../screens/SignupScreen/Signup';
import Login from '../screens/LoginScreen/Login';
import Home from '../screens/HomeScreen/Home';
import BottomTab from './BottomTab';


const Stack = createNativeStackNavigator();

const MainNavigate = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName={SplashScreen}>
      {/* <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen  name='Sign' component={Signup} options={{headerShown:false}}/> */}
      <Stack.Screen name='BottomTab' component={BottomTab} />
      <Stack.Screen  name='Home' component={Home} options={{headerShown:false}}/>
   
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigate