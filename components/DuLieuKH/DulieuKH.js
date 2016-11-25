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

import LichSu from '../LichSu/LichSu.js';
import KhachCuaToi from '../KhachCuaToi/KhachCuaToi.js';
import TienDo from '../TienDo/TienDo.js';
import TaoDongLuc from '../TaoDongLuc/TaoDongLuc.js';
import Checklist from '../Checklist/Checklist.js';

var data = [
  {text: 'Dữ liệu khách hàng', icon: 'address-book', name: 'DulieuKH', component: DulieuKH, position: 0},
  {text: 'Lịch sử', icon: 'history', name: 'LichSu', component: LichSu, position: 1},
  {text: 'Khách của tôi', icon: 'money', name: 'KhachCuaToi', component: KhachCuaToi, position: 2},
  {text: 'Tiến độ', icon: 'money', name: 'TienDo', component: TienDo, position: 3},
  {text: 'Tạo động lực', icon: 'book', name: 'TaoDongLuc', component: TaoDongLuc, position: 4},
  {text: 'Checklist', icon: 'bar-chart', name: 'Checklist', component: Checklist, position: 5},
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
      <TouchableOpacity onPress={() => {this.changeScreen(data.name, data.component, data.position)}} style={styles.fistRowDrawer}>
        <Icon name={data.icon} size={18} color="black" />
        <Text style={styles.textDrawer}>{data.text}</Text>
      </TouchableOpacity>
    );
  }

  changeScreen(_name, _component, _position) {
    if (_position != this.props.passProps.position) {
      this.props.navigator.push({
        name: _name,
        component: _component,
        props: {
          position: _position,
        }
      });
    } else {
      this.refs['DRAWER_REF'].closeDrawer();
    }
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
            <Text style={styles.textHeader}>{this.props.passProps.title}</Text>
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
