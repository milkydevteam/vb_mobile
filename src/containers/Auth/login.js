import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style/login.style';

export default class LoginScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  test = () => {
    const {navigation} = this.props;
    alert(global.isConnect);
    navigation.navigate('HomeStack');
  };

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            this.test();
          }}>
          <Text>{this.state.message || 'Test'}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text>Go to Register</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
