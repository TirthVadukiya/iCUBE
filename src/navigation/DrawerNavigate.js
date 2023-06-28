import React from 'react';
import { createDrawerNavigator,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Safety from '../screens/SafetyScreen/Safety';
import BottomTab from './BottomTab';
import Product from '../screens/ProductScreen/Product';
import CustomDrawer from '../Components/CustomDrawer';



const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigate;