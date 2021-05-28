import React from "react";
import {
  View,
  Image,
  
  TouchableHighlight,
  Text,
  StyleSheet
} from "react-native";
import {MaterialCommunityIcons}  from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable';



function ListItem({
    title,
    description, 
    image,
    onPress, 
    renderRightActions,
    IconComponent

}){ 
  return (
    <Swipeable renderRightActions = {renderRightActions}> 

    <View style = {{flexDirection : 'row'}}>
    
    <TouchableHighlight
      underlayColor= "#ededed"
      onPress={() => console.log("tapped")}
       style = {{flex: 3 }}
    >
      <View style={styles.List}>
    {IconComponent}
    {image && <Image style={styles.image} source={image} />}
        <View style={styles.subtitle}>
          <Text  numberOfLines = {1} style = {styles.title}>{title} </Text>
          <Text numberOfLines = {2} >{description} </Text>
        </View>       
        </View> 
    </TouchableHighlight>
    <MaterialCommunityIcons style = {styles.icon} name = 'chevron-right' size = {25} />

    </View>
    </Swipeable>
  );
  }

const styles = StyleSheet.create({
    List: {
      flexDirection: "row",
      justifyContent: "flex-start",
      padding : 5 
    },
  
    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
  
    icon: 
    {
      alignItems : 'center',
      alignSelf : 'center',
      color : 'grey'
    }, 

    subtitle: {
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 5,
      marginLeft : 10
    },
  
    title : {
      fontSize : 20,
      fontWeight : "bold"
    }


  });
  

export default ListItem;
