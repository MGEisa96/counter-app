
import * as React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment,resetAction} from '../../store/reducers/counter';
import AppButton from '../../component/AppButton';
import { Colors } from '../../common/colors';

const CounterScreen = () => {
  const counter = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrease = () => {
      dispatch(increment(1));
  };
  const handleDecrees = (counter:number) => {
    
    if(counter >0){
      dispatch(decrement(1));
    }
    else {
      Alert.alert('Sorry the counter has already 0 cannot Decrees')
    }
  };
  const handleReset = () => {
    dispatch(resetAction());
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Counter App</Text>
      </View>
      <View style={styles.counterCircleStyle}>
      <Text style={styles.textStyle}>Counter: {'\n'}{counter}</Text>
      </View>
      <View style={styles.buttonWrapperStyle}>
        <AppButton title="+" onPress={handleIncrease} />
        <AppButton title="-" onPress={()=>handleDecrees(counter)} />
      </View>
      <AppButton title="Reset" onPress={()=>handleReset()} />
      
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 40,
    color: 'black'
  },
  buttonWrapperStyle: {
    width: '100%',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black'
  },
  counterCircleStyle: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: Colors.kournikova,
    borderColor: Colors.Jaffa,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
