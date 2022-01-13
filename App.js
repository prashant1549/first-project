import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import moment from "moment";
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
  const [storage, setStorage] = useState([]);

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
      setStorage(todoData);
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
        setStorage(todoData);
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
  const handleFilterAll = () => {
    const data = [...storage];
    setData(data);
  };
  const handleFilterDue = () => {
    const data = [...storage];
    const filterData = data.filter((item) => {
      const leftTime = moment(item.date + item.time, "YYYY-MM-DDLT");
      const pastTime = moment(leftTime);
      const presentTime = moment(new Date());
      const duration = moment.duration(pastTime.diff(presentTime));
      return Math.ceil(duration.asMinutes()) <= 0;
    });
    setData(filterData);
  };
  const handleFilterComplete = () => {
    const data = [...storage];
    const filterData = data.filter((n1) => n1.isSelected === true);
    setData(filterData);
  };
  const handleFilterNotComplete = () => {
    const data = [...storage];
    const filterData = data.filter((n1) => n1.isSelected === false);
    setData(filterData);
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
          <TouchableOpacity style={styles.selectDate} onPress={handleFilterAll}>
            <Text style={{ textAlign: "center" }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectDate}
            onPress={handleFilterComplete}
          >
            <Text style={{ textAlign: "center" }}>Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectDate}
            onPress={handleFilterNotComplete}
          >
            <Text style={{ textAlign: "center" }}>Not complete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectDate} onPress={handleFilterDue}>
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
