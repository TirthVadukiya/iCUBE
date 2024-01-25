import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/Home';
import Shop from '../screens/ShopScreen/Shop';
import Warranty from '../screens/WarrantyScreen/Warranty';
import Product from '../screens/ProductScreen/Product';
import OurProduct from '../screens/ProductsScreen/OurProduct';
import Service from '../screens/ServiceScreen/Service';
import {
  HOME,
  OUR_PRODUCT,
  PRODUCT,
  SERVICE,
  SHOP,
  WARRANTY,
} from '../constants/route-names';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={WARRANTY}
        component={Warranty}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={PRODUCT}
        component={Product}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={SERVICE}
        component={Service}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={SHOP}
        component={Shop}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={OUR_PRODUCT}
        component={OurProduct}
        options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
