import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuizScreen() {
  const perguntas = [
    { pergunta: 'Quanto é 2 + 2?', opcoes: ['3', '4', '5'], respostaCorreta: '4' },
    { pergunta: 'Qual é a capital da França?', opcoes: ['Berlim', 'Madri', 'Paris'], respostaCorreta: 'Paris' }
  ];

  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const responder = (resposta) => {
    if (resposta === perguntas[indicePerguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }
    if (indicePerguntaAtual < perguntas.length - 1) {
      setIndicePerguntaAtual(indicePerguntaAtual + 1);
    } else {
      setQuizFinalizado(true);
    }
  };

  if (quizFinalizado) {
    return (
      <View style={styles.container}>
        <Text>Quiz Finalizado!</Text>
        <Text>Sua Pontuação: {pontuacao} / {perguntas.length}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{perguntas[indicePerguntaAtual].pergunta}</Text>
      <Button title={perguntas[indicePerguntaAtual].opcoes[0]} onPress={() => responder(perguntas[indicePerguntaAtual].opcoes[0])} />
      <Button title={perguntas[indicePerguntaAtual].opcoes[1]} onPress={() => responder(perguntas[indicePerguntaAtual].opcoes[1])} />
      <Button title={perguntas[indicePerguntaAtual].opcoes[2]} onPress={() => responder(perguntas[indicePerguntaAtual].opcoes[2])} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
