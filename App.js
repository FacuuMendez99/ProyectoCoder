import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, FlatList,View } from 'react-native';
import CustomInput from './components/CustomInput';
import CustomModal from './components/CustomModal';

export default function App() {
  const [textItem,setTextItem] = useState("")
  const [item,setItem] = useState([])
  const [itemSelected,setItemSelected]=useState({})
  const [modalVisible,setModalVisible]= useState(false)

  const addItemHandler = () => {
    setItem(prevItem =>[...prevItem,{id:Math.random().toString(),value:textItem}])
    setTextItem("")
  }

  const onChangeTextHandler = (text) => {
    setTextItem(text);
  }
  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelected(item.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItem(item.filter((item) => item.id !== itemSelected.id))
    setModalVisible(!modalVisible)
  }

  const renderListItem = ({ item }) => (
    <View style={styles.list}>
      <Text>{item.value}</Text>
      <Button title="x" color={"#ff6961"} onPress={() => onSelectItemHandler(item.id)} />
    </View>
  )

  return (
    <>
    <View style={styles.container}>
      <CustomInput
        placeholderProp="Ingrese una tarea"
        textItemProp={textItem}
        onChangeTextHandler={onChangeTextHandler}
        addItemHandler={addItemHandler}
      />
      <FlatList
          data={item}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
    </View>
    <CustomModal
        animationTypeProp="slide"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelected}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
</>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:20,
  }, 
  list:{
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",   
    borderBottomWidth: 0.5,
    margin:10,
    padding:5,
  }
});
