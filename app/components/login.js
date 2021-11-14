import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions, msgActions } from '@actions';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import theme from './../../app_theme.json';
import { AppInputText, Button } from '@common'
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
                        icon={<Icon name="envelope-o" size={20} color="#616161" />}
                        hint="Email address"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />

                    <AppInputText
                        hint="Password"
                        icon={<FeatherIcon name="lock" size={20} color="#616161" />}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />

                    <TouchableOpacity
                        activeOpacity={0.4}
                        style={{ alignSelf: 'flex-end', paddingHorizontal: 30, }}
                        onPress={() => this.props.navigation.replace("ForgotPassword")}>
                        <Text style={{
                            color: '#616161',
                            fontSize: 15,
                            textAlign: 'right',
                            paddingVertical: 8,
                        }}>
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity >

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