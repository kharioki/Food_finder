import React from 'react';
import {View, Text, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default Details = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Notifications screen</Text>
    </View>
  );
};
