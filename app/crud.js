import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';

export default function CrudScreen() {
  const [input, setInput] = useState('');
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    if (input.trim() !== '') {
      const novosItens = itens.concat(input); 
      setItens(novosItens); 
      setInput(''); 
    }
  };

  const deletarItem = (index) => {
    const novosItens = [];
    for (let i = 0; i < itens.length; i++) {
      if (i !== index) {
        novosItens.push(itens[i]);  
      }
    }
    setItens(novosItens);
  };


  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Adicionar Item"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Adicionar Item" onPress={adicionarItem} />
      <FlatList
        data={itens}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text>{item}</Text>
            <Button title="Deletar" onPress={() => deletarItem(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, width: '100%', marginBottom: 10, paddingLeft: 8 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '100%' },
});
