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
  ListView,
  Navigator,
  ScrollView
} from 'react-native';
import InfoBox from './InfoBox.js';
var {height, width} = Dimensions.get('window');
import styles from './Styles.js';
export default class Data extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     dataSource: ds
   }
  }
  renderRow(data){
    return(
      <TouchableOpacity
        style={styles.rowTable}>
        <View style={{flex:3, height:40, borderWidth:0.5,borderColor:'grey'}}>
          <Text style={styles.text}>hoten</Text>
        </View>
        <View style={{flex:3, height:40, borderWidth:0.5,borderColor:'grey'}}>
          <Text style={styles.text}>sdt</Text>
        </View>
        <View style={{flex:2, height:40,borderWidth:0.5,borderColor:'grey'}}>
          <Text style={styles.text}>tinhtrang</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render(){
    return(
      <View
        style={styles.container}>
        <View style={{height:height/15}}>
          <Text>Search Bar Here
          </Text>
        </View>
        <View
          style={styles.rowTable}>
          <View style={{flex:2, height:40, borderWidth:0.5,borderColor:'grey'}}>
            <Text style={styles.text}>Tên</Text>
          </View>
          <View style={{flex:3, height:40, borderWidth:0.5,borderColor:'grey'}}>
            <Text style={styles.text}>SDT</Text>
          </View>
          <View style={{flex:2, height:40,borderWidth:0.5,borderColor:'grey'}}>
            <Text style={styles.text}>Tình trạng</Text>
          </View>
        </View>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => this.renderRow(data)}
          />
        </View>
      </View>
    )
  }
}
