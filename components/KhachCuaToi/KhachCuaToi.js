import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ListView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import Data from './Data.js';
import styles from './Styles.js';

import LichSu from '../LichSu/LichSu.js';
import DulieuKH from '../DuLieuKH/DulieuKH.js';
import TienDo from '../TienDo/TienDo.js';
import TaoDongLuc from '../TaoDongLuc/TaoDongLuc.js';
import Checklist from '../Checklist/Checklist.js';
var data = [
  {text: 'Dữ liệu khách hàng', icon: 'address-book', key: 'DulieuKH'},
  {text: 'Lịch sử', icon: 'history', key: 'LichSu'},
  {text: 'Khách của tôi', icon: 'money', key: 'KhachCuaToi'},
  {text: 'Tiến độ', icon: 'money', key: 'TienDo'},
  {text: 'Tạo động lực', icon: 'book', key: 'TaoDongLuc'},
  {text: 'Checklist', icon: 'bar-chart', key: 'Checklist'},
];
var data2 = [
  {hoten: 'Test', sdt:'test', tintrang:'test'},
  {hoten: 'Test', sdt:'test', tintrang:'test'},
  {hoten: 'Test', sdt:'test', tintrang:'test'},
];

export default class KhachCuaToi extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
      dataSource2: ds.cloneWithRows(data2),
    };
    this._renderRow = this._renderRow.bind(this);
    this._renderRow2 = this._renderRow2.bind(this);
  }

  _renderRow(data) {
    return (
      <TouchableOpacity onPress={() => {this.changeScreen(data.key)}} style={styles.fistRowDrawer}>
        <Icon name={data.icon} size={18} color="black" />
        <Text style={styles.textDrawer}>{data.text}</Text>
      </TouchableOpacity>
    );
  }
  _renderRow2(data2){
    return(
      <TouchableOpacity
        style={styles.rowTable}>
        <View style={{flex:3, height:40, borderRightWidth:0.5,borderColor:'grey'}}>
          <Text style={styles.text}>{data2.hoten}</Text>
        </View>
        <View style={{flex:3, height:40, borderRightWidth:0.5,borderColor:'grey'}}>
          <Text style={styles.text}>{data2.sdt}</Text>
        </View>
        <View style={{flex:2, height:40,borderRightWidth:0.5,borderColor:'grey'}}>
          <Text style={styles.text}>{data2.tinhtrang}</Text>
        </View>
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
        this.dongMenu()
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

  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };
  dongMenu() {
    this.refs['DRAWER_REF'].closeDrawer();
  }

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
          <View style={styles.container}>
            <View style={styles.body}>
                <View
                  style={styles.container}>
                  <View
                    style={styles.rowTable}>
                    <View style={{flex:3, height:40, borderRightWidth:0.5,borderColor:'grey'}}>
                      <Text style={styles.text}>Tên</Text>
                    </View>
                    <View style={{flex:3, height:40, borderRightWidth:0.5,borderColor:'grey'}}>
                      <Text style={styles.text}>SDT</Text>
                    </View>
                    <View style={{flex:2, height:40,borderRightWidth:0.5,borderColor:'grey'}}>
                      <Text style={styles.text}>Tình trạng</Text>
                    </View>
                  </View>
                  <View>
                    <ListView
                      dataSource={this.state.dataSource}
                      renderRow={(data2) => this._renderRow2(data2)}
                    />
                  </View>
                </View>
            </View>
          </View>
        </DrawerLayout>
      </View>
    );
  }
}
