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
  Dimensions,
  ListView,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import styles from '../DuLieuKH/Styles.js'

import LichSu from '../LichSu/LichSu.js';
import KhachCuaToi from '../KhachCuaToi/KhachCuaToi.js';
import TienDo from '../TienDo/TienDo.js';
import DulieuKH from '../DuLieuKH/DulieuKH.js';
import Checklist from '../Checklist/Checklist.js';

var data = [
  {text: 'Dữ liệu khách hàng', icon: 'address-book', key: 'DulieuKH'},
  {text: 'Lịch sử', icon: 'history', key: 'LichSu'},
  {text: 'Khách của tôi', icon: 'money', key: 'KhachCuaToi'},
  {text: 'Tiến độ', icon: 'money', key: 'TienDo'},
  {text: 'Tạo động lực', icon: 'book', key: 'TaoDongLuc'},
  {text: 'Checklist', icon: 'bar-chart', key: 'Checklist'},
];


export default class TaoDongLuc extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
    this._renderRow = this._renderRow.bind(this);
  }
  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };
  dongMenu() {
    this.refs['DRAWER_REF'].closeDrawer();
  }
  _renderRow(data) {
    return (
      <TouchableOpacity onPress={() => {this.changeScreen(data.key)}} style={styles.fistRowDrawer}>
        <Icon name={data.icon} size={18} color="#336600" />
        <Text style={[styles.textDrawer,{color:'#336600'}]}>{data.text}</Text>
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
        this.dongMenu()
        break;
      case 'Checklist':
        Actions.Checklist()
        break;
    }
  }
  render() {
    var navigationView = (
      <View style={styles.drawer}>
        <View style={{flex:0.8}}>
          <Image style={{width:width*2/3, height:100}} source={require('../../img/logo-drawer.png')}/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => this._renderRow(data)}
          />
        </View>
      </View>
    )
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <DrawerLayout
          ref={'DRAWER_REF'}
          drawerWidth={width*2/3}
          drawerPosition={DrawerLayout.positions.Left}
          renderNavigationView={() => navigationView}>

        <View style={styles.header}>
            <TouchableOpacity onPress={() => {this.moMenu()}} style={styles.iconMenu}>
              <Icon name="bars" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>{this.props.title}</Text>
            <View></View>
        </View>
          <View>
            <ScrollView style={{padding:5}}>
                <Image
                  resizeMode='contain'
                  style={{height:width, width:width, borderWidth:5}}
                  source={require('../../img/quote2.png')}
                />
                <Image
                  resizeMode='contain'
                  style={{height:width, width:width, borderWidth:5}}
                  source={require('../../img/quote1.png')}
                />
                <Image
                  resizeMode='contain'
                  style={{height:width, width:width, borderWidth:5}}
                  source={require('../../img/quote2.png')}
                />
                <View style={{height:50}}>
                </View>
            </ScrollView>
          </View>
        </DrawerLayout>
      </View>
    );
  }
}
