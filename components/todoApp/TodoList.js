import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";

export default function TodoList({ Data, onEdit, onCheckBox }) {
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            index={index}
            oneditIndex={onEdit}
            onIndexCheckBox={onCheckBox}
          />
        )}
      />
    </View>
  );
}
