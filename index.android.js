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
import {Scene, Router, Actions} from 'react-native-router-flux';

import LogIn from './components/LogIn.js';
import Home from './components/Home.js';
import DulieuKH from './components/DuLieuKH/DulieuKH.js';
import LichSu from './components/LichSu/LichSu.js';
import KhachCuaToi from './components/KhachCuaToi/KhachCuaToi.js';
import TienDo from './components/TienDo/TienDo.js';
import TaoDongLuc from './components/TaoDongLuc/TaoDongLuc.js';
import Checklist from './components/Checklist/Checklist.js';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LogIn} hideNavBar={true} title="Login"/>
    <Scene key="home" component={Home} hideNavBar={true} title="Home"/>
    <Scene key="DulieuKH" component={DulieuKH} hideNavBar={true} title="Dữ liệu khách hàng"/>
    <Scene key="LichSu" component={LichSu} hideNavBar={true} title="Lịch sử"/>
    <Scene key="KhachCuaToi" component={KhachCuaToi} hideNavBar={true} title="Khách của tôi"/>
    <Scene key="TienDo" component={TienDo} hideNavBar={true} title="Tiến độ"/>
    <Scene key="TaoDongLuc" component={TaoDongLuc} hideNavBar={true} title="Tạo động lực"/>
    <Scene key="Checklist" component={Checklist} hideNavBar={true} title="Checklist"/>
  </Scene>
);

export default class SuperSaler extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

AppRegistry.registerComponent('SuperSaler', () => SuperSaler);
