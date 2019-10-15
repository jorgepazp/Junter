import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <React.Fragment >
      
      <View style={{height:Constants.statusBarHeight,backgroundColor:"#CE4257"}}>

      </View>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! kjkjjk</Text>
    </View>


    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
  },
  navigation:{
    flexDirection:"row",
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height:200
  }
 
});
