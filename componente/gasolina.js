import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Text, View,TextInput} from 'react-native';




export default props=>{
    return(
        <View style={styles.bloco} >
            <Text>Preço da Gasolina</Text>
            <TextInput
                style={styles.txt}
                keyboardType='numeric'
                onChangeText={text=>props.aoModificar(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bloco:{
        marginBottom:10
    },txt:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:7,
        marginTop:10
    }
});
