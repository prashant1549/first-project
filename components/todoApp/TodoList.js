import React from "react";
import { FlatList, Text, StyleSheet, View, Image } from "react-native";
import Rectangle from "../../assets/Rectangle.png";
import List from "../../assets/List.png";

export default function TodoList({ Data }) {
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.row}>
              <View stye={{ flex: 1 }}>
                <View style={styles.border} />
              </View>
              <View style={{ flex: 4, justifyContent: "center" }}>
                <Text style={styles.inpuText}>{item.title}</Text>
              </View>
              <View style={{ flex: 0.1, justifyContent: "center" }}>
                <Image source={List} style={styles.image}></Image>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Image source={Rectangle} style={{ width: 280 }}></Image>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    flex: 1,
    padding: 10,
  },
  inpuText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 14,
  },
  border: {
    borderWidth: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: "#DADADA",
  },
});
