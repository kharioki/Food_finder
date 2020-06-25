import React from 'react';
import {View, Text, Button} from 'react-native';

export default Details = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details screen</Text>
      <Button
        title="Go to details screen... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
