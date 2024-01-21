import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CounterScreen from '../screens/Counter';


const Stack = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerShown: false, 
      }}  
      >
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
