import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [dollarPrice, setDollarPrice] = useState(0);
  const [dollarCount, setDollarCount] = useState(0);
  const [realCount, setRealCount] = useState(0);

  function conversion()
  {
    setDollarCount((realCount / dollarPrice).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de moeda, real para dólar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a cotação do dólar!"
        placeholderTextColor="#C0C0C0" 
        onChangeText={input => {setDollarPrice(input)}}
      >
      </TextInput>
      <TextInput
        style={styles.input}
        placeholder="Digite quantos reais você tem!"
        placeholderTextColor="#C0C0C0" 
        onChangeText={input => {setRealCount(input)}}
      >
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={conversion}></TouchableOpacity>
      
      <Text style={styles.h2}>Resultado!</Text>
      <Text style={styles.resultado}>{"$$" + dollarCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0C4DE',
    height: 'calc(90vh)',
    width: '90vw',
    margin: 'auto',
    // filter: 'blur(10px)',
  },

  titulo:{
      fontSize: '2rem',
      marginBottom: '5vh',
      textAlign: 'center',
  },

  input:{
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '2vh',
    width: '80vw',
    height: '50px',
    backgroundColor: '#DCDCDC',
    border: 'solid 1px',
    borderRadius: '5px',
    fontWeight: '400',
  },

  button:{
    height: '35px',
    width: '25vw',
    backgroundColor: '#8A97A9',
    borderRadius: '5px',
  },

  h2:{
    fontSize: '1.5rem',
    marginTop: '5vh',
  },

  resultado:{
    fontSize: '1.3rem',
    marginTop: '1vh',
    color: '#696969',
  },
});
