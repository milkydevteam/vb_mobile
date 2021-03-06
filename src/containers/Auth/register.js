import React, {PureComponent} from 'react';
import {View} from 'react-native';
import style from './style/register.style';
import Logo, {LogoImage} from 'components/logo';
import AuthContainer from './components/authContainer';
import AuthInput from './components/authInput';
import AuthButton from './components/authButton';

export default class RegisterPhone extends PureComponent<> {
  constructor(props) {
    super(props);
    this.field = [
      {
        icon: 'user',
        placeholder: 'User Name',
        key: 'userName',
      },
      {
        icon: 'user',
        placeholder: 'Referral code',
        key: 'referral',
        type: 'numeric',
      },
      {
        icon: 'user',
        placeholder: 'ID Card No/Passport No',
        key: 'idCard',
        type: 'numeric',
      },
      {
        icon: 'user',
        placeholder: 'ID Card/Passport issue date',
        key: 'cardDate',
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
            <View style={style.bodyForm}>{this.renderInput()}</View>
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
                navigation.navigate('VerifyOTP');
              }}
              btnStyle={style.registerBtn}
            />
          </View>
        </View>
      </AuthContainer>
    );
  }
}
