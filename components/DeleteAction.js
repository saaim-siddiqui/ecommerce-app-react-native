import React from 'react';


import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";

function DeleteAction({onPress}) {
    return (

       <TouchableWithoutFeedback onPress = {onPress}>
          <View style={styles.delete}>
            <MaterialCommunityIcons size={35} name="trash-can" color = 'white' />
          </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({

    delete: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
        width: 70
        
      },
        
})

export default DeleteAction;