import React from 'react';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

function Icon({
    name,
    size = 45,
    backgroundColor = 'black',
    iconColor = 'white'

}) {
    return (
       <View style = {{width : size,
       height: size,
       borderRadius : size / 2,
       justifyContent : 'center',
       alignItems: 'center',
       backgroundColor : backgroundColor
       }}>
           <MaterialCommunityIcons name = {name} size = {size/ 2} 
           color = {iconColor} />

       </View>

    );
}





export default Icon;