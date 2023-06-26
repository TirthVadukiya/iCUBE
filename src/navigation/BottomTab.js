import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/HomeScreen/Home';
import Safety from '../screens/SafetyScreen/Safety';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    
      <Tab.Navigator
        style={styles.title}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            
            let iconName;
            let rn = route.name;

            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Like') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (rn === 'Person') {
              iconName = focused ? 'person' : 'person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={'#background: rgba(243, 93, 56, 1)'}/>;

          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray', 
          // tabBarShowLabel: false,
        })}
        
        >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Like" component={Safety}  options={{headerShown:false}}/>
        {/* <Tab.Screen name="Person" component={Person}  options={{headerShown:false}}/> */}
       
      </Tab.Navigator>
   
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    // borderLeftWidth:0.2,
    // borderRightWidth:0.2,
    backgroundColor:'blue',
    color:'black',
  },
});

export default BottomTab;


