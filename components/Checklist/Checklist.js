import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ListView,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import DatePicker from 'react-native-datepicker';
import Data from '../DuLieuKH/Data.js';
import styles from '../KhachCuaToi/Styles.js';
import CheckBox from 'react-native-check-box';

import DulieuKH from '../DuLieuKH/DulieuKH.js';
import KhachCuaToi from '../KhachCuaToi/KhachCuaToi.js';
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
  {hoten: 'Test', sdt:'test', tinhtrang:'test'},
  {hoten: 'Test', sdt:'test', tinhtrang:'test'},
  {hoten: 'Test', sdt:'test', tinhtrang:'test'},

];

export default class LichSu extends Component {
    constructor(props, context) {
        super(props, context);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data),
          dataSource2: ds2.cloneWithRows(data2),
          date: new Date(),
          data: false
        };
        this._renderRow = this._renderRow.bind(this);
        this._renderRow2 = this._renderRow2.bind(this);
    }

    _renderRow(data) {
      return (
        <TouchableOpacity onPress={() => {this.changeScreen(data.key)}} style={styles.fistRowDrawer}>
          <Icon name={data.icon} size={18} color="#336600" />
          <Text style={[styles.textDrawer,{color:'#336600'}]}>{data.text}</Text>
        </TouchableOpacity>
      );
    }
    _renderRow2(data2){
      return(
        <TouchableOpacity
          style={styles.rowTable}>
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
          Actions.TienDo()
          break;
        case 'TaoDongLuc':
          Actions.TaoDongLuc()
          break;
        case 'Checklist':
          this.dongMenu()
          break;
      }
    }

  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };

  dongMenu() {
    this.refs['DRAWER_REF'].closeDrawer();
  }

  onClick(data){
    this.setState({
      data: data
    })
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
            <Text style={styles.textHeader}>Checklist</Text>
            <View></View>
        </View>
         <View style={{ flex: 1, marginTop: 10}}>
           <CheckBox
              style={{height: 45, padding: 10, marginLeft: 20, marginRight: 20}}
              onClick={()=>{this.onClick(true)}}
              isChecked={data.checked}
              rightText={'Học sản phẩm.'}
          />
           <CheckBox
              style={{height: 45, padding: 10, marginLeft: 20, marginRight: 20}}
              onClick={()=>{this.onClick(true)}}
              isChecked={data.checked}
              rightText={'Gặp khách.'}
          />
           <CheckBox
              style={{height: 45, padding: 10, marginLeft: 20, marginRight: 20}}
              onClick={()=>{this.onClick(true)}}
              isChecked={data.checked}
              rightTextStyle={{color: '#607D8B'}}
              rightText={'Disable.'}
          />
           <CheckBox
              style={{height: 45, padding: 10, marginLeft: 20, marginRight: 20}}
              onClick={()=>{this.onClick(true)}}
              isChecked={data.checked}
              rightTextStyle={{color: '#607D8B'}}
              rightText={'Disable selected.'}
          />
           <CheckBox
              style={{height: 45, padding: 10, marginLeft: 20, marginRight: 20}}
              onClick={()=>{this.onClick(true)}}
              isChecked={data.checked}
              rightTextStyle={{color: '#607D8B'}}
              rightText={'Disable indeterminate.'}
          />
         </View>
        </DrawerLayout>
      </View>
    );
  }
}
