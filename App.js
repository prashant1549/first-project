import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomePage from "./components/todoApp/HomePage";
import ModalPage from "./components/todoApp/ModalPage";
import TodoList from "./components/todoApp/TodoList";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [Data, setData] = useState([
    {
      id: 1,
      title: "Start making the presentation",
      color: "#61DEA4",
      date: "2021-03-12",
      time: "15:20 AM",
    },
    {
      id: 2,
      title: "Pay for Rent",
      color: "#B678FF",
      date: "2021-03-12",
      time: "15:20 AM",
    },
    {
      id: 3,
      title: "Buy Milk",
      color: "#F45E6D",
      date: "2021-03-12",
      time: "15:20 AM",
    },
    {
      id: 4,
      title: "Buy a chocolate for Charlotte",
      color: "#F45E6D",
      date: "2021-03-12",
      time: "15:20 AM",
    },
  ]);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = (title, saveDate, time) => {
    if (title == "") {
      setModalVisible(false);
    } else {
      const todoData = [...Data];
      let todo = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: title,
        date: saveDate.dateString,
        time: time,
        createdAt: new Date().toTimeString(),
        color:
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")",
      };
      todoData.push(todo);
      setData(todoData);
      setModalVisible(false);
    }
  };
  return (
    <View style={styles.container}>
      <HomePage callBack={openModal} />
      <TodoList Data={Data} />
      <ModalPage
        modalVisible={modalVisible}
        callBack={closeModal}
        onSubmit={handleSubmit}
      />

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 30,
  },
});
