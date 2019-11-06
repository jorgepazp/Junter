import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Appointment from '../components/Appointment';
interface Props {
    title: string;
    
}

export default class Homescreen extends React.Component<Props>{

    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            opacityValue: new Animated.Value(0),
            translateYValue: new Animated.Value(translateYMin),
        }
        
    }
    data=[{
        hora:'11:20',
        cliente:'Sebastian Rojas',
        ubicacion:'San Martín 338, Concepción',
        categoria:'Trabajo',
        nombre:'Reunión de Trabajo',
        id:1
    },{
        hora:'12:40',
        cliente:'Alejandra Cárcamo',
        ubicacion:'El Nogal 334, Talcahuano',
        categoria:'Cita',
        nombre:'Cita Médica',
        id:2
    },{
        hora:'14:00',
        cliente:'Jorge Paz',
        ubicacion:'Olaves 5669, Chiguayante',
        categoria:'Cita',
        nombre:'Salida',
        id:3
    }]
    

    render(){    
    return(
        <React.Fragment>
            
        <ScrollView>
            <Text style={{justifyContent:'center',alignSelf:'center',paddingTop:10,color:'#afafaf'}}>- LUNES 24 DE SEPTIEMBRE -</Text>
            {
                this.renderItems(this.data)
            }
           

           {/* <Text style={{justifyContent:'center',alignSelf:'center',paddingTop:10,color:'#afafaf'}}>Descanso de 3</Text>*/}
        
        </ScrollView>    
        </React.Fragment>
        );
    }

    appointmentCounter:number = 0;
    appointmentIndexer(){
        let aux=this.appointmentCounter;
        this.appointmentCounter++;
        return aux;
    }

    renderItems(props) {
       

       return(
           <>
           {props.map(val => <Appointment 
                key={val.id}
                index ={this.appointmentIndexer()}
                nombre={val.nombre}
                hora={val.hora}
                ubicacion={val.ubicacion}
                cliente={val.cliente}
                categoria={val.categoria}
                text={'20 minutos de descanso'}
                
               />)}
           </>
       );
      }

    }

const styles = StyleSheet.create({
  boxes:{
    backgroundColor:"white",
    minHeight:150,
    margin:10,
    borderRadius:10,
    shadowOffset:{  width: 0,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },headbar: {
    flex: 1,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-evenly"
    
  },
});

