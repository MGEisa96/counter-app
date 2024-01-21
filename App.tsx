import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CounterScreen from './src/screens/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';
import MainStack from './src/navigation/MainStack';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainStack />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
