import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/HomeScreen/Home';
import Shop from '../screens/ShopScreen/Shop';
import Warranty from '../screens/WarrantyScreen/Warranty';
import Product from '../screens/ProductScreen/Product';
import OurProduct from '../screens/ProductsScreen/OurProduct';



const Stack = createNativeStackNavigator();

function MainStack() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='Warranty' component={Warranty} />
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Shop' component={Shop} />
      <Stack.Screen name='OurProduct' component={OurProduct} />
    </Stack.Navigator>
  );
}

export default MainStack;