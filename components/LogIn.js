/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    ScrollView,
    ListView,
    TouchableOpacity,
    Image,
    TextInput,
    Navigator,
    Alert
} from 'react-native';

import home from './Home.js'
export default class LogIn extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: '',
            pass: ''
        }
    }

    _isLogIn() {
        // if (this.state.user == 'supersaler' && this.state.pass == '123456') {
        //     this.props.navigator.push({
        //         name: 'Home',
        //         component: home
        //     });
        // }else{
        //     Alert.alert('Wrong password!');
        // }
        this.props.navigator.push({
                 name: 'Home',
                 component: home
             });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#81C784' }}>
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ color: '#455A64', fontSize: 33, fontWeight: 'bold' }}>Super Saler</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image
                        style={{ width: 200, height: 100 }}
                        source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                        />
                </View>
                <View style={{ flex: 6 }}>
                    <TextInput
                        style={{ backgroundColor: '#FAFAFA', height: 40, borderColor: '#E8F5E9', borderWidth: 1, marginTop: 30, marginLeft: 40, marginRight: 40, borderRadius: 8 }}
                        onChangeText={(text) => this.setState({ user: text })}
                        value={this.state.user}
                        underlineColorAndroid={'#FAFAFA'}
                        placeholder="Enter username..."
                        />
                    <TextInput
                        style={{ backgroundColor: '#FAFAFA', height: 40, borderColor: '#E8F5E9', borderWidth: 1, marginTop: 30, marginLeft: 40, marginRight: 40, borderRadius: 8 }}
                        onChangeText={(text) => this.setState({ pass: text })}
                        value={this.state.pass}
                        underlineColorAndroid={'#FAFAFA'}
                        secureTextEntry={true}
                        placeholder="Enter password..."
                        />
                    <TouchableOpacity style={{ marginTop: 100, height: 40, width: 100, borderWidth: 1, borderColor: '#757575', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                        onPress={() => { this._isLogIn() } }>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

module.exports = LogIn;
