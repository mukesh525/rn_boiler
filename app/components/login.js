import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions, msgActions } from '@actions';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
} from 'react-native';
import theme from './../../app_theme.json';
import { AppInputText, Button } from '@common'

class Login extends Component {
    state = { email: '', password: '' };

    buttonClick = () => {
        this.props.navigation.replace("Home")
    };

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: theme.white, flex: 1, justifyContent: 'flex-start' }}>
                <View style={[styles.body, { flex: .3 }]}>
                    <Text style={styles.sectionTitle}>The Hub</Text>
                </View>
                <View style={styles.body}>
                    <AppInputText
                        type="email-address"
                        hint="Email address"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <AppInputText
                        hint="Password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />

                    <Button
                        style={styles.submit}
                        onPress={this.buttonClick}
                        title="Login"
                    />

                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: .3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: '600',
        marginLeft: 5,
        textAlign: 'center',
        color: theme.primary,
    },
    submit: {
        width: '90%',
        height: 40,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#5BCD6D'
    }



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
)(Login);