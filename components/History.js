import React, { Component } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  ListView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import DatePicker from 'react-native-datepicker';
import Data from './DuLieuKH/Data.js';
import styles from './DuLieuKH/Styles.js';
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
export default class History extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            date: new Date()
        }
    }

  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };

  render() {
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
            <View style={{ marginTop: 30, width: width - 30, alignSelf: 'center', backgroundColor: '#69F0AE', borderRadius: 8}}>
                <View style={{flex: 1, marginTop: 20, marginBottom: 20, height: 45, backgroundColor: '#FAFAFA', width: width - 80, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BCD4'}}><Text>Ngày giờ</Text></View>
                    <View style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#BA68C8'}}><Text>Tên</Text></View>
                    <View style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFCA28'}}><Text>SĐT</Text></View>
                    <View style={{flex: 1, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF8A65'}}><Text>Tình trạng</Text></View>
                </View>
            </View>
         </View>
        </DrawerLayout>
      </View>
    );
  }
}
