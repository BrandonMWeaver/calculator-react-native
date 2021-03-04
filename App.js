import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Output from './Components/Output';

export default class App extends Component {
  state = {
    output: ''
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Output output={this.state.output} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505"
  }
});
