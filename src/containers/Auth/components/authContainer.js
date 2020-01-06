import React from 'react';
import {ScrollView, ViewStyle, StyleSheet, View} from 'react-native';
import colors from 'themes/Colors';
import {heightScreen} from 'utilities/Tranform';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 25,
    backgroundColor: colors.primaryRed,
    height: heightScreen,
  },
});

const AuthContainer = (props: {style: ViewStyle, children: any}) => (
  <ScrollView style={styles.scrollContainer}>
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  </ScrollView>
);

export default AuthContainer;
