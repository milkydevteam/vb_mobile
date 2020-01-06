import React, {PureComponent} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import style from './style/verifyOtp.style';

type Props = {
  navigation: Object,
};
type TYPE = 'SENDING' | 'VERIFY' | 'SUCCESS' | 'INPUT';
type STATUS = 'EMPTY' | 'WRONG' | 'SUCCESS';
type State = {
  type: TYPE,
  network: string,
  status: STATUS,
};
class VerifyPhoneNumber extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.phoneNumber = props.navigation.getParam('phoneNumber', '1234567890');
    this.success = props.navigation.getParam('callback', null);
    this.state = {
      type: 'INPUT',
      disableSubmit: true,
      network: '',
      status: 'EMPTY',
    };
    this.codeInput = [-1, -1, -1, -1, -1, -1];
    this.code = '123123';
  }
  componentDidMount() {
    this.sendCodeToPhone();
  }
  verifyResult = credential => {};
  otherPhoneVerify = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  sendCodeToPhone = async () => {};

  renderView = (type: TYPE) => {
    const checkFull = () => {
      const check = this.codeInput.indexOf(-1);
      if (check === -1) {
        this.setState({disableSubmit: false, status: 'SUCCESS'});
      } else {
        this.setState({disableSubmit: true, status: 'EMPTY'});
      }
      return check === -1;
    };
    let statusStyle = {color: 'black', fontWeight: 'normal'};
    let descript = 'Input OTP Code';
    if (this.state.status === 'WRONG') {
      descript = 'Please fill code again!';
    }

    return (
      <View style={style.container}>
        <Text style={style.title}>AGRIBANK</Text>
        <Text style={style.descript}>{descript}</Text>
        <View style={style.inputContainer}>
          {this.codeInput.map((item, index) => (
            <TextInput
              key={index.toString()}
              ref={ref => {
                this[`input${index}`] = ref;
              }}
              style={[style.input, statusStyle]}
              keyboardType="numeric"
              maxLength={1}
              defaultValue={item !== -1 ? item.toString() : ''}
              onChangeText={text => {
                this.codeInput[index] = text;
                if (text === '') {
                  this.codeInput[index] = -1;
                }
                checkFull();
                if (index < 5 && this.codeInput[index].length === 1) {
                  this[`input${index + 1}`].focus();
                }
              }}
              onSubmitEditing={this.otherPhoneVerify}
              underlineColorAndroid="transparent"
            />
          ))}
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          <Text style={style.subTitle} onPress={this.sendCodeToPhone}>
            Resend OTP
          </Text>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={this.otherPhoneVerify}
            disabled={this.state.disableSubmit}
            style={[
              style.btnSubmit,
              !this.state.disableSubmit ? {backgroundColor: '#FFF'} : {},
            ]}>
            <Text style={style.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={style.verifyOTP}>{this.renderView(this.state.type)}</View>
    );
  }
}

export default VerifyPhoneNumber;
