import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomePage from "./components/todoApp/HomePage";
import ModalPage from "./components/todoApp/ModalPage";
import TodoList from "./components/todoApp/TodoList";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [Data, setData] = useState([
    { id: 1, title: "Start making the presentation" },
    { id: 2, title: "Pay for Rent" },
    { id: 3, title: "Buy Milk" },
    { id: 4, title: "Buy a chocolate for Charlotte" },
  ]);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = (title) => {
    const todoData = [...Data];
    let todo = { id: Math.floor(Math.random() * 1000 + 1), title: title };
    todoData.push(todo);
    setData(todoData);
    setModalVisible(false);
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
