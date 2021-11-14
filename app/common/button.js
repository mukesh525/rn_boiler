import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const Button = ({ onPress, style, title }) => {
    // const [text, onChangeText] = React.useState(value);
    // const [number, onChangeNumber] = React.useState(null);

    return (
        <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.button]}
            onPress={onPress}>
            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', paddingVertical: 15 }}> {title}</Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    button: {
        // flex: 1,
        marginTop: 20,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#5BCD6D'
    },
});



