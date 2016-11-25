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
  Navigator,
  AsyncStorage
} from 'react-native';
import InfoBox from './InfoBox.js';
var {height, width} = Dimensions.get('window');
import styles from './Styles.js';

var value1;
var value2;
var value3;
var value4;
var value5;
var pos = 1;

export default class Data extends Component {
  constructor(props){
    super(props);
    this.state={
      customer: '',
    }
  }

  nextCustomer() {
    if (pos == 5) {
      pos = 1;
    } else {
      pos++;
    }
    switch (pos) {
      case 1:
      if (value1 !== null){
        var customer1 = JSON.parse(value1);
        this.setState({
          customer: customer1,
        });
      }
        break;
      case 2:
      if (value2 !== null){
        var customer2 = JSON.parse(value2);
        this.setState({
          customer: customer2,
        });
      }
        break;
      case 3:
      if (value3 !== null){
        var customer3 = JSON.parse(value3);
        this.setState({
          customer: customer3,
        });
      }
        break;
      case 4:
      if (value4 !== null){
        var customer4 = JSON.parse(value4);
        this.setState({
          customer: customer4,
        });
      }
        break;
      case 5:
      if (value5 !== null){
        var customer5 = JSON.parse(value5);
        this.setState({
          customer: customer5,
        });
      }
        break;
    }
  }

  backCustomer() {
    if (pos == 1) {
      pos = 5;
    } else {
      pos--;
    }
    switch (pos) {
      case 1:
      if (value1 !== null){
        var customer1 = JSON.parse(value1);
        this.setState({
          customer: customer1,
        });
      }
        break;
      case 2:
      if (value2 !== null){
        var customer2 = JSON.parse(value2);
        this.setState({
          customer: customer2,
        });
      }
        break;
      case 3:
      if (value3 !== null){
        var customer3 = JSON.parse(value3);
        this.setState({
          customer: customer3,
        });
      }
        break;
      case 4:
      if (value4 !== null){
        var customer4 = JSON.parse(value4);
        this.setState({
          customer: customer4,
        });
      }
        break;
      case 5:
      if (value5 !== null){
        var customer5 = JSON.parse(value5);
        this.setState({
          customer: customer5,
        });
      }
        break;
    }
  }

  render() {
    return (
      <ScrollView>
        <InfoBox title='Mã:' content={this.state.customer.code} />
        <InfoBox title='Họ và tên:' content={this.state.customer.name} />
        <InfoBox title='Ngay sinh:' content={this.state.customer.birthday} />
        <InfoBox title='Địa chỉ:' content={this.state.customer.address} />
        <InfoBox title='Số điện thoại:' content={this.state.customer.phone} />
        <InfoBox title='Nhân viên phụ trách:' content={this.state.customer.employee} />
        <InfoBox title='Trạng thái:' content={this.state.customer.status} />
        <InfoBox title='Kết quả liên hệ' content={this.state.customer.result} />

        <View style={{flexDirection:'row',paddingTop:5, justifyContent:'space-around', backgroundColor:'#ffffff'}}>
          <TouchableOpacity style={{height:40, width:100, justifyContent:'center', alignItems:'center', backgroundColor:'#336600', borderRadius:5}} onPress={() => {this.backCustomer()}}>
              <Text style={{fontWeight:'bold', color:'white'}}> BACK
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{height:40, width:100, justifyContent:'center', alignItems:'center', backgroundColor:'#336600', borderRadius:5}} onPress={() => {this.nextCustomer()}}>
              <Text style={{fontWeight:'bold', color:'white'}}> NEXT
              </Text>
          </TouchableOpacity>
        </View>
        <View style={{height:20}}>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    try {
      value1 = await AsyncStorage.getItem("cus1");
      value2 = await AsyncStorage.getItem("cus2");
      value3 = await AsyncStorage.getItem("cus3");
      value4 = await AsyncStorage.getItem("cus4");
      value5 = await AsyncStorage.getItem("cus5");
      if (value1 !== null){
        var customer = JSON.parse(value1);
        this.setState({
          customer: customer,
        });

      } else {

      }
    } catch (error) {

    }
  }
}
