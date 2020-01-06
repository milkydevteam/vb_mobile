import React, {PureComponent} from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from 'themes/Colors';
import CountryPicker from 'react-native-country-picker-modal';

type Props = {
  style: ViewStyle,
};

export default class CountryPickerInput extends PureComponent<Props> {
  constructor(props) {
    super(props);
    let cca2 = 'VN';
    let callingCode = ['84'];
    this.state = {
      loading: true,
      visible: false,
      cca2,
      callingCode,
      phoneNumber: '',
    };
  }

  showPicker = (isShow = true) => {
    this.setState({visible: isShow}, () => {
      console.log('visible', this.state.visible);
    });
  };

  onChangeCallingCode = value => {
    if (!value) {
      return;
    }
    this.setState({
      ...this.state,
      ...value,
      visible: false,
    });
  };

  render() {
    const {style} = this.props;
    const {cca2, visible} = this.state;
    return (
      <TouchableOpacity
        style={[styles.inputContainer, style]}
        onPress={() => this.showPicker()}>
        <View style={styles.iconView}>
          <Icon name="flag" size={24} color={colors.grey} />
        </View>
        <CountryPicker
          visible={visible}
          containerButtonStyle={styles.flagView}
          filterPlaceholder="Tìm kiếm"
          countryCode={cca2}
          onSelect={this.onChangeCallingCode}
          translation="eng"
          withFilter
          withFlag
          withFlagButton
          withCloseButton
          withAlphaFilter
          animationType="slide"
        />
        {this.state.callingCode && <Text>+ {this.state.callingCode[0]}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.35,
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
  },
  iconView: {
    width: 36,
    alignItems: 'center',
  },
  flagView: {
    marginHorizontal: 5,
  },
});
