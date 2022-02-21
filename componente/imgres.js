import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Text, View,Image} from 'react-native';




export default props=>{
    return(
        <View style={styles.bloco} >

        {

            props.comb == '' ?
            <Image
                source={require('../assest/GxE.jpeg')}
            />
            :
            props.comb == 'G' ?
            <Image
                source={require('../assest/gaso.jpeg')}
            />
            : 
            <Image
                source={require('../assest/eta.jpeg')}
            />
            
        }

           
        </View>
    )
}

const styles = StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
    },Bomba:{
       resizeMode:'cover'
    }
});


