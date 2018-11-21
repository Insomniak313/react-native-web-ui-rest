import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TextField from './TextField';

const TextFormGroup = ({style, label, ...other}) => (
  <View style={StyleSheet.compose(styles.container, style)}>
    <Text style={StyleSheet.compose(styles.label, style)}>{label}</Text>
    <TextField {...other} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  label: {
    marginBottom: 0
  }
});


export default TextFormGroup;
