import React from 'react';
import {View, ViewStyle, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 36,
    alignItems: 'center',
    backgroundColor: colors.primaryRed,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  backBtn: {
    padding: 7,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 7,
  },
});

const BackHeader = (props: {style: ViewStyle, title: String, onPress: () => void}) => (
  <TouchableOpacity style={{...styles.container, ...props.style}} onPress={props.onPress}>
    <View style={styles.backBtn}>
      <Icon name="angle-left" color={colors.white} size={24} />
    </View>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

export default BackHeader;
