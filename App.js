import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HomePage from "./components/todoApp/HomePage";
import ModalPage from "./components/todoApp/ModalPage";
import TodoList from "./components/todoApp/TodoList";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [Data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState({});
  const [title, setTitle] = useState("");
  const [selectTime, setSelectTime] = useState("Select Time");
  const [selectDate, setSelectDate] = useState("Select Date");

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = () => {
    if (editIndex > -1) {
      const todoData = [...Data];
      todoData[editIndex].title = title;
      todoData[editIndex].date = selectDate;
      todoData[editIndex].time = selectTime;
      setEditData({});
      setEditIndex(-1);
      setData(todoData);
      setModalVisible(false);
    } else {
      if (title == "") {
        setModalVisible(false);
      } else {
        const todoData = [...Data];

        let todo = {
          id: Math.floor(Math.random() * 1000 + 1),
          title: title,
          date: selectDate,
          time: selectTime,
          createdAt: new Date(),
          isSelected: false,
        };
        todoData.push(todo);
        setData(todoData);
        setModalVisible(false);
      }
    }
    setTitle("");
    setSelectDate("Select Date");
    setSelectTime("Select Time");
  };
  const handleEdit = (index) => {
    setEditData(Data[index]);
    setTitle(Data[index].title);
    setEditIndex(index);
    setSelectDate(Data[index].date);
    setModalVisible(true);
    setSelectTime(Data[index].time);
  };
  const handleChange = (value) => {
    setTitle(value);
  };
  const handleDate = (value) => {
    setSelectDate(value.dateString);
  };
  const handleTime = (value) => {
    setSelectTime(value);
  };
  const handleCheckBox = (value, index) => {
    const data = [...Data];
    data[index].isSelected = value;
    setData(data);
  };
  return (
    <View style={styles.container}>
      <HomePage callBack={openModal} />
      <TodoList Data={Data} onEdit={handleEdit} onCheckBox={handleCheckBox} />
      <ModalPage
        modalVisible={modalVisible}
        callBack={closeModal}
        onSubmit={handleSubmit}
        handleDate={handleDate}
        onChnage={handleChange}
        editData={editData}
        title={title}
        selectTime={selectTime}
        selectDate={selectDate}
        handleTime={handleTime}
      />
      <View style={{ flex: 1, justifyContent: "flex-end", marginVertical: 30 }}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.selectDate}>
            <Text style={{ textAlign: "center" }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectDate}>
            <Text style={{ textAlign: "center" }}>Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectDate}>
            <Text style={{ textAlign: "center" }}>Not complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectDate}>
            <Text style={{ textAlign: "center" }}>Due</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  selectDate: {
    backgroundColor: "lightblue",
    width: 80,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
  },
});
