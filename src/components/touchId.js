import React, {PureComponent} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as Keychain from 'react-native-keychain';
import TouchID from 'react-native-touch-id';
import images from 'themes/Images';
import colors from 'themes/Colors';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

type Props = {
  authenSuccess: () => void,
  imageStyle?: Object,
  btnStyle?: Object,
};

export default class TouchIdAuthen extends PureComponent<Props> {
  static defaultProps = {
    imageStyle: {},
    btnStyle: {},
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  showAuthen = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        TouchID.authenticate('Please press your touch id', optionalConfigObject)
          .then(success => {
            console.log(success);
            this.props.authenSuccess();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  testKeychain = async () => {
    const username = 'zuck';
    const password = 'poniesRgr8';
    const typeSupport = await Keychain.getSupportedBiometryType();
    const securitySupport = await Keychain.getSecurityLevel();
    if (!typeSupport) {
      global.root.showDialog({
        type: 'alert',
        body: 'Thiết bị không hỗ trợ vân tay',
      });
      return;
    }

    // Store the credentials
    await Keychain.setGenericPassword(username, password, {
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
      authenticationPrompt: 'Xac thưc vân tay',
      authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
    });
    console.log('typeSupport', securitySupport);
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword({
        authenticationPrompt: 'Xac thuc van tay',
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
      });

      if (credentials) {
        console.log(
          'Credentials successfully loaded for user ' +
            credentials.username +
            credentials.password +
            credentials.service,
        );
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
    await Keychain.resetGenericPassword();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.testKeychain}
        style={{...style.btnStyle, ...this.props.btnStyle}}>
        <Image
          source={images.touchId}
          style={{...style.imageStyle, ...this.props.imageStyle}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  btnStyle: {
    marginTop: 30,
  },
  imageStyle: {
    height: 56,
    width: 56,
    tintColor: colors.white,
  },
});
