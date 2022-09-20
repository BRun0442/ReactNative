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
      <Text style={styles.titulo}>Digite o valor em quilometros por hora🥵🥵🦍!</Text>

      <TextInput 
        style={styles.input}  
        placeholder="Digite o valor em km/h"
        onChangeText={velocidade => {converter(velocidade)}}
      >
      </TextInput>

      <Text style={styles.resultado}>{inputVelocidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10vh',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    textAlign: 'center',
    margin: '5%',
    fontSize: '1.5rem',
  },

  titulo:{
    fontSize: '2rem',
  },

  resultado:{
    fontSize: '2rem',
  },
});
