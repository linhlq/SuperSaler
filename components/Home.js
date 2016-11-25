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

var data = [
  {title: "Dữ liệu khách hàng", color: "#C8E6C9", name: 'DulieuKH', component: DulieuKH, position: 0},
  {title: "Lịch sử", color: "#A5D6A7", name: 'DulieuKH', component: DulieuKH, position: 1},
  {title: "Khách của tôi", color: "#81C784", name: 'DulieuKH', component: DulieuKH, position: 2},
  {title: "Lịch hẹn", color: "#66BB6A", name: 'DulieuKH', component: DulieuKH, position: 3},
  {title: "Tiến độ", color: "#4CAF50", name: 'DulieuKH', component: DulieuKH, position: 4},
  {title: "Ôn tập kiến thức", color: "#43A047", name: 'DulieuKH', component: DulieuKH, position: 5},
  {title: "Tạo động lực", color: "#388E3C", name: 'DulieuKH', component: DulieuKH, position: 6},
  {title: "Báo cáo", color: "#2E7D32", name: 'DulieuKH', component: DulieuKH, position: 7},
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
      <TouchableOpacity onPress={() => {this.changeScreen(data.name, data.component, data.position)}} style={{justifyContent: 'center', alignItems: 'center', height: 90, backgroundColor: data.color}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.title}</Text>
      </TouchableOpacity>
    );
  }

  changeScreen(_name, _component, _position) {
    this.props.navigator.push({
      name: _name,
      component: _component,
      props: {
        position: _position,
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
