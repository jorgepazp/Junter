import React, { Component } from 'react';
import {StyleSheet, View,Text, Animated} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

//Dependencies
import Pill from './Pill';

const styles = StyleSheet.create({

    boxes:{
        backgroundColor:"white",
        minHeight:150,
        
        margin:10,
        borderRadius:10,
        
        flexDirection:'row',
        overflow:'hidden',
        alignContent:'stretch'
      },
      panel:{
        backgroundColor:"#DB5461",
        minHeight:150,
        
        marginTop:10,
        marginBottom:10,
        borderRadius:10,
        marginRight:10,
        flexDirection:'row',
        overflow:'hidden',
        alignContent:'stretch'
      }
  
   
  });

  interface Props{
     index: number,
      nombre:string,
     // fecha: Date,
     //duracion: string,
      cliente: string,
      ubicacion:string,
      categoria:string,
      hora:string,
      text:string

  }

 

  export default class Appointment extends React.Component<Props>{
    constructor(props){
        super(props);
       this.state.nombre=props.nombre;
       this.state.horaInicio=props.hora;
       this.state.ubicacion=props.ubicacion;
       this.state.cliente=props.cliente;
       this.state.index=props.index;
       this.state.text=props.text;

    }

    state = {
        index:0,
        fecha:'',
        horaInicio:'',
        duracion:'',
        cliente:'',
        ubicacion:'',
        categoria:'',
        nombre:'',
        text:''
        
    }

    texto ='';
    
    

    render(){
        return(
          <>
            <Swipeable
            overshootRight={false}
            renderRightActions={this.renderRightActions}>
            <Animated.View style={styles.boxes}>

                <View style={[{flex:1,justifyContent: 'center', alignItems: 'center'}]}>
                <Text style={{fontSize:24}}>{this.state.horaInicio}</Text>
                {console.log()}
                </View>
                <View style={{flex:3,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{this.state.nombre}</Text>
                <View style={{flexDirection:'row',margin:5}}>
                    <AntDesign name="smileo" color="#fc7fb2"  size={16}/>
                    <Text style={{marginLeft:10}}>{this.state.cliente}</Text>
                </View>
                <View style={{flexDirection:'row',margin:3}}>
                    <AntDesign name="enviromento" color="#fc7fb2"  size={16}/>
                    <Text style={{marginLeft:10}}>{this.state.ubicacion}</Text>
                </View>
                </View>
             {console.log(this.state.index)}   
            </Animated.View>
            </Swipeable>

            {/* Pill */}
            {
              this.renderPill()
            }
            
            </>
        );
    }

    renderPill(){
      
      if(this.state.index===0){
        return <Pill text= {this.state.text}/>;
      }else return null;
    }

    renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [1, 50, 100, 101],
        });
        return (
          <TouchableOpacity style={[styles.panel]} >
            <Animated.View
              style={[
               {justifyContent: 'center', alignItems: 'center',
                padding:10}
              ]}>
            <AntDesign name="closecircle" color="white"  size={16}/>
            <Text style={{fontSize:10,color:'white'}}>CANCELAR</Text>
              
            </Animated.View>
          </TouchableOpacity>
        );
      };

  }
  