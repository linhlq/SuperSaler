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
  Navigator,
  AsyncStorage
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
import CustomerDetail from './components/CustomerDetail/CustomerDetail.js';

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
    <Scene key="CustomerDetail" component={CustomerDetail} hideNavBar={true} title="CustomerDetail"/>
  </Scene>
);

var data = [
  {code: 'C1', name: 'Nguyen Van A', birthday: '01/10/1995', address: 'Cau Giay', phone: '0987654321', employee: 'Khanh', status: 'Da lien he', result: 'OK'},
  {code: 'C2', name: 'Tran Van B', birthday: '15/11/1986', address: 'Hai Ba Trung', phone: '01675875478', employee: 'Khanh', status: 'Chua lien he', result: 'OK'},
  {code: 'C3', name: 'Le Van C', birthday: '14/02/1984', address: 'Thanh Xuan', phone: '0989325642', employee: 'Khanh', status: 'Tach roi', result: 'Fail'},
  {code: 'C4', name: 'Ta Thi D', birthday: '13/03/1993', address: 'Tu Liem', phone: '0982759568', employee: 'Khanh', status: 'Dang ngam cuu', result: 'OK'},
  {code: 'C5', name: 'Tong Van E', birthday: '30/02/1992', address: 'Sao Hoa', phone: '01668433512', employee: 'Khanh', status: 'Da lien he', result: 'OK'},
]


export default class SuperSaler extends Component {
  componentWillMount() {
    AsyncStorage.setItem("cus1", JSON.stringify(data[0]));
    AsyncStorage.setItem("cus2", JSON.stringify(data[1]));
    AsyncStorage.setItem("cus3", JSON.stringify(data[2]));
    AsyncStorage.setItem("cus4", JSON.stringify(data[3]));
    AsyncStorage.setItem("cus5", JSON.stringify(data[4]));
  }

  render() {
    return <Router scenes={scenes}/>
  }
}

AppRegistry.registerComponent('SuperSaler', () => SuperSaler);
