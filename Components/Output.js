import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Output extends Component {
    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.text}>{this.props.output}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        alignItems: "flex-end",
        backgroundColor: "#373737"
    },
    text: {
        flex: 1,
        marginTop: 10,
        marginRight: 10,
        fontFamily: "monospace",
        fontSize: 20,
        color: "#fff"
    }
});
