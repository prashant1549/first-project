import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Rectangle from "../../assets/Rectangle.png";

export default function ListItem({ item }) {
  return (
    <View>
      <View style={styles.row}>
        <View stye={{ flex: 1 }}>
          <View style={styles.border} />
        </View>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <Text style={styles.inpuText}>{item.title}</Text>
        </View>
        <View style={{ flex: 0.1, justifyContent: "center" }}>
          <Text
            style={{
              backgroundColor: item.color,
              width: 12,
              height: 12,
              borderRadius: 6,
            }}
          ></Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={{ fontWeight: "bold", color: "gray", marginHorizontal: 25 }}
        >
          {item.date} {item.time}
        </Text>
        <Image source={Rectangle} style={{ width: 280 }}></Image>
      </View>
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
  randomcolor: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
  },
});
