import React from 'react';
import { StyleSheet, View } from 'react-native';

import CalculatorButton from '../Components/CalculatorButton';

export default function CalculatorButtonsContainer(props) {
    return (
      <View style={styles.container}>
          {props.buttons.map((button, index) => {
              return <CalculatorButton key={index} value={button.value} callback={button.callback} />
          })}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: "#696969",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    }
});
