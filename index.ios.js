import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/Home.js';
import DulieuKH from './components/DuLieuKH/DulieuKH.js';

export default class SuperSaler extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{name:'DulieuKH', component: DulieuKH}}
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
