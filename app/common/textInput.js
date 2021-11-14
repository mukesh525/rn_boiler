import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export const AppInputText = ({ value, onChangeText, style, type, hint }) => {
    // const [text, onChangeText] = React.useState(value);
    // const [number, onChangeNumber] = React.useState(null);

    return (
        <TextInput
            style={[styles.input, style]}
            onChangeText={onChangeText}
            value={value}
            placeholder={hint}
            keyboardType={type}

        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '90%',
        backgroundColor: '#F3F3F3',
        height: 50,
        margin: 10,
        borderRadius: 10,
        fontSize: 15,
        color: '#616161',
        padding: 15,
    },
});



