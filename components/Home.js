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

var data = [
  {name: "Dữ liệu khách hàng", color: "#C8E6C9"},
  {name: "Lịch sử", color: "#A5D6A7"},
  {name: "Khách của tôi", color: "#81C784"},
  {name: "Lịch hẹn", color: "#66BB6A"},
  {name: "Tiến độ", color: "#4CAF50"},
  {name: "Ôn tập kiến thức", color: "#43A047"},
  {name: "Tạo động lực", color: "#388E3C"},
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
      <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: 90, backgroundColor: data.color}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.name}</Text>
      </TouchableOpacity>
    );
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
