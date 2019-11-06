import React, { Component } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//screens route
import  HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

interface Props {
    actualScreen: string;
    
}

export default class Screens extends Component<Props>{
    state = { actualScreen:''};
    constructor(props){
        super(props);
        this.state={
            actualScreen:'Home',
        }
    }
    componentWillReceiveProps(props){
        this.setState({actualScreen: props.actualScreen});
    }

    render(){
        return(
            <React.Fragment>
            <View style={styles.headbar}>
            {/*<Text style={{fontSize:20,fontWeight:"bold",flexDirection:"row",textAlign:"left",top:10}}></Text>*/}
            <Image
            style={{width: 300, height: 50,resizeMode:'contain'}}
            source={require('../../assets/logo.png')}
            />
           {// <AntDesign name="pluscircle" color="green" size={32} />
           }
            </View>
                <View style={styles.container}>
                    {this.renderScreens()}
                </View>
                </React.Fragment>
        );
    }

    renderScreens(){
        
        switch(this.state.actualScreen){
            case 'Home':
                return(<HomeScreen title={'Home'}/>);
                break;
            case 'Agenda':
                return(null);
                break;
            case 'Profile':
                return(<ProfileScreen/>);
                break;
            case 'Settings':
                return(null);
                break;
        }
        
    }
}

const styles = StyleSheet.create({

    headbar: {
        flex: 1,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-evenly"
        
      },
      container:{
        flex:10,
        backgroundColor:"#f9f9f9",
        borderTopWidth:0.5,
        borderColor:"#e2e2e2"
      }  ,
});