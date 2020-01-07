import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from 'themes/Colors';

const styles = StyleSheet.create({
  btnContainer: {
    width: 126,
    height: '100%',
    paddingHorizontal: 7,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: colors.primaryRed,
    borderRadius: 3,
  },
  text: {
    color: colors.white,
    marginTop: 5,
  },
});

const ActivityItem = (props: {onPress: () => void, item: Object}) => (
  <TouchableOpacity style={styles.btnContainer}>
    <Text style={styles.text}>{props.item.status}</Text>
    <Text style={styles.text}>{props.item.label}</Text>
    <Text style={styles.text}>{props.item.idCard}</Text>
  </TouchableOpacity>
);

export default ActivityItem;
