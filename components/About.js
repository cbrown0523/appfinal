import * as React from 'react';
import {Image, ScrollView, Button, StyleSheet, SafeAreaView, Text, View} from 'react-native';


export default function About({navigation}){
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <View style ={{ paddingTop:120, flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f8f8"}}>
           <View style={styles.navContainer}>
               <View style={styles.navButton}>
               <Button
            onPress={
              () => navigation.navigate('Home')
            }
            title="Home"  color="#d3cfcf"
          />
               
                </View>
               <View style={styles.navButton}>
                 
               <Button
            onPress={
              () => navigation.navigate('Services')
            }
            title="Services"  color="#d3cfcf"
          />
               </View>
               
               </View>
             <View >

            <Text style = {{fontWeight: "bold" , fontSize : 36, paddingTop:30, paddingBottom:80, }}>About Us</Text>
              </View>
              <View style ={{ paddingTop:80, flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f8f8"}}>

               <View  style = {styles.card1}>
               <Text style = {styles.txt1}>5,000</Text>
               
               <Text style= {styles.txt2}>Happy Clients</Text>
               </View>
               <View  style = {styles.card1}>
               <Text style = {styles.txt1}>1,200</Text>
               
               <Text style= {styles.txt2}>Projects Done</Text>
               </View>
               <View  style = {styles.card1}>
               <Text style = {styles.txt1}>500</Text>
               
               <Text style= {styles.txt2}>Cups of Coffee</Text>
               </View>
               <View  style = {styles.card1}>
               <Text style = {styles.txt1}>587</Text>
               
               <Text style= {styles.txt2}>Working Hours</Text>
               </View>
               
               
         
                <View  style = {styles.card1}>
               <Text style = {styles.txt6}>Testimonials</Text>
               
               <Text style= {styles.txt4}>Happy Guests</Text>
               </View>
               <View  style = {styles.card2}>
               <Image
  source={{ uri: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
}}
  style={styles.image}
/>
               <Text style = {styles.txt7}>Roger Scott</Text>
               <Text style = {styles.txt8}>Marketing Manager</Text>

               <Text style= {styles.txt9}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
               </View>
              
               </View>
               </View>
              
              
      
               </View>
               </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container : {
        flex:1,
        flexDirection : "column",
        height:"100%",
    
      },
      navContainer: {
        flexDirection: "row",
        paddingTop: 10,
        width:100,
        },
        navButton: {
          alignItems: "center",
        
        paddingRight:20
          

          }, 
          navContainer2: {
            flexDirection: "row",
            paddingTop: 10,
            width:100,
            },
            navButton2: {
              alignItems: "center",
              width:50,
              flex:1,
              }, 
              txt1 :{
                  fontSize:42,
                  fontWeight : "bold",
                  color:"#d5c455",
                textAlign: "center"
                  

              },
              txt2 :{
                fontSize:22
              },
              card1:{
                  paddingBottom :80,
                  flex:1,
                  
                  
                  
              },
              card2:{
                paddingBottom :80,
                backgroundColor:"#ffffff"
            },
              txt4 :{
                fontSize:40,
                fontWeight : "bold",
                color:"black",
                textAlign:"center",
                
                

            },
            image : {
                width: 75,
                height:50 ,       
               flex:.3,
            },
            txt6 :{
              fontSize:20,
              color:"#d5c455",
              fontWeight:"bold",
              textAlign:"center",

            },
            txt7 :{
                fontSize:24,
                fontWeight : "bold",
                color:"black",
                textAlign:"center",
                paddingBottom:5,
                paddingTop:10
                
                

            },
            txt8 :{
              fontSize:20,
              color:"#d5c455",
              fontWeight:"bold",
              textAlign:"center",

            },
            txt9 :{
                fontSize:20,
                color:"grey",
                textAlign:"left",
                lineHeight:22,
                paddingTop:14  
              },
        }) 