import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [high, setHigh] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState('');

  function calculateIMC()
  {
        
    let imc = (weight/ (high * high)).toFixed(2);


    if (imc> 0 && imc <= 16.9)
    {
      setResult("IMC: " + imc + ", voce esta muito abaixo do peso");

    }else if (imc >= 17 && imc <= 18.9)
    {
      setResult("IMC: " + imc + ". voce esta abaixo do peso");

    }else if (imc>= 19 && imc <= 26.9)
    {
      setResult("IMC: " + imc + ", Voce esta com o peso ideal (:");

    }else if (imc >= 27 && imc <= 31.9)
    {
      setResult("IMC: " + imc + ", voce esta sobrepeso");
      
    }else if (imc>= 32)
    {
      setResult("IMC:" + imc + ", voce esta com obesidade");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule seu IMC!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu peso" 
        placeholderTextColor={"#C1C7CF"}
        onChangeText={(input) => {setWeight(input)}}
      >
      </TextInput>

      <TextInput 
        style={styles.input} 
        placeholder="Digite sua altura" 
        placeholderTextColor={"#C1C7CF"}
        onChangeText={(input) => {setHigh(input)}}
      >
        
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={calculateIMC}>Calcular</TouchableOpacity>
      <Text style={styles.resultado}>{result}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
    height: '100vh',
  },

  titulo:{
    position: 'relative',
    top: '0',
    fontSize: '1.5rem',
    marginTop: '10vh',
    marginBottom: '15vh',
  },

  input:{
    width: 'fit-content',
    height: '30px',
    backgroundColor: '#F3F3F3',
    paddingLeft: '10px',
    marginBottom: '2vh',
    borderRadius: '5px',
  },

  button:{
    backgroundColor:'#C1C7CF',
    height:'30px',
    width:'30vw',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;',
    fontWeight: '500',
    marginTop: '10vh',
  },

  resultado:{
    fontSize: '1.1rem',
    marginTop: '3vh',
    textAlign: 'center',
  },
});
