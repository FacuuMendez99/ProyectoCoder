import { View, Text, Modal,StyleSheet,Button } from 'react-native'

const CustomModal = (
    { 
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }
) => {
    return(
        <Modal
        animationType={animationTypeProp}
        visible={isVisibleProp}
        >
            <View
                style={styles.modalContainer}
            >
                <Text>Se eliminará:</Text>
                <Text>{itemSelectedProp.value}</Text>
            <View style={styles.modalButtons}>  
                <Button
                title='Aceptar'
                color={"#28B463"}
                onPress={onDeleteItemHandlerEvent}
                />
                <Button
                title='Cancelar'
                color={"#ff6961"}
                onPress={()=>setModalVisibleEvent(!isVisibleProp)}
                />
            </View>
                </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer:{
        marginTop:100,
        marginHorizontal:20,
        padding:10,
        borderWidth:1,
        borderRadius:15
    },
    modalButtons:{
        marginTop:30,
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-around',
    }
})

