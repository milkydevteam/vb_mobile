import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import style from './style/welcome.style';
import Logo from 'components/logo';
import AuthContainer from './components/authContainer';
import AuthButton from './components/authButton';

export default class WelcomeScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <AuthContainer>
        <Logo />
        <View style={style.body}>
          <Text style={style.bodyText}>Welcome!</Text>
          <Text style={style.bodyText}>Agribank Retail Mobile Banking</Text>
          <View style={style.bottomView}>
            <AuthButton
              label="Login"
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
            <AuthButton
              label="Register"
              onPress={() => {
                navigation.navigate('RegisterPhone');
              }}
            />
          </View>
        </View>
      </AuthContainer>
    );
  }
}
