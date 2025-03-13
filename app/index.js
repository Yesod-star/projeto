import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const logarUsuario = () => {
    if (login === 'admin' && senha === 'admin') {
      navigation.navigate('Menu'); 
    } else {
      alert('Login ou senha incorretos!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>LOGIN</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setLogin} 
        placeholder="Digite seu login"
      />
      <Text style={styles.label}>SENHA</Text>
      <TextInput 
        style={styles.input} 
        secureTextEntry={true} 
        onChangeText={setSenha} 
        placeholder="Digite sua senha"
      />
      <TouchableOpacity style={styles.button} onPress={logarUsuario}>
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8e44ad',
    padding: 100,
    marginTop: 100,
    marginBottom: 100,
    paddingTop: 100,
    paddingBottom: 100
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    width: '80%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 45,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    textTransform: 'uppercase', 
    fontSize: 16,
  }
});

