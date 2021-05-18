import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';
function Contacts({navigation}){
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style ={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f8f8"}}>
           <View style={styles.navContainer}>
               <View style={styles.navButton}>
               <Text>Home</Text>
               
               </View>
               <View style={styles.navButton}>
               <Text style= {styles.contact1}>Contact</Text>
               </View>
               
               </View>
             
            <Text style = {{fontWeight: "bold" ,fontSize : 36, paddingTop:40, paddingBottom:50}}>Contact Us</Text>
              </View>
              <View style= {styles.form}>
                <Text style = {styles.contactTitle1}>Contact Us</Text>
                <Text>We're open for any suggestion or just to have a chat</Text>
                <Text style = {styles.contactTitle}>ADDRESS:</Text>
                <Text>198 West 21th Street, Suite 721 New York NY 10016</Text>
                <Text style = {styles.contactTitle}>Email:</Text>
                <Text>info@yoursite.com</Text>
                <Text style = {styles.contactTitle}>Phone:</Text>
                <Text>+ 1235 2355 98</Text>
                <Text style = {styles.followus}>Follow us here</Text>
       
        <View style={styles.navContainer2} >
               <Text style={styles.navButton2}>Facebook</Text>
              
               <Text style={styles.navButton2}>Twitter</Text>
            
               <Text style={styles.navButton2}>Instagram</Text>
              
               <Text style={styles.navButton2}>Dribble</Text>
                  </View>
                  <View style={styles.webview}>
                  <WebView
                source = {{ uri:
                    'https://youtu.be/UgYSr893UtY' }}
                     />
                  </View>
               
</View>
</View>
      
        </ScrollView>
    )
}
export default Contacts

const styles = StyleSheet.create({

    container : {
        flex:1,
        flexDirection : "column",
        height:"100%",
    
      },   
      navContainer: {
        flexDirection: "row",
        paddingTop: 125,
        width:100,
        },
        navButton: {
          alignItems: "center",
          width:50,
          color: "#fff",
          flex:1
          

          }, 
          form :{
              flex:1,
              backgroundColor : "#ffffff",
              paddingLeft:20,
              paddingRight:20
          },
          navContainer2 :{
            flexDirection: "row",
           alignItems: "center",
           

          },
          navButton2:{
        flex:1,

          },
          contactTitle :
           {
               paddingTop:20,
               fontWeight:"bold",

          },
          contactTitle1 :{
              fontSize: 32,
              fontWeight: "bold"
          },
          followus:
          {fontSize :32, 
            fontWeight: "bold",
            paddingBottom:20,
            paddingTop:60
          },
          webview :{
              height:600,
              paddingTop:80
          }
})


