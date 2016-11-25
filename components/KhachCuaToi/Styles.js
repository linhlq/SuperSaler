import {
  StyleSheet,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  body: {
    flex:0.9,
    width:width,
    backgroundColor: 'white',
  },
  container:{
    backgroundColor: '#e9eaed',    
  },
  rowTable:{
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 5,
    marginVertical: 1,
    overflow: 'hidden',
    flexDirection:'row',
  },
  box:{
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 5,
    marginVertical: 1,
    overflow: 'hidden',

  },
  header: {
    height:height/12,
    width:width,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#336600',
    flexDirection:'row',
  },
  iconMenu:{
    paddingRight:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#336600',
    paddingLeft:15
  },
  textHeader:{
    fontSize:20,
    color:'white'
  },
  drawer:{
    flex:1,
    backgroundColor: 'white'
  },
  logoOnDrawer:{
    resizeMode:'center',
    width:width*2/3,
    height:height/4
  },
  rowDrawer: {
    width:(width*2/3),
    paddingLeft:20,
    paddingTop:6,
    paddingBottom:6,
    borderBottomWidth:1,
    borderColor:'grey',
    flexDirection:'row'
  },
  textDrawer: {
    fontSize:12,
    color:'black',
    paddingLeft:20,
    fontWeight:'bold'
  },
  fistRowDrawer: {
    width:(width*2/3),
    paddingLeft:20,
    paddingTop:6,
    paddingBottom:6,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'grey',
    flexDirection:'row'
  },
  titleContainer:{
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  textTitle:{
    color:'black',
    paddingLeft:20,
    fontSize:13,
    fontWeight:'bold'
  },
  text:{
    fontSize:15,
    textAlign:'center',
  },
  textBox:{
    fontSize:13,
    padding:10,
    paddingLeft:30
  },
});

module.exports = styles
