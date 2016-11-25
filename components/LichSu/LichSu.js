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
  {time:'test', hoten: 'Test', sdt:'test', tinhtrang:'test'},
  {time:'test', hoten: 'Test', sdt:'test', tinhtrang:'test'},
  {time:'test', hoten: 'Test', sdt:'test', tinhtrang:'test'},

];

export default class LichSu extends Component {
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
          this.dongMenu()
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
            <Text style={styles.textHeader}>History</Text>
            <View></View>
        </View>
         <View style={{ flex: 1, marginTop: 10}}>
           <DatePicker
                style={{width: 200, marginBottom:10, alignSelf: 'center'}}
                date={this.state.date}
                mode="datetime"
                duration={300}
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate= {this.state.date}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
                        backgroundColor: '#FAFAFA',
                        borderRadius: 8
                    }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
              <View
                style={styles.container}>
                <View
                  style={styles.rowTable}>
                  <View style={[styles.firstRow,{flex:2}]}>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>Time</Text>
                  </View>
                  <View style={[styles.firstRow,{flex:3}]}>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>Tên</Text>
                  </View>
                  <View style={[styles.firstRow,{flex:3}]}>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>SDT</Text>
                  </View>
                  <View style={[styles.firstRow,{flex:2}]}>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>Tình trạng</Text>
                  </View>
                </View>
                <View>
                  <ListView
                    dataSource={this.state.dataSource2}
                    renderRow={(data2) => this._renderRow2(data2)}
                  />
                </View>
              </View>
         </View>
        </DrawerLayout>
      </View>
    );
  }
}
