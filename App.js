import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
