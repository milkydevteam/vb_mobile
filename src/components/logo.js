import React from 'react';
import {View, Image, ViewStyle, StyleSheet, Text} from 'react-native';
import images from 'themes/Images';
import colors from 'themes/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
  logoSize: {
    height: 50,
    width: 50,
  },
  logoText: {
    marginLeft: 10,
    fontSize: 23,
    color: colors.white,
  },
});

export const LogoImage = (props: {size: Object}) => (
  <Image style={{...styles.logoSize, ...props.size}} source={images.logo} />
);

const Logo = (props: {style: ViewStyle}) => (
  <View style={{...styles.container, ...props.style}}>
    <Image source={images.logo} style={styles.logoSize} />
    <Text style={styles.logoText}>AGRIBANK</Text>
  </View>
);

export default Logo;
