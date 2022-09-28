import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [inputVelocidade, setInputVelocidade] = useState(0);

  function converter(valor)
  {
    valor = (valor * 0.621371).toFixed(2);
    setInputVelocidade(valor);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite o valor em quilometros por hora🚗🏎!</Text>

      <Text style={styles.texto}>Digite o valor em quilometros: </Text>
      <TextInput 
        style={styles.input}  
        placeholder="Digite o valor em km/h"
        placeholderTextColor = "#A9A9A9"
        onChangeText={velocidade => {converter(velocidade)}}
      >
      </TextInput>

      <Text style={styles.resultado}>{inputVelocidade}mph</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10vh',
    backgroundColor: '#F5DEB3',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },

  input:{
    textAlign: 'center',
    margin: '5%',
    fontSize: '1.5rem',
    color: '#6D6D6D',
    border: 'solid 2px black',
    borderRadius: '5px',
  },

  titulo:{
    fontSize: '2rem',
    marginBottom: '10vh',
  },

  texto:{
    fontSize: '1.5rem',
  },

  resultado:{
    fontSize: '2rem',
    marginTop: '10vh',
    border: 'solid 2px black',
    borderRadius: '5px',
    paddingBottom: '0.5vh',
    paddingTop: '0.5vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
});
