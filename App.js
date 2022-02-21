import React, {useState} from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Text, View,TextInput} from 'react-native';
import Gaso from './componente/gasolina'
import Eta from './componente/etanol'
import Btn from './componente/btnCalc'
import Res from './componente/resultado'
import Img from './componente/imgres'


export default function App(){
  const [gasolina,setGasolina]=useState(0)
  const [etanol,setEtanol]=useState(0)
  const [resultado,setResultado]=useState('')

  const calcular=()=>{
    if(!gasolina){
      alert('Informe o preço da Gasolina')
      return
    }
    if(!etanol){
      alert('Informe o preço do Etanol')
      return
    }
  let Res
  let calc=((etanol/gasolina)*100).toFixed(1)
  if(calc > 70){
    Res= 'Gasolina'
  }else{
    Res='Etanol'
  }
  alert('O Etanol está custando '+ calc + '% da gasolina. Portanto é melhor '+ Res)
  setResultado(Res  )
  }
  const limpar=()=>{
    setResultado('')
  }
  
  const setarGasolina=(v)=>{
    limpar()
    setGasolina(v)
  }
  const setarEtanol=(v)=>{
    limpar()
    setEtanol(v)
  }
  
 
  return(




    <SafeAreaView style={styles.principal} >
      <Gaso aoModificar={setarGasolina} />
      <Eta aoModificar={setarEtanol} />
      <Btn aoPressionar={calcular} />
      <Res resultado={resultado} />
      <Img comb={resultado.charAt(0)} />

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  principal:{
    padding:10,
    marginTop:10
  }
});


