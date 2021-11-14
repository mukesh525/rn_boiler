import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions, msgActions } from '@actions';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Pressable,
    Image
} from 'react-native';
import theme from './../../app_theme.json';

class ForgotPassword extends Component {
    state = { text: 'h' };

    buttonClick = () => {
        this.props.navigation.replace("Home")
    };

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: theme.white, flex: 1 }}>
                <View style={styles.body}>
                    {/* <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40 / 2,
                            overflow: "hidden",
                            borderColor: "red"

                        }}
                        source={{
                            uri: 'https://picsum.photos/200',
                        }}
                    /> */}
                    <Pressable
                        style={styles.submit}
                        onPress={() => this.buttonClick()}
                    >
                        <Text style={styles.sectionTitle}>ForgotPassword</Text>
                    </Pressable>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: '600',
        marginLeft: 5,
        textAlign: 'center',
        color: theme.primary,
    },



});

function mapState(state) {
    const { message } = state;
    return { message: message.message };
}
const actionCreators = {
    success: alertActions.success,
    error: alertActions.error,
    clear: alertActions.clear,
    sendMessage: msgActions.sendMessage,
};
export default connect(
    mapState,
    actionCreators,
)(ForgotPassword);