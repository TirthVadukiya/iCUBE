import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Safety from '../screens/SafetyScreen/Safety';
import BottomTab from './BottomTab';
import Product from '../screens/ProductScreen/Product';



const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Safety" component={Safety} />
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigate;