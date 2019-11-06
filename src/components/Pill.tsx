import React, { Component } from 'react';
import {StyleSheet, View,Text, Animated} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


interface PillData{
    text:string
}

const styles = StyleSheet.create({
    pill:{
        borderRadius:100,
        backgroundColor:'#fc7fb2',
        justifyContent:'center',alignSelf:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:4,
        paddingBottom:4,
        flexDirection:'row',
        marginBottom:5
    },
    text:{
        color:'white',
        paddingLeft:5,
        fontSize:12,
        paddingTop:0
    }
});

export default class Pill extends React.Component<PillData>{
  
    constructor(props){
        super(props);
        this.state.text=props.text
    }

 

  state={
      text:'',
  }
  
  render(){
    return(
    <View style={styles.pill}>
        
            <AntDesign name="clockcircleo" color="white"  size={16}/>
            <Text style={styles.text}>{this.state.text}</Text>
    
    </View>
      
    );
  }
}