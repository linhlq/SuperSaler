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
  {title: "Dữ liệu khách hàng", color: "#C8E6C9", name: 'DulieuKH', component: DulieuKH},
  {title: "Lịch sử", color: "#A5D6A7", name: 'DulieuKH', component: DulieuKH},
  {title: "Khách của tôi", color: "#81C784", name: 'DulieuKH', component: DulieuKH},
  {title: "Lịch hẹn", color: "#66BB6A", name: 'DulieuKH', component: DulieuKH},
  {title: "Tiến độ", color: "#4CAF50", name: 'DulieuKH', component: DulieuKH},
  {title: "Ôn tập kiến thức", color: "#43A047", name: 'DulieuKH', component: DulieuKH},
  {title: "Tạo động lực", color: "#388E3C", name: 'DulieuKH', component: DulieuKH},
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
      <TouchableOpacity onPress={() => {this.changeScreen(data.name, data.component)}} style={{justifyContent: 'center', alignItems: 'center', height: 90, backgroundColor: data.color}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.title}</Text>
      </TouchableOpacity>
    );
  }

  changeScreen(_name, _component) {
    this.props.navigator.push({
      name: _name,
      component: _component,
      props: {
    
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
