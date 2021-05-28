import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function LoginButton({ title, onPress, color = 'black' }) {
  return (
    <TouchableOpacity style = {[ styles.button , { backgroundColor : color } ]}  onPress = {onPress}>
      <Text style ={styles.text}  >
        {title}
      </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {

        backgroundColor: 'black',
        width : '100%',
        borderRadius: 25,
        padding: 15, 
        justifyContent: "center",
        alignItems: "center",
        margin: 5,

  },

text: {
        color : 'white',
        fontSize : 18,
        textTransform : 'uppercase',
        fontWeight : 'bold'
}

});
export default LoginButton;
