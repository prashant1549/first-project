// import { StatusBar } from 'expo-status-bar';
// import React,{ useState} from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function App() {
//   // const [flexDirection, setflexDirection] = useState("column");
//   // const [justifyContent, setJustifyContent] = useState("flex-start");
//   const [alignItems, setAlignItems] = useState("stretch");
//   return (
    
//     <PreviewLayout
//     // label="flexDirection"
//     // values={["column", "row", "row-reverse", "column-reverse",]}
//     // selectedValue={flexDirection}
//     //   setSelectedValue={setflexDirection}
//     // label="justifyContent"
//     //   selectedValue={justifyContent}
//     //   values={[
//     //     "flex-start",
//     //     "flex-end",
//     //     "center",
//     //     "space-between",
//     //     "space-around",
//     //     "space-evenly",
//     //   ]}
//     //   setSelectedValue={setJustifyContent}
//     label="alignItems"
//       selectedValue={alignItems}
//       values={[
//         "stretch",
//         "flex-start",
//         "flex-end",
//         "center",
//         "baseline",
//       ]}
//       setSelectedValue={setAlignItems}
//     >
//      <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" , width: "auto",
//         minWidth: 50,}]}
//       />
//    </PreviewLayout>
//   );
// }
// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>Flex Direction</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View  style={[styles.container, {[label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//     minHeight: 200,
    
//   },
//   label:{
//     textAlign:"center",
//     margin:10,
//     fontSize:24
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row:{
//     flexDirection:"row",
//     flexWrap:"wrap"
//   },
//   button:{
//     paddingHorizontal:8,
//     paddingVertical:6,
//     borderRadius:4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom:6,
//     minWidth:"48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//     textAlign: "center",
//   },
//   selectedLabel: {
//     color: "white",
//   },
// });

// import React,{ useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
 
//   return (
//       <View style={styles.container}>
//         {/* <View>
//         <Text style={styles.item}>
//           React Native 
//         </Text>
//         <Text style={styles.title}>
//           First Program
//         </Text>
//         </View> */}
//         <View style={styles.box1}>
//           <Text style={styles.text}>1</Text>
//         </View>
//         <View style={styles.box2}>
//           <Text style={styles.text}>2</Text>
//         </View>
//         <View style={styles.box3}>
//           <Text style={styles.text}>3</Text>
//         </View>
//       </View>
//   );
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     margin:50
//     // padding:40,
//     // backgroundColor:"blue"
//   },
//   item:{
//     marginTop:16,
//     paddingVertical:8,
//     borderWidth:4,
//     borderColor: "#20232a",
//     borderRadius:6,
//     backgroundColor:"#61dafb",
//     color: "#20232a",
//     textAlign:'center',
//     fontSize:30,
//     fontWeight:"bold",
    
//   },
//   title:{
//     marginTop:16,
//     paddingVertical:8,
//     borderWidth:4,
//     textAlign:'center',
//     backgroundColor:"skyblue",
//     borderColor:"#20232a",
//     borderRadius:6,
//     color:"#20232a",
//     fontSize:30,
//     fontWeight:"bold"
//   },
//   box1:{
//     position:"absolute",
//     top:40,
//     width:100,
//     height:100,
//     left:40,
//     backgroundColor:"red"
//   },
//   box2:{
//     ...StyleSheet.absoluteFill,
//     top:120,
//     left:50,
//     width:100,
//     height:100,
//     backgroundColor:"blue"
//   },
//   box3:{
//     position:"absolute",
//     top:120,
//     left:120,
//     width:100,
//     height:100,
//     backgroundColor:"green"
//   },
//   text:{
//     color:"#fff",
//     fontSize:80,
//     textAlign:"center"
//   }
// })
// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from "react";
// import {View,Text,StyleSheet, TouchableOpacity} from "react-native";

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];
// export default function App(){
//     const [textTile ,setTextTitle] = useState("Prashant");
//     const [count , setCount] = useState(true)
//     const changeTextTitle=(count)=>{
//       if(count){
//       setTextTitle("Prashant Singh");
//       setCount(!count)
//       }else{
//         setTextTitle("Prashant")
//         setCount(!count)
//       }
//     }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title} >{textTile}</Text>
//       <View style={styles.buttunArt}>
//       <TouchableOpacity onPress={()=>changeTextTitle(count)} style={styles.button}>
//         <Text style={styles.textinput}>OnClick</Text>
//       </TouchableOpacity>
//       </View>
//       <StatusBar/>
//       {/* <Text > kjsabdkjasbdkjsabdkj jkasbkjdas aksndjkasnd sajkbdjasbd sakjbdasbd sadbjasbd asbdlasbkdnsclkn knsdlkasn alsndlaskn salkndlasknd alsndlasnkd lkanslknsa laksndlkasn</Text> */}
//     </View>
//   );
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     marginTop:40
//   },
//   title:{
//     marginTop:20,
//     textAlign:"center",
//     textDecorationLine:"underline",
//     fontSize:30,
//     fontWeight:"bold",
//     borderWidth:4,
//     borderRadius:10,
//     margin:10,
//     padding:10,
//     color:"#fff",
//     backgroundColor:"black"
//   },
//   button:{
//     backgroundColor:"blue",
//     height:50,
//     width:150,
//     justifyContent:"center",
//     borderRadius:10
//   },
//   textinput:{
//     color:"#fff",
//     textAlign:"center",
//     fontWeight:"bold",
//     fontSize:30,
    
//   },
//   buttunArt:{
//     alignItems:"center"
//   },
  
// })
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {View,Image,Text,StyleSheet,Pressable,Modal,TextInput, TouchableOpacity} from "react-native";

export default function App(){
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const onChangeNumber=()=>{

  }
  return(
    <View style={styles.container}> 
      <View style={styles.row}>
        <View style={{flex:1}}>
           <Text style={styles.title}>Today</Text>
        </View>
        <View style={styles.end}> 
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image 
            source={require('./assets/plus.png')} 
            style={styles.image}
            
            ></Image>
            </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.centeredView}> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add ToDo</Text>

            <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={text}
              // placeholder="useless placeholder"
              keyboardType="text"
            />
            </View>
            <View style={styles.row}>
            <View style={{flex:1}}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.end}> 
        <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </TouchableOpacity>
        </View>
            </View>
           
           
          </View>
        </View>
      </Modal>
      
    {/* </View> */}
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
  row:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginHorizontal:20,

  },
  title:{
    fontSize:30,
    fontWeight:"bold"
  },
  image:{
    width:30,
    height:30,
   
  },
  end:{
    flex:1,
    alignItems:"flex-end"
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 130,
    marginHorizontal:20,
    
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width:300,
    height:300,
    // alignItems: "center",
    borderColor:"gray",
    
   borderWidth:1
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:100,
    margin:10,
    
  },
  buttonOpen: {
    backgroundColor: "#fff",
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    padding: 15,
    fontWeight:"bold",
    fontSize:20,
    // textAlign: "center"
  },
  input: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    borderColor:"gray",
    borderRadius:10
  },
})