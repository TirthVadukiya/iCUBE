import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';
import Safety from '../screens/SafetyScreen/Safety';
import Sos from '../screens/SosScreen/Sos';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EC581F',
        tabBarInactiveTintColor: '#727270',

        tabBarStyle: {
          height: Platform.OS == 'ios' ? 70 : 55,
          width: '100%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          // backgroundColor: '#E9E9E9',
        },
      }}>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/images/home_logo.png')}
              style={{resizeMode: 'contain', height: 30, width: 30}}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            fontFamily: 'Raleway-SemiBold',
            bottom: 5,
          },
        }}
      />

      <Tab.Screen
        name="  "
        component={Sos}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/images/sos.png')}
              style={styles.sosImg}
            />
          ),
        }}
      />
      <Tab.Screen
        name="safety"
        component={Safety}
        options={{
          tabBarLabel: 'Safety Manual',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../assets/images/SafetyLogo.png')}
              style={{resizeMode: 'contain', height: 30, width: 30}}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            fontFamily: 'Raleway-SemiBold',
            bottom: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sosImg: {
    resizeMode: 'contain',
    height: 68,
    width: 67,
    bottom: 10,
  },
});

export default BottomTab;
