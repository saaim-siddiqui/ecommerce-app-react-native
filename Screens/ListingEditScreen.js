import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import * as ImagePicker from "expo-image-picker"

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import LoginButton from "../components/LoginButton";
import {AppImagePicker} from "../components/AppImagePicker";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.string().required().min(1).label("Price"),
  description: yup.string().label("description"),
  categories: yup.object().nullable().required().label("Category"),
});

function callErrors(touched, errors) {
  if (touched && errors) {
    return <Text style = {styles.error}>{errors}</Text>;
  }
}

const categories = [
  { label: "Furniture and music whatever", value: 1 , icon: 'table-chair' },
  { label: "Clothing", value: 2 , icon : 'tshirt-v'},
  { label: "Camera", value: 3, icon : "camera-wireless-outline" },
];

function ListingEditScreen(props) {
  let [image, setImage] = useState();

  const SelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync(i);
      if (!result.cancelled) 
      setImage(result.uri);
    } catch (error) {
      console.log("error", error);
    }
  };


  return (
    <Screen>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          categories: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, errors, touched, setFieldValue }) => (
          <>
            <View style = {{flexDirection : "row"}}>
           {image && <Image source = {{uri : image }} style = {{width : 80, height : 80}}/>}
            <AppImagePicker  onPress = {SelectImage} /> 
            </View>
            <AppTextInput
              maxLength={255}
              onChangeText={handleChange("title")}
              onBlur={() => setFieldTouched("title")}
              placeholder="Title"
              width = {250}
            />

            {callErrors(touched.title, errors.title)}

            <AppTextInput
              maxLength={8}
              keyboardType="numeric"
              onChangeText={handleChange("price")}
              onBlur={() => setFieldTouched("price")}
              placeholder="Price"
              width = {120}
            />

            {callErrors(touched.price, errors.price)}

            <AppPicker
              icon="apps"
              placeholder="Categories"
              items={categories}
              width = {250}
              onBlur = {() => setFieldTouched("categories")}
              onSelectText = {(item) => setFieldValue("categories", item)}
            />
    
            {callErrors(touched.categories, errors.categories)}

            <AppTextInput
              placeholder="Description"
              onChangeText={handleChange("description")}
              onBlur={() => setFieldTouched("description")}
              multiline = {true} 
              textAlignVertical= "top"
              numberOfLines={3}
            />
            {callErrors(touched.description, errors.description)}
            <LoginButton title = "Post" onPress = {handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ListingEditScreen;
