
import React, {useState} from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';


const perfil = () =>{
    return (
        <SafeAreaView>
          <ScrollView
              contentContainerStyle={styles.svContenedor}
              contentInsetAdjustmentBehavior="automatic" >
             <Image 
                style={styles.fotoperfil}
                source={require('../imagenes/perfil.jpeg')} 
                />
            <Text style={styles.seccionHeader}>Jose David Menendez Espana</Text>
    
            <View 
            style= {styles.seccion}>
             <Text style={styles.seccionHeader}> Fecha de Nacimiento: </Text>
             <Text style={styles.seccionContent}> 26 de agosto del 2003 </Text>
             </View>
    
             
             <Text style={styles.seccionmargentop}> Pasatiempos: </Text>
             <Text style={styles.seccionmargen}>Me gusta mucho la musica siempre suelo realizar actividades con ella, me gustan los autos y el mundo deportivo que engloba a estos, me gusta la computacion, videojuegos, y la tecnologia. </Text>
             
             <Text style={styles.seccionmargentop}> Otros </Text>
             <Text style={styles.seccionmargen}>Soy del campus de comayagua en la universidad ujcv y espero graduarme de la carrera de infotecnologia</Text>
    
          </ScrollView>
        </SafeAreaView>
      );

}

const styles = StyleSheet.create({
    encabezado: {
        fontSize: 18, /*tamano de fuente*/
        fontWeight: 'bold', /*negrita*/
        color: '#3498DB',
       
    },
    
    svContenedor:{
      /*flexDirection: 'row',*/ /*poner los textos en una sola fila*/
      /*flexWrap: 'wrap',*/ /*autoajusta el contenido cuando no cabe*/
      alignItems: 'center', /*Ajustar al centro*/
    
    },
    
    fotoperfil:{
    width: 200,
    height: 220,
    marginTop: 30,
    
    },
    
    seccion: {
      flexDirection: 'row',
      marginTop: 30,
    },
    
    seccionmargentop: {
      
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 30,
     
      
      
      
    },
    
    
    seccionHeader: {
      
      fontSize: 16,
      fontWeight: 'bold',
      
    },
    
    seccionContent: {
      fontSize: 14,
      marginStart: 1,
      
      
      
    },
    
    seccionmargen: {
      fontSize: 14,
      marginStart: 20,
      marginEnd: 20,
      
      
      
    },
    
    
    });
 
    export default perfil;