import React from "react";
import { FlatList, Text, StyleSheet, View, Image } from "react-native";
import ListItem from "./ListItem";

export default function TodoList({ Data }) {
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}
