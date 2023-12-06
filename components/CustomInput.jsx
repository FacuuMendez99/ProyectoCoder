import {View, TextInput, Button, StyleSheet} from 'react-native'

const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        onChangeTextHandler,
        addItemHandler
    }
    ) => {
        return(
        <View style={styles.box1}>
            <TextInput
                style={styles.input} 
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandler}
                value={textItemProp}
            />
            <Button 
                title='Agregar' 
                color="#28B463"
                onPress={addItemHandler}
            />
        </View>
)}

export default CustomInput

const styles = StyleSheet.create({
    box1: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"#eee",
        padding:5,
    },
    input:{
        width:"70%"
    },


})