import React, { Component } from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Output from './Components/Output';
import CalculatorButtonsContainer from './Containers/CalculatorButtonsContainer';

export default class App extends Component {
  state = {
    output: '',
    leftOperand: null,
    operator: null,
    calculatorButtons: [
      { value: 'c', color: "#9b9b9b", callback: () => this.clearState() },
      { value: '1', color: "#ff9b05", callback: () => this.updateOutput('1') },
      { value: '2', color: "#ff9b05", callback: () => this.updateOutput('2') },
      { value: '3', color: "#ff9b05", callback: () => this.updateOutput('3') },
      { value: '4', color: "#ff9b05", callback: () => this.updateOutput('4') },
      { value: '5', color: "#ff9b05", callback: () => this.updateOutput('5') },
      { value: '6', color: "#ff9b05", callback: () => this.updateOutput('6') },
      { value: '7', color: "#ff9b05", callback: () => this.updateOutput('7') },
      { value: '8', color: "#ff9b05", callback: () => this.updateOutput('8') },
      { value: '9', color: "#ff9b05", callback: () => this.updateOutput('9') },
      { value: '0', color: "#ff9b05", callback: () => this.updateOutput('0') },
      { value: '.', color: "#ff9b05", callback: async () => {
        if (this.state.output.includes('.')) {
          await this.setState({
            output: this.state.output.replace('.', '')
          });
        }
        this.updateOutput('.');
      } },
      { value: '-', color: "#ffcd05", callback: () => this.evaluate('-') },
      { value: '+', color: "#ffcd05", callback: () => this.evaluate('+') },
      { value: '/', color: "#ffcd05", callback: () => this.evaluate('/') },
      { value: '*', color: "#ffcd05", callback: () => this.evaluate('*') },
      { value: '=', color: "#9b9b9b", callback: () => this.evaluate() },
      { value: '←', color: "#9b9b9b", callback: () => this.setState({ output: this.state.output.slice(0, -1) }) }
    ]
  }

  clearState() {
    this.setState({
      output: '',
      leftOperand: null,
      operator: null
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

  setOperator(value) {
    this.setState({
      operator: value
    });
  }

  evaluate(operator = null) {
    if (this.state.output !== '') {
      if (!this.state.leftOperand && operator) {
        this.setLeftOperand(parseFloat(this.state.output));
        this.setOperator(operator);
        this.clearOutput();
      }
      else if (operator) {
        let evaluation;
        switch (this.state.operator) {
          case '-':
            evaluation = this.state.leftOperand - parseFloat(this.state.output);
            break;
          case '+':
            evaluation = this.state.leftOperand + parseFloat(this.state.output);
            break;
          case '/':
            evaluation = this.state.leftOperand / parseFloat(this.state.output);
            break;
          case '*':
            evaluation = this.state.leftOperand * parseFloat(this.state.output);
            break;
        }
        this.setLeftOperand(evaluation);
        this.setOperator(operator);
        this.clearOutput();
      }
      else if (this.state.leftOperand) {
        let evaluation;
        switch (this.state.operator) {
          case '-':
            evaluation = this.state.leftOperand - parseFloat(this.state.output);
            break;
          case '+':
            evaluation = this.state.leftOperand + parseFloat(this.state.output);
            break;
          case '/':
            evaluation = this.state.leftOperand / parseFloat(this.state.output);
            break;
          case '*':
            evaluation = this.state.leftOperand * parseFloat(this.state.output);
            break;
        }
        this.clearLeftOperand();
        this.clearOperator();
        this.setOutput(evaluation.toString());
      }
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
