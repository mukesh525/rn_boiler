import React from "react";
import { View, StyleSheet, TextInput } from "react-native";


export const AppInputText = ({ value, onChangeText, style, type, hint, icon }) => {
    // const [text, onChangeText] = React.useState(value);
    // const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.input}>
            {icon}
            <TextInput
                style={[{ marginLeft: 10 }, style]}
                onChangeText={onChangeText}
                value={value}
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                underlineColorAndroid="transparent"
                placeholder={hint}
                keyboardType={type}

            />
        </View>
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

        flexDirection: 'row'
    },
});



