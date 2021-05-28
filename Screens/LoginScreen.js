import React, { useState } from "react";
import { Text } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

import AppTextInput from "../components/AppTextInput";
import LoginButton from "../components/LoginButton";
import Screen from "../components/Screen";


const validationSchema = Yup.object().shape({
  email : Yup.string().required().email().label("Email"),
  password : Yup.string().required().min(4).label("password")
});

function callErrors (touched, errors) {
  if (touched && errors) {
      return <Text>{errors}</Text>    
  }
}

function LoginScreen(props) {
 
  return (
    <Screen style={{ padding: 10 }}>
      <Formik
      initialValues = {{email : '', password : ''}} 
      onSubmit = {(values) => console.log(values)   }
      validationSchema = {validationSchema}
      >
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (<>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          onChangeText={handleChange("email")}
          onBlur = {() => setFieldTouched('email') } 
          placeholder="email"
          textContentType="emailAddress"
        />

       
      {callErrors(touched.email, errors.email)}

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          onChangeText={handleChange("password")}
          onBlur = {() => setFieldTouched("password")}
          placeholder="password"
          secureTextEntry={true}
          textContentType="password"
        ></AppTextInput>

       {touched.password && <Text>{errors.password}</Text>}
        
        <LoginButton
          title="login"
          onPress={handleSubmit}
        />
</>)}
        
      </Formik>
    </Screen>
  );
}

export default LoginScreen;
