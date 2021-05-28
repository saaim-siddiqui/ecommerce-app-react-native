import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';

const lists = [
    {
        id : 1,
        title : 'My bike',
        price : '$800',
        image : require("../assets/hair.png")
    },
    {
        id : 2,
        title : 'couch',
        price : '$800',
        image : require("../assets/anime.jpeg")
    },
];

function ListingsScreen(props) {
    return (
        <Screen style = {styles.screen}>
            <FlatList
            data = {lists}
            keyExtractor = {(list) => list.id.toString()}
            renderItem = {({item}) =>
            <Card            
            title = {item.title}
            price = {item.price} 
            image = {item.image} />
    }
/>
        </Screen>
    );
}

const styles = StyleSheet.create({

    screen : {
        padding : 10,
        backgroundColor: '#e5e5e5'
    },
    
});
export default ListingsScreen;