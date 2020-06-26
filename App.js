import React, {useState, useEffect, useMemo, useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
  const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  // reducers
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      default:
        break;
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  const authContext = useMemo(
    () => ({
      signIn: async foundUser => {
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }

        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          userToken = 'kiki';
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        let userToken;
        userName = null;
        if (userName == 'user' && password == 'pass') {
          userToken = 'kiki';
        }

        dispatch({type: 'REGISTER', id: userName, token: userToken});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken: null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }

      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
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
