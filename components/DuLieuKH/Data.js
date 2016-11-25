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
  Scrollview,
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
      <View style={styles.container}>
        <InfoBox title='Mã:' content='makh' />
        <InfoBox title='Họ và tên:' content='hoten' />
        <InfoBox title='Ngay sinh:' content='ngaysinh' />
        <InfoBox title='Địa chỉ:' content='diachi' />
        <InfoBox title='Số điện thoại:' content='sdt' />
        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textTitle}>
                Nhân viên phụ trách
              </Text>
          </View>
              <TextInput
                style={{height: 30, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(salerName) => this.setState({salerName})}
                value={this.state.salerName}
                placeholder="Tên nhân viên"
              />
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textTitle}>
                Trạng thái:
              </Text>
          </View>
              <TextInput
                style={{height: 30, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(salerName) => this.setState({salerName})}
                value={this.state.salerName}
                placeholder="Đã hẹn/Đã demo/K thành công"
              />
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textTitle}>
                Kết quả liên hệ:
              </Text>
          </View>
              <TextInput
                style={{height: 70, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(salerName) => this.setState({salerName})}
                value={this.state.salerName}
                placeholder="Đã hẹn/Đã demo/K thành công"
              />
        </View>
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
      </View>
    );
  }
}
