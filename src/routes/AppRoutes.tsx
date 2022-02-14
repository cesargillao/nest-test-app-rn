import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { HomeScreen } from '../screens';
import { useDispatch } from 'react-redux';
import { authLogout } from '../redux';

const Drawer = createDrawerNavigator();

export const AppRoutes = () => {
  const dispatch = useDispatch();

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props} style={{backgroundColor: '#FFFFFF88'}}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar sesión" onPress={() => dispatch(authLogout())} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
