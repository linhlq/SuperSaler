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
import styles from '../DuLieuKH/Styles.js';

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

export default class LichSu extends Component {
    constructor(props, context) {
        super(props, context);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data),
          date: new Date()
        };
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(data) {
      return (
        <TouchableOpacity onPress={() => {this.changeScreen(data.key)}} style={styles.fistRowDrawer}>
          <Icon name={data.icon} size={18} color="black" />
          <Text style={styles.textDrawer}>{data.text}</Text>
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
                style={{width: 200, marginTop: 20, alignSelf: 'center'}}
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
            <View style={{ marginTop: 30, width: width - 30, alignSelf: 'center', backgroundColor: '#FAFAFA', borderRadius: 8, borderWidth: 1, borderColor: '#616161'}}>
                <View style={{flex: 1, marginTop: 20, marginBottom: 20, height: 45, backgroundColor: '#FAFAFA', width: width - 80, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BCD4'}}><Text>Ngày giờ</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BA68C8'}}><Text>Tên</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFCA28'}}><Text>SĐT</Text></TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF8A65'}}><Text>Tình trạng</Text></TouchableOpacity>
                </View>
            </View>
         </View>
        </DrawerLayout>
      </View>
    );
  }
}
