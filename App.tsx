import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

//screens
import Screens from './src/screens/Screens';
import Bottombar from './src/components/BottomBar';


export default class App extends Component {
  state={
    actualScreen:''
  }
  constructor(props){
    super(props);
    this.state.actualScreen='Home';
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  render(){
  return (
    <React.Fragment >
      <View style={{height:Constants.statusBarHeight}}/>
   <Screens actualScreen={this.state.actualScreen}/>
  {/*footbar*/}
   <Bottombar handler={this.handleTabClick} actualScreen={this.state.actualScreen}/>
{console.log(this.state.actualScreen)}
    </React.Fragment>
  );}


  handleTabClick(state:string){
    this.setState({actualScreen:state});
  }
}


const styles = StyleSheet.create({

  footbar:{
    flex:1.5,
    backgroundColor:"#132743",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center',
    top:0,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    

  },
  icon:{
    backgroundColor:"#fc7fb2",width: 50,
    height: 50,
    borderRadius: 50/2,alignItems:"center"
    
  },
  add:{
    backgroundColor:"green",width: 50,
    height: 50,
    borderRadius: 50/2,alignItems:"center"
    
  },

 
});
