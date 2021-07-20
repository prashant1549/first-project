import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ModalPage({ modalVisible, callBack, onSubmit }) {
  const [title, setTitle] = useState("");

  const submitTodo = () => {
    onSubmit(title);
    setTitle("");
  };
  return (
    <View style={styles.centeredView}>
      <Modal
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
            <Text style={styles.modalText}>Add ToDo</Text>

            <View>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setTitle(value)}
                value={title}
                keyboardType="text"
              />
            </View>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => callBack()}
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
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: 300,
    height: 300,
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
  },
});
