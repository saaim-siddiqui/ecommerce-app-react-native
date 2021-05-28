import React, { useState } from "react";
import { FlatList, View } from "react-native";

import DeleteAction from "../components/DeleteAction.js";
import Icon from "../components/Icon.js";
import ListItem from "../components/ListItem.js";
import Screen from "../components/Screen.js";

const initialMessages = [
  {
    id: 1,
    title: "My name is saaim siddiqui. I study in comsats university lahore. My life has been honestly very shit so far and I have no motivation whatso ever for the futre but here we are anyways",
    description: "well it is what it is",
    image: require("../assets/anime.jpeg"),
  },

  {
    id: 2,
    title: "togashi",
    description: "well it isnt what it is",
    image: require("../assets/anime.jpeg"),
  },

  {
    id: 3,
    title: "hiccup",
    description: "well it isnt what it is",
    image: require("../assets/anime.jpeg"),
  },
  {
    id: 4,
    title: "touka",
    description: "well it isnt what it is",
    image: require("../assets/anime.jpeg"),
  },
  {
    id: 5,
    title: "rikka",
    description: "well it isnt what it is",
    image: require("../assets/anime.jpeg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            //IconComponent = {<Icon name = 'email' size = {60} iconColor = 'green' backgroundColor = 'yellow'  />}
            renderRightActions={() => (
              <DeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 2 }}></View>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 5,
              title: "rikka",
              description: "well it isnt what it is",
              image: require("../assets/anime.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
