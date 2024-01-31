import React, {useState} from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Image,
    StatusBar,
    useColorScheme,
    View,
  } from 'react-native';



const Inicio = ({navigation}) => {

    const handlepress2 = ()=>{
        navigation.navigate('David');
     };


     
    

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Text style={styles.encabezado}>Inicio</Text>
                <Image 
                style={styles.fotoperfilp}
                source={require('../imagenes/persona.jpg')} 
                />
            <Text style={styles.seccionHeaderp}>Phil Spencer</Text>
    
            <View 
            style= {styles.seccionp}>
             <Text style={styles.seccionHeaderp}> Fecha de Nacimiento: </Text>
             <Text style={styles.seccionContentp}> 12 de enero de 1968 </Text>
             </View>
    
             
             <Text style={styles.seccionmargentopp}> Pasatiempos: </Text>
             <Text style={styles.seccionmargenp}>Phil Spencer ha mencionado que disfruta jugando videojuegos, lo cual es bastante natural dado su papel en la industria de los videojuegos. Además, ha expresado interés en la lectura y ha recomendado algunos libros en el pasado. También es conocido por ser un defensor de la diversidad e inclusión en la industria de los videojuegos.</Text>
             
             <Text style={styles.seccionmargentopp}> Otros </Text>
             <Text style={styles.seccionmargenp}> Phil Spencer es un ejecutivo de la industria de los videojuegos y actualmente se desempeña como el jefe de Xbox en Microsoft. Asumió este rol en 2014 y ha sido un líder clave en la estrategia y el desarrollo de la marca Xbox.</Text>
    
                <Button 
                    title='Mi perfil'
                    onPress={handlepress2}
                />
     
            </ScrollView>
        </SafeAreaView>
    );
  };


 

const styles = StyleSheet.create({
    encabezadop: {
        fontSize: 18, /*tamano de fuente*/
        fontWeight: 'bold', /*negrita*/
        color: '#3498DB',
       
    },
    
    svContenedorp:{
      /*flexDirection: 'row',*/ /*poner los textos en una sola fila*/
      /*flexWrap: 'wrap',*/ /*autoajusta el contenido cuando no cabe*/
      alignItems: 'center', /*Ajustar al centro*/
    
    },
    
    fotoperfilp:{
    width: 200,
    height: 220,
    marginTop: 30,
    
    },
    
    seccionp: {
      flexDirection: 'row',
      marginTop: 30,
    },
    
    seccionmargentopp: {
      
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 30,
     
      
      
      
    },
    
    
    seccionHeaderp: {
      
      fontSize: 16,
      fontWeight: 'bold',
      
    },
    
    seccionContentp: {
      fontSize: 14,
      marginStart: 1,
      
      
      
    },
    
    seccionmargenp: {
      fontSize: 14,
      marginStart: 20,
      marginEnd: 20,
      
      
      
    },
    
    
   
 
        contenedor:{
            alignItems:'center',
        },

        encabezado:{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'blue',
        },

        margen:{
        marginTop: 30,

        },

    });
            

export default Inicio;