import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from 'themes/Colors';
import {__} from 'locales';

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
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
  },
});

const FunctionItem = (props: {
  onPress: () => void,
  label: String,
  color: String,
  screen: String,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => props.onPress(props.screen)}>
    <View style={{...styles.icon, backgroundColor: props.color}} />
    <Text style={styles.label}>{__(props.label.toLocaleUpperCase())}</Text>
  </TouchableOpacity>
);

export default FunctionItem;
