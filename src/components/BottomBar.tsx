import React, { Component } from 'react';
import { View, TouchableOpacity,Text,StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


interface Props{
    actualScreen:string,
    handler:any
}

interface ButtomProps{
    active:boolean,
    name:string,
    button:string,
    handler:any,
    handlerName:string
}

const buttom = StyleSheet.create({
    icon:{
        backgroundColor:"#fc7fb2",width: 50,
        height: 50,
        borderRadius: 50/2,
        position:'absolute',
        

        
        
      },
});

class Buttom extends Component<ButtomProps>{
    state={
        active:false,
        name:'',
        button:'',
        handlerName:'',
 
    }

    constructor(props){
        super(props);      
        this.state={
            name: props.name,
            active: props.active,
            button: props.button,
            handlerName: props.handlerName,
            
        };
    }

    componentWillReceiveProps(props){
        this.setState({
            name:props.name,
            active:props.active
        });
    }

    render(){
        return(
            <React.Fragment>
        <TouchableOpacity style={[{alignItems:"center"}]}
          onPress={()=> this.props.handler(this.state.handlerName)}>
              
            <AntDesign name={this.state.name} size={24} color={this.state.active?"#fc7fb2":"white"} />
            <Text style={{fontSize:12,color:this.state.active?"#fc7fb2":"white"}}>{this.state.button}</Text>
          </TouchableOpacity>
          
          </React.Fragment>
        );
    }

}
export default class Bottombar extends Component<Props>{
    state = {
        actualScreen:''
    }
    constructor(props){
        super(props);
        console.log(props.actualScreen +"<Prop ");
        this.state.actualScreen=props.actualScreen;
        console.log(this.state.actualScreen +"<State ");  
    }

    componentWillReceiveProps(props){
        this.setState({
            actualScreen:props.actualScreen,
            
        });
    }

    render(){
        return( 
        <View style={{backgroundColor:"white",flex:1.5}}>
        <View style={this.styles.footbar}>
          {}
            <Buttom active={this.state.actualScreen=='Home'?true:false}
                    name='home'
                    button='Inicio'
                    handler = {this.props.handler}
                    handlerName ='Home'/>
                    
            <Buttom active={this.state.actualScreen=='Agenda'?true:false}
                    name='calendar'
                    button='Agenda'
                    handler = {this.props.handler}
                    handlerName ='Agenda'/>
          
            <Buttom active={this.state.actualScreen=='Profile'?true:false}
                    name='user'
                    button='Perfil'
                    handler = {this.props.handler}
                    handlerName ='Profile'/>
          
            <Buttom active={this.state.actualScreen=='Settings'?true:false}
                    name='setting'
                    button='Ajustes'
                    handler = {this.props.handler}
                    handlerName ='Settings'/>
  
        </View>
       
      </View>  
        );
    }

    styles = StyleSheet.create({

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
    }   );   
   
    
}