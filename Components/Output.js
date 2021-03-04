import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Output(props) {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{props.output}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-end"
    },
    text: {
        marginTop: 10,
        marginRight: 10,
        fontFamily: "monospace",
        fontSize: 20,
        color: "#fff"
    }
});
