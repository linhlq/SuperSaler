import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import DatePicker from 'react-native-datepicker';
import Data from '../DuLieuKH/Data.js';
import styles from '../KhachCuaToi/Styles.js';
import * as Progress from 'react-native-progress';

import DulieuKH from '../DuLieuKH/DulieuKH.js';
import KhachCuaToi from '../KhachCuaToi/KhachCuaToi.js';
import TaoDongLuc from '../TaoDongLuc/TaoDongLuc.js';
import Checklist from '../Checklist/Checklist.js';
import LichSu from '../LichSu/LichSu.js';

var moment = require('moment');
var data = [
  {text: 'Dữ liệu khách hàng', icon: 'address-book', key: 'DulieuKH'},
  {text: 'Lịch sử', icon: 'history', key: 'LichSu'},
  {text: 'Khách của tôi', icon: 'money', key: 'KhachCuaToi'},
  {text: 'Tiến độ', icon: 'money', key: 'TienDo'},
  {text: 'Tạo động lực', icon: 'book', key: 'TaoDongLuc'},
  {text: 'Checklist', icon: 'bar-chart', key: 'Checklist'},
];
var data2 = [
  {time:'test', hoten: 'Test', sdt:'test', tinhtrang:'test'},
  {time:'test', hoten: 'Test', sdt:'test', tinhtrang:'test'},
  {time:'test', hoten: 'Test', sdt:'test', tinhtrang:'test'},

];

export default class TienDo extends Component {
    constructor(props, context) {
        super(props, context);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data),
          dataSource2: ds2.cloneWithRows(data2),
          date: new Date()
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
          <View style={{flex:2, height:40, borderWidth:0.5,borderColor:'grey'}}>
            <Text style={styles.text}>{data2.time}</Text>
          </View>
          <View style={{flex:3, height:40, borderWidth:0.5,borderColor:'grey'}}>
            <Text style={styles.text}>{data2.hoten}</Text>
          </View>
          <View style={{flex:3, height:40, borderWidth:0.5,borderColor:'grey'}}>
            <Text style={styles.text}>{data2.sdt}</Text>
          </View>
          <View style={{flex:2, height:40,borderWidth:0.5,borderColor:'grey'}}>
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
          Actions.KhachCuaToi()
          break;
        case 'TienDo':
         this.dongMenu()
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
      <View style={{flex:1, backgroundColor:'#FAFAFA'}}>
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
         <View style={{ flex: 1, marginTop: 15}}>
            <View style={{ height: 45, flexDirection: 'row', flex: 1, alignSelf: 'center'}}>
              <TouchableOpacity style={{ flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', borderColor: '#455A64', borderWidth: 1, marginLeft: 20, marginRight: 20}}><Text>Ngày</Text></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', borderColor: '#455A64', borderWidth: 1, marginRight: 20}}><Text>Tháng</Text></TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', borderColor: '#455A64', borderWidth: 1, marginRight: 20}}><Text>Năm</Text></TouchableOpacity>
            </View>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#455A64', flex: 9, margin: 15}}>
              <View style={{marginRight: 15, marginLeft: 15, marginTop: 15, alignSelf: 'flex-start', alignItems: 'flex-start', height: 40, justifyContent: 'center'}}><Text>Tổng số cuộc gọi</Text></View>
              <View style={{height: 50, flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 5, borderWidth: 1, borderColor: '#455A64'}}>
                <View style={{ marginLeft: 10, marginRight: 10, alignSelf: 'center'}}><Text>15/30</Text></View>
                <View style={{ marginLeft: 35, alignSelf: 'center'}}>
                   <Progress.Bar style={{alignSelf: 'center' }} 
                    progress={0.5} 
                    width={220} 
                    height={10} 
                    indeterminate={false} 
                    borderWidth={1}
                    unfilledColor={'#EEEEEE'}/>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#455A64', flex: 9, margin: 15}}>
              <View style={{marginRight: 15, marginLeft: 15, marginTop: 15, alignSelf: 'flex-start', alignItems: 'flex-start', height: 40, justifyContent: 'center'}}><Text>Tổng số đặt hẹn</Text></View>
              <View style={{height: 50, flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 5, borderWidth: 1, borderColor: '#455A64'}}>
                <View style={{ marginLeft: 10, marginRight: 10, alignSelf: 'center'}}><Text>20/30</Text></View>
                <View style={{ marginLeft: 35, alignSelf: 'center'}}>
                   <Progress.Bar style={{alignSelf: 'center' }} 
                    progress={0.6} 
                    width={220} 
                    height={10} 
                    indeterminate={false} 
                    borderWidth={1}
                    unfilledColor={'#EEEEEE'}/>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#455A64', flex: 9, margin: 15}}>
              <View style={{marginRight: 15, marginLeft: 15, marginTop: 15, alignSelf: 'flex-start', alignItems: 'flex-start', height: 40, justifyContent: 'center'}}><Text>Tổng số mua hàng</Text></View>
              <View style={{height: 50, flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 5, borderWidth: 1, borderColor: '#455A64'}}>
                <View style={{ marginLeft: 10, marginRight: 10, alignSelf: 'center'}}><Text>30/30</Text></View>
                <View style={{ marginLeft: 35, alignSelf: 'center'}}>
                   <Progress.Bar style={{alignSelf: 'center' }} 
                    progress={1} 
                    width={220} 
                    height={10} 
                    indeterminate={false} 
                    borderWidth={1}
                    unfilledColor={'#EEEEEE'}/>
                </View>
              </View>
            </View>
         </View>
        </DrawerLayout>
      </View>
    );
  }
}
