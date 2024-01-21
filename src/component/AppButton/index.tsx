import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../common/colors';
import { ACTIVEOPACITY } from '../../utility/functions';

interface AppButtonProps {
  onPress: ()=>void;
  title:string;
  buttonStyle?: ViewStyle;
}
export default function AppButton({onPress,title,buttonStyle}:AppButtonProps) {
  return (
    <TouchableOpacity style={[styles.container,buttonStyle]} onPress={onPress} activeOpacity={ACTIVEOPACITY}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.royalBlue,
    borderRadius: 16
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 25,
  },
});