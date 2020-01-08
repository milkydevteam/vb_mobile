import React, {PureComponent} from 'react';
import {
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextStyle,
} from 'react-native';
import {langService} from 'constants/locales';
import colors from 'themes/Colors';

const styles = StyleSheet.create({
  btn: {
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.white,
    borderWidth: 0.3,
  },
  textColor: {
    color: colors.white,
  },
});

type Props = {
  btnStyle?: ViewStyle,
  txtStyle?: TextStyle,
};

export default class LanguageButton extends PureComponent<Props> {
  static defaultProps = {
    btnStyle: {},
    txtStyle: {},
  };

  onPress = async () => {
    global.root.navigate('LanguageScreen');
  };

  render() {
    const {btnStyle, txtStyle} = this.props;
    return (
      <TouchableOpacity
        style={{...styles.btn, ...btnStyle}}
        onPress={this.onPress}>
        <Text style={{...styles.textColor, ...txtStyle}}>
          {langService.getCurrentLocale().toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}
