import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Text, View,TouchableHighlight} from 'react-native';




export default props=>{
    return(
        <View style={styles.bloco} >
           <TouchableHighlight style={styles.btn} onPress={props.aoPressionar} >
               <Text style={styles.btntxt} >Calcular</Text>
           </TouchableHighlight>
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
    },
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        padding:15
}, btntxt:{
    textTransform:'uppercase',
    color:'#fff',
    fontSize:20
}
    
});
