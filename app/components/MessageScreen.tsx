import React, { useState } from "react";
import { FlatList, ImageSourcePropType, StyleSheet } from "react-native";
import Screen from "../screens/Screen";
import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";
import ListItemSeparator from "./ListItemSeparator";

interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const initialMessages: Message[] = [
  {
    id: 1,
    title: "Xin chào",
    description: "Bạn khỏe không?",
    image: require("../assets/images/mario.jpg"),
  },
  {
    id: 2,
    title: "Họp nhóm",
    description: "Ngày mai gặp nhé",
    image: require("../assets/images/mario.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg: Message) => {
    setMessages(messages.filter((m) => m.id !== msg.id));
  };
  return (
    <Screen>
      <FlatList
        contentContainerStyle={
          {
            // backgroundColor: "gold",
          }
        }
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setMessages([messages[0]]);
          setRefreshing(false);
        }}
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
