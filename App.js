import React , {useEffect, useState} from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import Card from "./components/Card.js";
import Icon from "./components/Icon.js";
import LoginButton from "./components/LoginButton.js";
import AccountScreen from "./Screens/AccountScreen.js";
import MessagesScreen from "./Screens/MessagesScreen.js";
import ListingsScreen from "./Screens/ListingsScreen.js";
import AppTextInput from "./components/AppTextInput.js";
import Screen from "./components/Screen.js";
import AppPicker from "./components/AppPicker.js";
import LoginScreen from "./Screens/LoginScreen.js";
import ListingEditScreen from "./Screens/ListingEditScreen.js";
import AppImagePicker from "./components/AppImagePicker.js";

export default function App() {
 
  return (
    <ListingEditScreen />
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
  },
});
