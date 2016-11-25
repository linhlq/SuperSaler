import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';
import InfoBox from './InfoBox.js';
var {height, width} = Dimensions.get('window');
import styles from './Styles.js';
export default class Data extends Component {
  constructor(props){
    super(props);
    this.state={
      salerName: ''
    }
  }
  render() {
    return (
      <ScrollView>
        <InfoBox title='Mã:' content='makh' />
        <InfoBox title='Họ và tên:' content='hoten' />
        <InfoBox title='Ngay sinh:' content='ngaysinh' />
        <InfoBox title='Địa chỉ:' content='diachi' />
        <InfoBox title='Số điện thoại:' content='sdt' />
        <InfoBox title='Nhân viên phụ trách:' content='Khánh' />
        <InfoBox title='Trạng thái:' content='Đã gọi' />
        <InfoBox title='Kết quả liên hệ' content='Hẹn ngày mai' />

        <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'#ffffff'}}>
          <TouchableOpacity  >
              <Text> BACK
              </Text>
          </TouchableOpacity>

          <TouchableOpacity  >
              <Text> NEXT
              </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
