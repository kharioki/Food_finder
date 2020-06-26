import React, {useState, useEffect, useMemo} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {AuthContext} from './components/context';

import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import Bookmarks from './screens/BookmarkScreen';
import Settings from './screens/SettingsScreen';
import Support from './screens/SupportScreen';

import RootStack from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

export default App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('kharioki');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('kharioki');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Bookmarks" component={Bookmarks} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Support" component={Support} />
          </Drawer.Navigator>
        ) : (
          <RootStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
