import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default Settings = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Settings screen</Text>
    </View>
  );
};
