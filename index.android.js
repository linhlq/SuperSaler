/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/Home.js';

export default class SuperSaler extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{name:'Home', component: Home}}
        renderScene= {(route, navigator) => {
          if (route.component){
            return React.createElement(route.component, {navigator, passProps: route.props});
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('SuperSaler', () => SuperSaler);
