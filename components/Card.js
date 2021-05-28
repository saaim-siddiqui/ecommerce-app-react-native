import React from "react";

import { View, StyleSheet, Image, Text } from "react-native";   

function Card({ title, price, image }) {
  return (
        
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style = {styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
   
  );
}

const styles = StyleSheet.create({

    card :{
        borderRadius : 15,
        overflow: "hidden", 
        backgroundColor: 'white',
        marginBottom: 20,
        
    },

  image: {
    width: "100%",
    height: 200,
    
  },

  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: "#737171",
  },
  details :  {
        padding : 10    
  }
});
export default Card;
