import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CalendarTodo from "./CalendarTodo";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function ModalPage({
  modalVisible,
  callBack,
  onSubmit,
  editIndex,
  onChnage,
  title,
  selectDate,
  selectTime,
  handleTime,
  handleDate,
}) {
  const [dateVisible, setDateVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);

  const closeButton = () => {
    callBack();
  };
  const handleConfirm = (selectedDate) => {
    handleTime(moment(selectedDate).format("LT"));
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setTimeVisible(false);
  };
  const submitTodo = () => {
    onSubmit();
  };
  const handleDate1 = () => {
    setDateVisible(true);
  };
  const handleSelectDate = (day) => {
    handleDate(day);
    setDateVisible(false);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        style={{ backgroundColor: "#81ff69" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          callBack();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {editIndex > -1 ? "Update ToDo" : "Add ToDo"}
            </Text>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChnage(value)}
                value={title}
                numberOfLines={10}
                multiline={true}
              />
            </View>
            <View style={styles.row}>
              <View style={styles.datestyle}>
                <TouchableOpacity
                  style={styles.selectDate}
                  onPress={handleDate1}
                >
                  <Text style={{ textAlign: "center" }}>{selectDate}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.datestyle}>
                <TouchableOpacity
                  style={styles.selectDate}
                  onPress={() => setTimeVisible(true)}
                >
                  <Text style={{ textAlign: "center" }}>{selectTime}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={closeButton}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.end}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={submitTodo}
                >
                  <Text style={styles.textStyle}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={dateVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          callBack();
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <CalendarTodo onDate={handleSelectDate} />
        </View>
      </Modal>
      <DateTimePickerModal
        isVisible={timeVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 130,
    marginHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
  },
  modalView: {
    backgroundColor: "#81ff69",
    borderRadius: 10,
    width: 300,
    height: 350,
    borderColor: "#EBEFF5",
    borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: "#FFFFFF",
  },
  buttonClose: {
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    borderColor: "#EBEFF5",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  selectDate: {
    backgroundColor: "lightblue",
    width: 120,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: -20,
  },
  datestyle: {
    flex: 1,
    alignItems: "flex-end",
    marginVertical: 20,
  },
});
