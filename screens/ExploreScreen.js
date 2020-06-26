import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default Explore = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Explore screen</Text>
    </View>
  );
};
