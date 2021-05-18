import * as React from 'react';
import {Linking, Image,ImageBackground, TouchableHighlight, StyleSheet, SafeAreaView, ScrollView, Text, View} from 'react-native';

const image2 = { uri: "https://blog.appsumo.com/wp-content/uploads/2020/09/AS-BLOG-Graphic-Design-Resources-1536x614px.jpg" };
const image1 = { uri: "https://miro.medium.com/max/12000/1*9g2hSDNT3Cao2vh1HMO35A.jpeg" };

const image3 = { uri: "https://miro.medium.com/max/3200/0*I0vqL4kZwVo_knXG.png" };

const image4 = { uri: "https://blog.marketo.com/content/uploads/2018/06/GettyImages-865230556.jpg" };




function Work({navigation}){
    return (
        <SafeAreaView>
            <ScrollView>
            
            <View style={styles.container}>
             <View style ={{ paddingTop:120, flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f8f8"}}>
           <View style={styles.navContainer}>
               <View style={styles.navButton}>
               <Text>HOME</Text>
                </View>
               <View style={styles.navButton}>
               <Text style= {styles.contact1}>WORK </Text>
               </View>
               
               </View>
               
             <View >
                 

            <Text style = {{fontWeight: "bold" , fontSize : 36, paddingTop:30, paddingBottom:80, }}>Portfolio</Text>
              </View>
              </View>
              </View>
             
              <View>
                  
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>        
            <ImageBackground source={image1} style={styles.image}> 
               <Text style= {styles.txt2}>Branding & Illustration Design</Text>
               <Text style = {styles.txt3}>WEB DESIGN</Text>
 </ImageBackground>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
                  
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>        
            <ImageBackground source={image2} style={styles.image}> 
               <Text style= {styles.txt2}>Branding & Illustration Design</Text>
               <Text style = {styles.txt3}>WEB DESIGN</Text>
 </ImageBackground>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
                  
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>        
            <ImageBackground source={image3} style={styles.image}> 
               <Text style= {styles.txt2}>Branding & Illustration Design</Text>
               <Text style = {styles.txt3}>WEB DESIGN</Text>
 </ImageBackground>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
                  
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>        
            <ImageBackground source={image4} style={styles.image}> 
               <Text style= {styles.txt2}>Branding & Illustration Design</Text>
               <Text style = {styles.txt3}>WEB DESIGN</Text>
 </ImageBackground>

               </View>
                      
             </TouchableHighlight>  
             </View>
              </ScrollView>
              </SafeAreaView>
    )
}
export default Work

const styles = StyleSheet.create({

    container : {
        flex:1,
        flexDirection : "column",
        height:"100%",
        backgroundColor:"#f8f8f8"
    
      },   
      navContainer: {
        flexDirection: "row",
        paddingTop: 70,
        width:100,
        },
        navButton: {
          alignItems: "center",
          width:55,
          color: "#fff",
          

          },
          card1:{
            paddingBottom :80
        },
        txt2 :{
            padding:50,
            textAlign:"center",
            color:"white",
            fontSize:28
        },
        txt3 :{
            padding:10,
            textAlign:"center",
            color:"white",
            fontSize:26
        },
        image : {
            width: 400,
            height:300 ,       
           padding:10,
        },
    })