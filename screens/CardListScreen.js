import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {data} from '../model/data';
import Card from '../components/Card';

export default function CardListScreen({navigation}) {
  const renderItem = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() => navigation.navigate('CardItemDetails', {itemData: item})}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
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
