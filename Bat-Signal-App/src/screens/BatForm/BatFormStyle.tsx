import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  topo:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
  
  },
  seta:{
    height:40,
    width:40,  
    marginTop:30,
    marginLeft:10,
    justifyContent:'flex-start',

  },
  logo:{
    marginTop:30,
    marginRight:10,
    height:50,
    width:50,
  },
  forms:{
    flex:1,
    alignItems:'center',
    paddingTop:20
    // justifyContent:'space-evenly',



  },
  textInput: {
    borderColor:'black',
    borderWidth:1,
    width:'90%',
    height:'10%',
    borderRadius:10,
    margin: 30,
    marginTop:5

  },
  textInputMotivo:{
    borderColor:'black',
    borderWidth:1,
    width:'90%',
    height:'20%',
    borderRadius:10,
    margin: 30,
    marginTop:5
  },
  title:{
    fontSize:18,
    alignSelf:"flex-start",
    paddingLeft:24,

  },
  textButton:{
    width:'90%',
    borderRadius:10,
    backgroundColor:'black',
    color:'white',
    padding:18,
    textAlign:'center'
  },
  button:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:80

  }

});