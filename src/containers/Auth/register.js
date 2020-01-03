import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style/register.style';

export default class RegisterScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back to login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
