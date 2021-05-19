import * as React from 'react';
import {Image, ScrollView, Button, StyleSheet, SafeAreaView, Text, View} from 'react-native';


export default function Experience({navigation}){
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <View style ={{ paddingTop:120, flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff"}}>
           <View style={styles.navContainer}>
               <View style={styles.navButton}>
               <Button
            onPress={
              () => navigation.navigate('Services')
            }
            title="Services"  color="#d3cfcf"
          />
               
                </View>
               <View style={styles.navButton}>
                 
               <Button
            onPress={
              () => navigation.navigate('Work')
            }
            title="Work"  color="#d3cfcf"
          />
               </View>
               
               </View>
             <View >

            <Text style = {{fontWeight: "bold" , fontSize : 36, paddingTop:30, paddingBottom:80, }}>Experiences</Text>
              </View>
          
               <View  style = {styles.card1}>
                <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            /> 
               <Text style = {styles.txt1}>2014-2015</Text>

               <Text style = {styles.txt3}>Master Degree of Design</Text>
               <Text style = {styles.txt2}>Google Inc.</Text>

               <Text style= {styles.txt4}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Text>
               </View>
               <View  style = {styles.card1}>
                <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            /> 
               <Text style = {styles.txt1}>2014-2015</Text>

               <Text style = {styles.txt3}>Art & Creative Director
</Text>
               <Text style = {styles.txt2}>Google Inc.</Text>

               <Text style= {styles.txt4}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Text>
               </View>
               <View  style = {styles.card1}>
                <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            /> 
               <Text style = {styles.txt1}>2014-2015</Text>

               <Text style = {styles.txt3}>Diploma in Computer
</Text>
               <Text style = {styles.txt2}>Google Inc.</Text>

               <Text style= {styles.txt4}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Text>
               </View>
               <View  style = {styles.card2}>
                <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            /> 
               <Text style = {styles.txt1}>2014-2015</Text>

               <Text style = {styles.txt3}>Bachelor's Degree of C.A
</Text>
               <Text style = {styles.txt2}>Google Inc.</Text>

               <Text style= {styles.txt4}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Text>
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
    navContainerCard: {
        flexDirection: "row",
        width:100,
        },
    navButton: {
      paddingTop:15,
  
    
      },
     
          navContainer2: {
            flexDirection: "row",
            paddingTop: 10,
            width:100,
            },
            navButton2: {
              }, 
              txt1 :{
                  fontSize:22,
                  color:"#d5c455",
                  padding:20,
                  

              },
              txt2 :{
                fontSize:18,
                color:"grey",
                padding:20
              },
              txt3 :{
                fontSize:28,
                color:"black",
                padding:10
              },
              card1:{
                  paddingBottom :60,
                  flex:1,
                  backgroundColor:"#ffffff"
                  
                  
                  
              },
              card2:{
                paddingBottom :80,
                backgroundColor:"#ffffff"
            },
              txt4 :{
                fontSize:30,
                color:"grey",
               alignSelf:"flex-start",
               lineHeight:28,
               paddingLeft:20
                
                

            },
            image : {
                width: 85,
                height:85 ,             
            },

        }) 