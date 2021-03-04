import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Output from './Components/Output';
import CalculatorButtonsContainer from './Containers/CalculatorButtonsContainer';

const calculatorButtons = [
  'c',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '+',
  '/',
  '*',
  '='
];

export default class App extends Component {
  state = {
    output: ''
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Output output={this.state.output} />
        <CalculatorButtonsContainer buttons={calculatorButtons} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373737"
  }
});
