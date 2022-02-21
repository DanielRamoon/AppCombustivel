import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Text, View,TextInput} from 'react-native';




export default props=>{
    return(
        <View style={styles.bloco} >
            <Text style={styles.txt} >Melhor Combustivél:{props.resultado}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    bloco:{
        marginBottom:10
    },txt:{
        color:'#000',
        fontSize:20,
        marginLeft:1
    }
});
