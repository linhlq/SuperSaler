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

import DulieuKH from './DuLieuKH/DulieuKH.js';
import LichSu from './LichSu/LichSu.js';
import KhachCuaToi from './KhachCuaToi/KhachCuaToi.js';
import TienDo from './TienDo/TienDo.js';
import TaoDongLuc from './TaoDongLuc/TaoDongLuc.js';
import Checklist from './Checklist/Checklist.js';

var data = [
  {title: "Dữ liệu khách hàng", color: "#C8E6C9", name: 'DulieuKH', component: DulieuKH, position: 0},
  {title: "Lịch sử", color: "#A5D6A7", name: 'LichSu', component: LichSu, position: 1},
  {title: "Khách của tôi", color: "#81C784", name: 'KhachCuaToi', component: KhachCuaToi, position: 2},
  {title: "Tiến độ", color: "#4CAF50", name: 'TienDo', component: TienDo, position: 3},
  {title: "Tạo động lực", color: "#388E3C", name: 'TaoDongLuc', component: TaoDongLuc, position: 4},
  {title: "Checklist", color: "#2E7D32", name: 'Checklist', component: Checklist, position: 5},
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
      <TouchableOpacity onPress={() => {this.changeScreen(data.title, data.name, data.component, data.position)}} style={{justifyContent: 'center', alignItems: 'center', height: 90, backgroundColor: data.color}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.title}</Text>
      </TouchableOpacity>
    );
  }

  changeScreen(_title, _name, _component, _position) {
    this.props.navigator.push({
      name: _name,
      component: _component,
      props: {
        position: _position,
        title: _title,
      }
    });
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
