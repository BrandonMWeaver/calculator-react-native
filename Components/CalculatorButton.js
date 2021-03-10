import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CalculatorButton(props) {
    return (
      <View style={styles.container}>
            <TouchableOpacity onPress={() => props.callback()}>
                <Text style={{...styles.button, backgroundColor: props.color}}>{props.value}</Text>
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
        width: "25%",
        height: "20%"
    },
    button: {
        padding: 10,
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "monospace",
        fontSize: 20,
        color: "#fff",
        borderRadius: 10
    }
});
