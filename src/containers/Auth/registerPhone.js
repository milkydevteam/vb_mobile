import React, {PureComponent} from 'react';
import {View} from 'react-native';
import style from './style/register.style';
import Logo, {LogoImage} from 'components/logo';
import AuthContainer from './components/authContainer';
import CountryPickerInput from 'components/countryPickerInput';
import AuthInput from './components/authInput';
import AuthButton from './components/authButton';

export default class RegisterPhone extends PureComponent<> {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <AuthContainer>
        <View style={style.container}>
          <Logo />
          <View style={style.bodyContainer}>
            <View style={style.logoView}>
              <LogoImage />
            </View>
            <View style={style.bodyForm}>
              <CountryPickerInput />
              <AuthInput
                icon={{name: 'mobile'}}
                placeholder="Enter phone number"
              />
            </View>
          </View>
          <View style={style.bottomView}>
            <AuthButton
              label="Cancel"
              onPress={() => {
                navigation.goBack();
              }}
              btnStyle={style.bottomBtn}
            />
            <AuthButton
              label="Continue"
              onPress={() => {
                navigation.navigate('RegisterInfo');
              }}
              btnStyle={style.registerBtn}
            />
          </View>
        </View>
      </AuthContainer>
    );
  }
}
