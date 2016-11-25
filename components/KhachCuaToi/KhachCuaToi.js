import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Scrollview
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import Data from './Data.js';
import styles from './Styles.js';
var navigationView = (
  <View style={styles.drawer}>
    <View style={{flex:0.8, paddingTop:100}}>
      <TouchableOpacity style={styles.fistRowDrawer}>
        <Icon name="address-book" size={18} color="black" />
        <Text style={styles.textDrawer}>DATABASE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowDrawer}>
        <Icon name="history" size={18} color="black" />
        <Text style={styles.textDrawer}>LỊCH SỬ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowDrawer}>
        <Icon name="money" size={18} color="black" />
        <Text style={styles.textDrawer}>KHÁCH CỦA TÔI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowDrawer}>
        <Icon name="book" size={18} color="black" />
        <Text style={styles.textDrawer}>ÔN TẬP KIẾN THỨC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowDrawer}>
        <Icon name="bar-chart" size={18} color="black" />
        <Text style={styles.textDrawer}>BÁO CÁO</Text>
      </TouchableOpacity>
    </View>
  </View>
)
export default class KhachCuaToi extends Component {
  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };

  render() {
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
            <Text style={styles.textHeader}>Khách Của Tôi</Text>
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
