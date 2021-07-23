import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import plus from "../../assets/plus.png";

export default function HomePage({ callBack }) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Today</Text>
      </View>
      <View style={styles.end}>
        <TouchableOpacity onPress={() => callBack()}>
          <Image source={plus} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 30,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 30,
  },
  end: {
    flex: 1,
    alignItems: "flex-end",
  },
});
