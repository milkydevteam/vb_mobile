import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from 'themes/Colors';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: '100%',
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5,
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    width: '100%',
    color: colors.greenText,
    fontSize: 13,
    marginTop: 12,
  },
});

const FunctionItem = (props: {
  onPress: () => void,
  label: String,
  color: String,
}) => (
  <TouchableOpacity style={styles.container}>
    <View style={{...styles.icon, backgroundColor: props.color}} />
    <Text style={props.label}>{props.label}</Text>
  </TouchableOpacity>
);

export default FunctionItem;
