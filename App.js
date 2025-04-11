// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Detalhes do Produto' }} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Informações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
