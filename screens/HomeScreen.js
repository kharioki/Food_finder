import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default Home = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
