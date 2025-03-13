import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function ExemploScreen() {
  const [texto, setTexto] = useState('Texto inicial');
  const [input, setInput] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [estadoTexto, setestadoTexto] = useState(0);

  const textosAlternativos = ['Texto 1', 'Texto 2', 'Texto 3', 'Texto 4'];

  const alternarTexto = () => {
    if(estadoTexto == 3){
      setestadoTexto(0)
    }else{
      setestadoTexto(estadoTexto+1)
    }
    setTexto(textosAlternativos[estadoTexto])
  };


  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <Button title="Trocar Texto" onPress={alternarTexto} />
      <TextInput placeholder="Escreva aqui..." value={input} onChangeText={setInput} />
      <Text style={styles.label}>Valor do Slider: {sliderValue.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={sliderValue}
        onValueChange={setSliderValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  slider: { width: 300,  height: 40},
});
