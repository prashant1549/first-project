import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {View,StyleSheet} from "react-native";
import HomePage from './components/todoApp/HomePage';
import ModalPage from "./components/todoApp/ModalPage";
import TodoList from './components/todoApp/TodoList';

export default function App(){
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const onChangeNumber=()=>{
    setModalVisible(true)
  }
  const closeModal=()=>{
    setModalVisible(false)
  }
  return(
    <View style={styles.container}> 
      <HomePage callBack={onChangeNumber}/>
      <TodoList/>
      <ModalPage modalVisible={modalVisible} callBack={closeModal}/>
      <StatusBar/>
    </View>
    
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    paddingTop:30
  },
})