import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class ProfileScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        
    }
    render(){    
    return(
        <ScrollView style={{alignContent:"center"}}>
            <Text>Hola Joaquin!</Text>
        </ScrollView>    
           
        );
    }
    }

const styles = StyleSheet.create({

});

