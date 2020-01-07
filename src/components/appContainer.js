import React from 'react';
import {ViewStyle, StyleSheet, View} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import Header from './header';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {},
});

const AppContainer = (props: {
  style: ViewStyle,
  children: any,
  navigation: Object,
}) => (
  <View style={{...styles.container, ...props.style}}>
    <Header
      title="Agribank Mobile"
      leftButton={<Icon name="bars" size={28} color="white" />}
      onLeftPress={() =>
        props.navigation.dispatch(DrawerActions.toggleDrawer())
      }
    />
    {props.children}
  </View>
);

export default AppContainer;
