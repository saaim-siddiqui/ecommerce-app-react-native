import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, width = "100%", ...otherprops }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.icon}
          color="#737171"
        />
      )}
      <TextInput style={styles.text} {...otherprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,

    backgroundColor: "#f3f0f0",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  text: {
    fontSize: 18,
    color: "#343333",
  },

  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
export default AppTextInput;
