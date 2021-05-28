import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import Icon from "./Icon";

function AppPicker({ icon, placeholder, items, width = "100%" , onSelectText, ...otherprops}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [placeholder1, setPlaceholder] = useState(placeholder);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)} {...otherprops} >
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              style={styles.icon}
              color="#737171"
            />
          )}
          <Text style={styles.text}>{placeholder1}</Text>
          {icon && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              style={styles.icon}
              color="#737171"
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button onPress={() => setModalVisible(false)} title="close"></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setPlaceholder(item.label);
                  onSelectText(item.label);
                }}
                style={styles.modalIcon 
                }
              >
                <Icon name={item.icon} size={80} />
                <Text style = {styles.text} > {item.label} </Text>
              </TouchableOpacity>
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </>
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

  modalIcon: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    width: "33%",
    marginTop : 10
  },

  text: {
    fontSize: 18,
    color: "#343333",
    flex: 1,
    textAlign : 'center'
  },

  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});

export default AppPicker;
