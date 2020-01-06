import React from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import colors from 'themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  text: {
    fontWeight: 'bold',
    color: colors.greenText,
  },
});

const AuthButton = (
  props: {
    btnStyle: ViewStyle,
    labelStyle: TextStyle,
    label: String,
    onPress: () => void,
  } = {},
) => (
  <TouchableOpacity
    style={{...styles.container, ...props.btnStyle}}
    onPress={() => {
      props.onPress();
    }}>
    <Text style={{...styles.text, ...props.labelStyle}}>{props.label}</Text>
  </TouchableOpacity>
);

export default AuthButton;
