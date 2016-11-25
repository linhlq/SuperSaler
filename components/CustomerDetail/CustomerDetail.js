import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ListView,
  AsyncStorage
} from 'react-native';
var {height, width} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import Data from './Data.js';
import styles from './Styles.js';

import LichSu from '../LichSu/LichSu.js';
import KhachCuaToi from '../KhachCuaToi/KhachCuaToi.js';
import TienDo from '../TienDo/TienDo.js';
import TaoDongLuc from '../TaoDongLuc/TaoDongLuc.js';
import Checklist from '../Checklist/Checklist.js';
import DulieuKH from '../DuLieuKH/DulieuKH.js';

var data = [
  {text: 'Dữ liệu khách hàng', icon: 'address-book', key: 'DulieuKH'},
  {text: 'Lịch sử', icon: 'history', key: 'LichSu'},
  {text: 'Khách của tôi', icon: 'money', key: 'KhachCuaToi'},
  {text: 'Tiến độ', icon: 'money', key: 'TienDo'},
  {text: 'Tạo động lực', icon: 'book', key: 'TaoDongLuc'},
  {text: 'Checklist', icon: 'bar-chart', key: 'Checklist'},
];


export default class CustomerDetail extends Component {
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
      <View style={styles.container}>
<View style={{flexDirection:'row', width:width}}>
    <View>
        <InfoBox title='Họ tên:' content='Thanh niên chuyên cần' />
        <InfoBox title='Điện thoại' content='0123.456.789' />
        <InfoBox title='Ngày sinh:' content='11.22.1989' />
    </View>
    <View>
        <InfoBox title='Địa chỉ:' content='612 La Thành - Hà Nội' />
        <InfoBox title='Tình trạng:' content='Khách đã đặt hẹn' />
        <InfoBox title='Nhân viên phụ trách:' content='Quách Khánh' />
    </View>
</View>
        <InfoBox title='Nội dung tương tác lần 1: (11:10-18/11/2016)' content='Trong này ghi nội dung trao đổi, kết quả và phương án tiếp theo' />
        <InfoBox title='Nội dung tương tác lần 2: (11:10-20/11/2016)' content='Trong này ghi nội dung trao đổi, kết quả và phương án tiếp theo' />
        <InfoBox title='Nội dung tương tác lần 3: ("Ngày-giờ")' content='Viết nội dung vào đây' />

        <TouchableOpacity style={{alignItems:'center', height:30}}>
          <Text style={{color:'grey'}}>Bấm vào để thêm mới</Text>
        </TouchableOpacity>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textTitle}>Hẹn giờ gọi lại</Text>
          </View>
          <Text style={styles.textBox}>Picker => chọn ngày giờ</Text>
        </View>
      </View>
    );
  }
}
