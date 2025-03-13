import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CalculadoraScreen() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const somar = () => {
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  };

  const subtrair = () => {
    setResultado(parseFloat(numero1) - parseFloat(numero2));
  };

  const multiplicar = () => {
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  };

  const dividir = () => {
    if (parseFloat(numero2) !== 0) {
      setResultado(parseFloat(numero1) / parseFloat(numero2));
    } else {
      setResultado('Erro: Divisão por 0');
    }
  };

  return (
    <View style={styles.container}>
      <Text >Calculadora</Text>

      <TextInput placeholder="Digite o 1º número" keyboardType="numeric"
        value={numero1} onChangeText={setNumero1} />
      <TextInput placeholder="Digite o 2º número" keyboardType="numeric"
        value={numero2} onChangeText={setNumero2} />

      <View>
        <Button title="Soma" onPress={somar} />
        <Button title="Subtração" onPress={subtrair} />
        <Button title="Multiplicação" onPress={multiplicar} />
        <Button title="Divisão" onPress={dividir} />
      </View>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});
