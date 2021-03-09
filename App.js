import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Output from './Components/Output';
import CalculatorButtonsContainer from './Containers/CalculatorButtonsContainer';

export default class App extends Component {
  state = {
    output: '',
    leftOperand: null,
    calculatorButtons: [
      { value: 'c', callback: () => this.clearState() },
      { value: '1', callback: () => this.updateOutput('1') },
      { value: '2', callback: () => this.updateOutput('2') },
      { value: '3', callback: () => this.updateOutput('3') },
      { value: '4', callback: () => this.updateOutput('4') },
      { value: '5', callback: () => this.updateOutput('5') },
      { value: '6', callback: () => this.updateOutput('6') },
      { value: '7', callback: () => this.updateOutput('7') },
      { value: '8', callback: () => this.updateOutput('8') },
      { value: '9', callback: () => this.updateOutput('9') },
      { value: '0', callback: () => this.updateOutput('0') },
      { value: '-', callback: () => this.evaluate('-') },
      { value: '+', callback: () => this.evaluate('+') },
      { value: '/', callback: () => this.evaluate('/') },
      { value: '*', callback: () => this.evaluate('*') },
      { value: '=', callback: () => this.evaluate() },
    ]
  }

  clearState() {
    this.setState({
      output: '',
      leftOperand: null,
    });
  }

  clearOutput() {
    this.setState({
      output: ''
    });
  }

  clearLeftOperand() {
    this.setState({
      leftOperand: null
    });
  }

  clearOperator() {
    this.setState({
      operator: null
    });
  }

  updateOutput(value) {
    this.setState({
      output: `${this.state.output}${value}`
    });
  }

  setOutput(value) {
    this.setState({
      output: value
    });
  }

  setLeftOperand(value) {
    this.setState({
      leftOperand: value
    });
  }

  evaluate(operator = null) {
    if (!this.state.leftOperand && operator) {
      this.setLeftOperand(parseFloat(this.state.output));
      this.clearOutput();
    }
    else if (operator) {
      // TODO: Evaluate independent operations.
      const evaluation = this.state.leftOperand + parseFloat(this.state.output);
      this.setLeftOperand(evaluation);
      this.clearOutput();
    }
    else {
      const evaluation = this.state.leftOperand + parseFloat(this.state.output);
      this.setOutput(evaluation);
      this.clearLeftOperand();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Output output={this.state.output} />
        <CalculatorButtonsContainer buttons={this.state.calculatorButtons} />
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
