import React, { Component } from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Games from './Screens/GamesScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Games" component={Games}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}