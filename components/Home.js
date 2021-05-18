import * as React from 'react';
import {ImageBackground, Button, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import Hamburger from 'react-native-hamburger';

const image = { uri: "https://preview.colorlib.com/theme/schmidt/images/xjschmidt.png.pagespeed.ic.oRl8rvVmhD.webp" };
export default function Home({navigation}){
    return (
        <SafeAreaView style = {styles.container}>
           
            <View style = {styles.main}>
            <ImageBackground source={image} style={styles.image}>
                <Text style = {styles.headerTxt}>UI/UX Designer amp Developer</Text>
                <Text style = {styles.headerTxt2}>I'm John Schmidt</Text>
                <View style = {styles.but1}>
                <Button 
            title="MORE ABOUT ME ->"
            color="#d5c455"
/></View>
<View style = {styles.but2}>
                <Button 
            title="MORE ABOUT ME ->"
            color="black"
/></View>
            
      </ImageBackground>

           
            </View>
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : "column",
        height:100,
    
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      nav :{
        backgroundColor: "black",

      },
     
      main :{
          flex : 1,
          height:100,
          backgroundColor:"#f8f8f8",
      },
      headerTxt : {
          color :"gold",
          fontSize : 16,
          paddingTop : 20,
          textAlign: "center",
      },
      headerTxt2 : {
         // fontWeight : "900",
        color :"black",
        fontSize : 32,
        textAlign: "center",
        paddingTop : 5,

    },
    but1 : {
        paddingTop:20,
      color : "black",

    },
    but2 : {
        paddingTop:20,
        color : '#222222',

    }


})