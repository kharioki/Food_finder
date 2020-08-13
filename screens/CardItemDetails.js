import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CardItemDetails({route}) {
  const itemData = route.params.itemData;
  return (
    <View>
      <Text>{itemData.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
