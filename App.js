import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/index'; 
import ExemploScreen from './app/exemplo';
import MenuScreen from './app/menu';
import CalculadoraScreen from './app/calculadora';
import QuizScreen from './app/quiz';
import CrudScreen from './app/crud';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Exemplo" component={ExemploScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Crud" component={CrudScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
