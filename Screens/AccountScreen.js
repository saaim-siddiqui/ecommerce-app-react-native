import React from "react";

import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const iconList = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "black",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "black",
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Saaim"
          description="saaimsiddiqui@gmail.com"
          image={require("../assets/anime.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={iconList}
          keyExtractor={(icon) => icon.title}
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%", height: 4 }} />
          )}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="logout"
          IconComponent={<Icon name="logout" backgroundColor="black" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#EEEAF0",
  },

  container: {
    backgroundColor: "white",
    marginVertical: 20,
    marginLeft: 5,
  },
});

export default AccountScreen;
