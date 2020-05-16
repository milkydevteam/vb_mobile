import React from 'react';
import { ViewStyle, StyleSheet, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Header from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppContainer = (props: {style: ViewStyle, children: any, navigation: Object}) => (
  <View style={{ ...styles.container, ...props.style }}>
    <Header
      title="Agribank Mobile"
      leftButton={<Icon name="bars" size={24} color="white" />}
      rightButton={<Icon name="bell" size={24} color="white" />}
      onLeftPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      onRightPress={() => props.navigation.navigate('Notification')}
      leftType="LIB"
      rightType="LIB"
    />
    {props.children}
  </View>
);

export default AppContainer;
