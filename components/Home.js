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
  DrawerLayoutAndroid,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import DulieuKH from './DuLieuKH/DulieuKH.js';
import LichSu from './LichSu/LichSu.js';
import KhachCuaToi from './KhachCuaToi/KhachCuaToi.js';
import TienDo from './TienDo/TienDo.js';
import TaoDongLuc from './TaoDongLuc/TaoDongLuc.js';
import Checklist from './Checklist/Checklist.js';

var data = [
  {title: "Dữ liệu khách hàng", color: "#C8E6C9", key: 'DulieuKH'},
  {title: "Lịch sử", color: "#A5D6A7", key: 'LichSu'},
  {title: "Khách của tôi", color: "#81C784", key: 'KhachCuaToi'},
  {title: "Tiến độ", color: "#4CAF50", key: 'TienDo'},
  {title: "Tạo động lực", color: "#388E3C", key: 'TaoDongLuc'},
  {title: "Checklist", color: "#2E7D32", key: 'Checklist'},
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(data) {
    return (
      <TouchableOpacity onPress={() => {this.changeScreen(data.key)}} style={{borderRadius:10, padding:10, justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: data.color}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.title}</Text>
      </TouchableOpacity>
    );
  }

  changeScreen(_key) {
    switch (_key) {
      case 'DulieuKH':
        Actions.DulieuKH()
        break;
      case 'LichSu':
        Actions.LichSu()
        break;
      case 'KhachCuaToi':
        Actions.KhachCuaToi()
        break;
      case 'TienDo':
        Actions.TienDo()
        break;
      case 'TaoDongLuc':
        Actions.TaoDongLuc()
        break;
      case 'Checklist':
        Actions.Checklist()
        break;
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => this._renderRow(data)}
      />
    );
  }
}
