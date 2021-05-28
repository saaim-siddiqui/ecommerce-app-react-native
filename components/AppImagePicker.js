import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Image, View, TouchableWithoutFeedback, StyleSheet } from "react-native";





function AppImagePicker({imageUri , onPress}) {

  

  
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  

  return (
    
      <View style = {styles.container} >
      <TouchableWithoutFeedback onPress={onPress}>        
        <MaterialCommunityIcons name = "camera" 
         size = {45}
         style = {{alignSelf : 'center'}}        
        />
      </TouchableWithoutFeedback>
      </View>
      
    
  );
}
const styles = StyleSheet.create({
  container : {
    width : 80,
    height : 80,
    backgroundColor : "#f3f0f0",
    borderRadius : 10,
    alignItems : "center",
    justifyContent : 'center'

  }
})

export {AppImagePicker};

