import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default Home = () => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home screen</Text>
    </View>
  );
};
