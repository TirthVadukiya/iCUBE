import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/HomeScreen/Home';
import Shop from '../screens/ShopScreen/Shop';
import Warranty from '../screens/WarrantyScreen/Warranty';
import Product from '../screens/ProductScreen/Product';
import OurProduct from '../screens/ProductsScreen/OurProduct';
import Service from '../screens/ServiceScreen/Service';



const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='home' component={Home} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='Warranty' component={Warranty} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='Product' component={Product} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='Service' component={Service} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='Shop' component={Shop} options={{animation:"slide_from_right"}}/>
      <Stack.Screen name='OurProduct' component={OurProduct} options={{animation:"slide_from_right"}}/>
    </Stack.Navigator>
  );
}

export default MainStack;