import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styleRegister from './style/register.style';
import styleLogin from './style/login.style';
import Logo, {LogoImage} from 'components/logo';
import AuthContainer from './components/authContainer';
import AuthInput from './components/authInput';
import TouchIdAuthen from 'components/touchId';

export default class LoginScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.field = [
      {
        icon: 'user',
        placeholder: 'Username',
        key: 'userName',
      },
      {
        icon: 'key',
        placeholder: 'Password',
        key: 'password',
      },
    ];
  }

  renderInput = () =>
    this.field.map(field => (
      <AuthInput
        key={field.key}
        icon={{name: field.icon}}
        placeholder={field.placeholder}
        keyboardType={field.type}
      />
    ));

  onCheckLogin = () => {
    this.props.navigation.navigate('HomeStack');
  };

  onTouchIdSuccess = () => {};

  render() {
    return (
      <AuthContainer>
        <View style={styleRegister.container}>
          <Logo />
          <View style={styleRegister.bodyContainer}>
            <View style={styleRegister.logoView}>
              <LogoImage />
            </View>
            <View style={styleRegister.bodyForm}>
              {this.renderInput()}
              <TouchableOpacity
                style={styleLogin.btnLogin}
                onPress={this.onCheckLogin}>
                <Text style={styleLogin.btnText}>Login</Text>
              </TouchableOpacity>
              <View style={styleLogin.forgotView}>
                <Text style={styleLogin.forgotText}>Forgot Password</Text>
              </View>
            </View>
            <TouchIdAuthen authenSuccess={this.touchIdSuccess} />
          </View>
        </View>
      </AuthContainer>
    );
  }
}
