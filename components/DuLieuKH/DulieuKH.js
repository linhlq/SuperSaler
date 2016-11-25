import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ListView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import Data from './Data.js';
import styles from './Styles.js';

var data = [
  {text: 'DATABASE', icon: 'address-book'},
  {text: 'LỊCH SỬ', icon: 'history'},
  {text: 'KHÁCH CỦA TÔI', icon: 'money'},
  {text: 'ÔN TẬP KIẾN THỨC', icon: 'book'},
  {text: 'BÁO CÁO', icon: 'bar-chart'},
];

export default class DulieuKH extends Component {
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
      <TouchableOpacity style={styles.fistRowDrawer}>
        <Icon name={data.icon} size={18} color="black" />
        <Text style={styles.textDrawer}>{data.text}</Text>
      </TouchableOpacity>
    );
  }

  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };

  render() {
    var navigationView = (
      <View style={styles.drawer}>
        <View style={{flex:0.8, paddingTop:100}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => this._renderRow(data)}
          />
        </View>
      </View>
    )

    return (
      <View style={{flex:1, backgroundColor:'green'}}>
        <DrawerLayout
          ref={'DRAWER_REF'}
          drawerWidth={width*2/3}
          drawerPosition={DrawerLayout.positions.Left}
          renderNavigationView={() => navigationView}>

        <View style={styles.header}>
            <TouchableOpacity onPress={() => {this.moMenu()}} style={styles.iconMenu}>
              <Icon name="bars" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Data</Text>
            <View></View>
        </View>
          <View style={styles.container}>
            <View style={styles.body}>
              <Data />
            </View>
          </View>
        </DrawerLayout>
      </View>
    );
  }
}
