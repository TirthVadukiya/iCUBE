import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainStack from './MainStack';
import Safety from '../screens/SafetyScreen/Safety';
import Product from '../screens/ProductScreen/Product';


const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false,
      // tabBarShowLabel: false,
      tabBarActiveTintColor: "#EC581F",
      // tabBarActiveBackgroundColor:"black",
      tabBarStyle: {
        height: Platform.OS == 'ios' ? 80 : 65,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
         backgroundColor:"#E9E9E9"
        
      },

      // tabBarItemStyle: {
      //   backgroundColor: '#E9E9E9',
      //   borderCurve:"circular",
      //   // borderRadius:10
      // },
    }}>
    <Tab.Screen
      name='MainStack'
      component={MainStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
         <Image source={require("../../assets/images/HomeLogo.png")} style={{resizeMode:"center"}}/>
        ),
      }}
    />

    <Tab.Screen
      name='  '
      component={Product}
      options={{
        tabBarIcon: ({color, size}) => (
          <Image source={require("../../assets/images/sos.png")} style={styles.sosImg}/>
        ),
      }}
    />
    <Tab.Screen
      name='safety'
      component={Safety}
      options={{
        tabBarLabel: 'Safety Manual',
        tabBarIcon: ({color, size}) => (
          <Image source={require("../../assets/images/SafetyLogo.png")} style={{resizeMode:"center"}}/>
        ),
      }}
    />

  </Tab.Navigator>
   
  );
};

const styles = StyleSheet.create({
  sosImg : {
   height:68,width:67,bottom:10
  }
})

export default BottomTab;


