import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import CounterScreen from '../Counter';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      Home Screen
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: '#FFFFFF',
    
  },
  
});
