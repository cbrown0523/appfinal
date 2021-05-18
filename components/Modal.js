
import { WebView } from 'react-native-webview';
import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    ScrollView,
    contentContainerStyle,
    Linking,
    Modal, 
    Pressable,
    Dimensions,
    FlatList,
    TouchableHighlight
  } from "react-native";


const Modal = ()=>{
<Modal
animationType="fade"
transparent={false}
visible={modalVisible}
supportedOrientations={['landscape']} 
onRequestClose={() => {
  
  setModalVisible(!modalVisible);
}}
>
<View style={styles.centeredView}>
    <View style={styles.video2}>
<WebView
source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bHWgc5MPnPA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
/>
</View>

    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text style={styles.textStyle}>Hide Video</Text>
    </Pressable>

</View>
</Modal>
}