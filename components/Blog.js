import * as React from 'react';
import {Image, ScrollView, Button, StyleSheet, SafeAreaView, Text, View} from 'react-native';


export default function Blog({navigation}){
    return (
        <SafeAreaView>
            <ScrollView>
            
            <View style={styles.container}>
            <View style ={{ paddingTop:120, flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f8f8"}}>
           <View style={styles.navContainer}>
               <View style={styles.navButton}>
               <Button
            onPress={
              () => navigation.navigate('Work')
            }
            title="Work"  color="#d3cfcf"
          />
               
                </View>
               <View style={styles.navButton}>
                 
               <Button
            onPress={
              () => navigation.navigate('Contacts')
            }
            title="Contact"  color="#d3cfcf"
          />
                </View>
               <View style={styles.navButton}>
               </View>
               
               </View>
               
             <View >
                 

            <Text style = {{fontWeight: "bold" , fontSize : 36, paddingTop:30, paddingBottom:80, }}>Blog Posts</Text>
              </View>
              </View>
              </View>
              <View  style = {styles.card2}>
               <Image
  source={{ uri: "https://th.bing.com/th/id/OIP.xuaDTfmu2gmP58pt7B9x1gHaEL?pid=ImgDet&rs=1"
}}
  style={styles.image}
/>  
<View >
            <View style ={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
           <View style={styles.navContainerCard}>
               <View style={styles.navButton}>
               <Text>ADMIN</Text>
                </View>
               <View style={styles.navButton}>
               <Text style= {styles.contact1}>JAN. 07, 2021 </Text>
               </View>
               <View style={styles.navButton}>
               <Text style= {{color:"gold"}}>3 COMMENTS </Text>
               </View>
               </View>
               </View>
               </View>

               <Text style = {styles.txt7}>The Newest and Updated Bootstrap 5 is Here</Text>

               <Text style= {styles.txt9}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
               </View>

               <View  style = {styles.card2}>
               <Image
  source={{ uri: "https://i2.wp.com/www.hometownevolutioninc.com/wp-content/uploads/2019/04/g50_assorted_transparent_light_bulbs.png?fit=1000%2C1000&ssl=1"
}}
  style={styles.image}
/>  
<View >
            <View style ={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
           <View style={styles.navContainerCard}>
               <View style={styles.navButton}>
               <Text>ADMIN</Text>
                </View>
               <View style={styles.navButton}>
               <Text style= {styles.contact1}>JAN. 07, 2021 </Text>
               </View>
               <View style={styles.navButton}>
               <Text style= {{color:"gold"}}>3 COMMENTS </Text>
               </View>
               </View>
               </View>
               </View>

               <Text style = {styles.txt7}>The Newest and Updated Bootstrap 5 is Here</Text>

               <Text style= {styles.txt9}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
               </View>
               <View  style = {styles.card2}>
               <Image
  source={{ uri: "https://cloud.fullstackacademy.com/code-and-headphones-1.jpg?mtime=20200730134602"
}}
  style={styles.image}
/>  
<View >
            <View style ={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
           <View style={styles.navContainerCard}>
               <View style={styles.navButton}>
               <Text>ADMIN</Text>
                </View>
               <View style={styles.navButton}>
               <Text style= {styles.contact1}>JAN. 07, 2021 </Text>
               </View>
               <View style={styles.navButton}>
               <Text style= {{color:"gold"}}>3 COMMENTS </Text>
               </View>
               </View>
               </View>
               </View>

               <Text style = {styles.txt7}>The Newest and Updated Bootstrap 5 is Here</Text>

               <Text style= {styles.txt9}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
               </View>
               <View  style = {styles.card2}>
               <Image
  source={{ uri: "https://i5.walmartimages.com/asr/2c72fb17-f4c5-4285-aa4d-f981c74e69d8.c7fc86652e98979cd8d6c896538823e3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
}}
  style={styles.image}
/>  
<View >
            <View style ={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
           <View style={styles.navContainerCard}>
               <View style={styles.navButton}>
               <Text>ADMIN</Text>
                </View>
               <View style={styles.navButton}>
               <Text style= {styles.contact1}>JAN. 07, 2021 </Text>
               </View>
               <View style={styles.navButton}>
               <Text style= {{color:"gold"}}>3 COMMENTS </Text>
               </View>
               </View>
               </View>
               </View>

               <Text style = {styles.txt7}>The Newest and Updated Bootstrap 5 is Here</Text>

               <Text style= {styles.txt9}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
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
    navContainerCard: {
        flexDirection: "row",
        width:100,
        },
    navButton: {
      paddingTop:15,
  
    
      },
     
        navContainerCard: {
            flexDirection: "row",
            width:100,
            },
        navButton: {
          paddingTop:15,
        
          

          }, container : {
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
                backgroundColor:"#ffffff",
                paddingTop:10
            },
            
              txt4 :{
                fontSize:40,
                fontWeight : "bold",
                color:"black",
                textAlign:"center",
                
                

            },
            image : {
                width: 400,
                height:300 ,       
               padding:10,
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