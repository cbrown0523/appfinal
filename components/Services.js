import * as React from 'react';
import {Button,Linking, TouchableHighlight, Image, ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
function Contacts({navigation}){
    return (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
            <View style ={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f8f8"}}>
           <View style={styles.navContainer}>
               <View style={styles.navButton}>
               <Button 
            onPress={
              () => navigation.navigate('About')
            }
            title="About" color="#d3cfcf"
          />
               
                </View>
               <View style={styles.navButton}>
                 
               <Button
            onPress={
              () => navigation.navigate('Experience')
            }
            title="Experience" color="#d3cfcf"
          />
               </View>
               
               </View>
             
            <Text style = {{fontWeight: "bold" ,fontSize : 36, paddingTop:40, paddingBottom:50}}>What I Do?</Text>
              </View>
              <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>UX/UI Design</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>Web Development</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>Graphic Design</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>Branding</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>Marketing</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>Mobile App Design</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>

               </View>
                      
             </TouchableHighlight>  
             </View>
             <View>
              
              <TouchableHighlight activeOpacity={0.6}
            underlayColor="#d5c456" onPress={() => Linking.openURL("google.com")}>
            <View  style = {styles.card1}>
            <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzTZQReUVAZ5-o6mmunEMxA30jO5_Ymo-Jw&usqp=CAU "
            }}
            style={styles.image}
            />   
               
               
               <Text style= {styles.txt2}>Visual Editor</Text>
               <Text style = {styles.txt3}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>

               </View>
                      
             </TouchableHighlight>  
             </View>
             
          
        <View style= {{}}>
            <Text  style= {{textAlign:"center", color: "#d9ca67", fontSize:22, fontWeight:"bold"}}>Pricing</Text>
            <Text  style= {{textAlign:"center", color : "black", fontSize :40,  fontWeight:"bold"}}>Choose Your Pricing Plan</Text>

        </View>
        <View style= {{backgroundColor:"#ffffff", paddingTop:20}}>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>$ 49</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Personal</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Strategic Alliance</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Growth Expansion</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Business Planning</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Contact Negotiation</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Market Positioning</Text>
          
        </View>
        <View style= {{backgroundColor:"#ffffff", paddingBottom:20}}>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>$ 79</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Professional</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Strategic Alliance</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Growth Expansion</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Business Planning</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Contact Negotiation</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Market Positioning</Text>
          
        </View>
        <View style= {{backgroundColor:"#ffffff", paddingTop:20}}>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>$ 109</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Medium Business</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Strategic Alliance</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Growth Expansion</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Business Planning</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Contact Negotiation</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Market Positioning</Text>
          
        </View>
        <View style= {{backgroundColor:"#ffffff" , paddingTop:20}}>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>$ 149</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Gigantic Business</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Strategic Alliance</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Growth Expansion</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Business Planning</Text>
            <Text style= {{backgroundColor:"#9e9e9e", textAlign:"center", fontSize:26, paddingTop:30}}>Contact Negotiation</Text>
            <Text style= {{color : "#d9ca67", textAlign:"center", fontSize:26, paddingTop:30}}>Market Positioning</Text>
          
             
         </View>  
   </View>
      
        </ScrollView>
        </SafeAreaView>
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
      
          navContainer3: {
            width:100,
            textAlign :"center",

            },
            navButton4: {
              alignItems: "center",
              textAlign :"center",
              width:100

              
    
              }, 
          
          navContainer2 :{
            flexDirection: "row",
           alignItems: "center",
           

          },
          navButton2:{
        flex:1,

          },
          button:{
              backgroundColor : "red"
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
          image : {
            width: 90,
            height:90 ,       
          alignSelf:"center",
          paddingTop:40,
          paddingBottom:20
        },
        txt1 :{
            fontSize:42,
            fontWeight : "bold",
            color:"#d5c455",
          textAlign: "center"
            

        },
        txt2 :{
          fontSize:22,
          textAlign :"center",
          color:"black",
          paddingBottom:20


        },
        txt3 :{
            fontSize:22,
            textAlign :"center",
            lineHeight:20,
            color:"grey",
            paddingTop:20,
            paddingBottom:20

          },
        card1:{
            paddingBottom :80
        },
        card2:{
          paddingBottom :80,
          backgroundColor:"#ffffff"
      },
})


