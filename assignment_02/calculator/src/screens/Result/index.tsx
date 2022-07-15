import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {CalculationItem, ReduxState} from '../../interfaces';

const ResultScreen = () => {
  const list_calculation = useSelector(
    (state: ReduxState) => state.app.list_calculation,
  );

  console.log({list_calculation});

  const renderItem = ({
    item,
    index,
  }: {
    item: CalculationItem;
    index: number;
  }) => {
    return (
      <View style={styles.viewChildren}>
        <View style={styles.view1}>
          <Text style={styles.fontSizeView}>{item.calculate}</Text>
        </View>
        <View style={styles.viewResult}>
          <Text style={styles.textResult}>{item.result}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ViewS}>
        <FlatList
          data={list_calculation}
          renderItem={renderItem}
          keyExtractor={item => item.calculate}
        />
      </View>
    </View>
  );
};
export default ResultScreen;
