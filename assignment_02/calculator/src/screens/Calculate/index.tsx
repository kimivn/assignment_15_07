import React, {useState} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './style';
import {useDispatch} from 'react-redux';
import {saveDataCalculate} from '../../redux';
import {CalculationItem} from '../../interfaces';

const OPERATIONS = ['DEL', '+', '-', '*', '/'];

const NUMBERS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['.', 0, '='],
];

const CalculateScreen = () => {
  const [valueResult, setValueResult] = useState('');
  const [dataResult, setDataResult] = useState([]);
  const dispatch = useDispatch();

  console.log({valueResult, dataResult});

  const calculateResult = () => {
    if (valueResult && valueResult !== '') {
      const valueCalculation = eval(valueResult);
      const nCalculation: CalculationItem = {
        calculate: valueResult,
        result: valueCalculation,
      };
      setValueResult(valueCalculation);
      dispatch(saveDataCalculate(nCalculation));
    }
  };

  const validate = () => {
    const text = valueResult;
    if (text) {
      switch (text.slice(-1)) {
        case '+':
        case '-':
        case '*':
        case '/':
          return false;
      }

      return true;
    } else {
      return false;
    }
  };

  const buttonPressed = text => {
    if (text === '=') {
      return validate() && calculateResult();
    } else {
      setValueResult(valueResult + text);
    }
  };

  const operate = operation => {
    if (valueResult) {
      if (valueResult === '') {
        return;
      }
      const valueStr = valueResult.toString();
      switch (operation) {
        case 'DEL':
          setValueResult('');
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          const lastChar: string = valueStr.split('').pop() || '';
          if (lastChar && OPERATIONS.indexOf(lastChar) > 0) {
            const removeLastChar = valueStr.substring(0, valueStr.length - 1);
            setValueResult(removeLastChar + operation);
          } else {
            setValueResult(valueResult + operation);
          }
      }
    }
  };

  const numberComponent = () => {
    const rows: any = [];
    for (let i = 0; i < 4; i++) {
      let row: Array<any> = [];
      for (let j = 0; j < 3; j++) {
        const textValue = NUMBERS[i][j];
        row.push(
          <TouchableOpacity
            onPress={() => buttonPressed(textValue)}
            style={styles.btn}
            key={`key_${i}_${j}`}>
            <Text style={[styles.btnText, styles.white]}>{textValue}</Text>
          </TouchableOpacity>,
        );
      }

      rows.push(
        <View style={styles.row} key={`key_${i}`}>
          {row}
        </View>,
      );
    }

    return rows;
  };

  const opsComponent = () => {
    const ops: any = [];
    for (let i = 0; i < 5; i++) {
      let symbols = OPERATIONS[i];
      ops.push(
        <TouchableOpacity
          key={symbols}
          style={styles.btn}
          onPress={() => operate(symbols)}>
          <Text style={[styles.btnText, styles.white]}>{symbols}</Text>
        </TouchableOpacity>,
      );
    }
    return ops;
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.result}>
          <Text style={styles.valueResult}>{valueResult}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{numberComponent()}</View>
          <View style={styles.operations}>{opsComponent()}</View>
        </View>
      </>
    </SafeAreaView>
  );
};
export default CalculateScreen;
