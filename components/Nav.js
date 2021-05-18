import * as React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import Hamburger from 'react-native-hamburger';


export default function Nav({navigation}){
    return (
      
            <View style= {styles.nav}>
                <Text style = {styles.navTitle}>Schmt.</Text>
            </View>
          
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : "column",
        height:100,
    
      },
      nav :{
        backgroundColor: "black",
        paddingTop:20,

      },
      navTitle : {
        backgroundColor: "#222222",
        paddingTop:15,
        paddingLeft:20,
        fontSize:34,
        fontWeight:"900",
        flexDirection:"column",
        height:70,
        color:"white"
      
      },
      

})