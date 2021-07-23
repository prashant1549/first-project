import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FirststylesheetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
  item: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    textAlign: "center",
    backgroundColor: "skyblue",
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
  box1: {
    position: "absolute",
    top: 40,
    width: 100,
    height: 100,
    left: 40,
    backgroundColor: "red",
  },
  box2: {
    ...StyleSheet.absoluteFill,
    top: 120,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  box3: {
    position: "absolute",
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  text: {
    color: "#fff",
    fontSize: 80,
    textAlign: "center",
  },
});
