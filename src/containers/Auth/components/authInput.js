import React, {PureComponent} from 'react';
import {View, StyleSheet, ViewStyle, TextStyle, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from 'themes/Colors';

type Props = {
  containerStyle?: ViewStyle,
  inputStyle?: TextStyle,
  defaultValue?: String,
  icon: {
    name: String,
    size: Number,
    color: String,
  },
  placeholder: String,
  keyboardType?: String,
};

export default class AuthInput extends PureComponent<Props> {
  static defaultProps = {
    defaultValue: '',
    inputStyle: {},
    containerStyle: {},
    keyboardType: 'default',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
  }

  render() {
    const {
      icon,
      containerStyle,
      inputStyle,
      defaultValue,
      placeholder,
      keyboardType,
    } = this.props;
    return (
      <View
        style={[styles.inputContainer, containerStyle]}
        onPress={() => this.showPicker()}>
        <View style={styles.iconView}>
          <Icon
            name={icon.name}
            size={icon.size || 24}
            color={icon.color || colors.grey}
            style={{}}
          />
        </View>
        <TextInput
          defaultValue={defaultValue}
          style={[styles.inputStyle, inputStyle]}
          placeholder={placeholder}
          onChangeText={text => {
            this.inputText = text;
          }}
          keyboardType={keyboardType}
        />
      </View>
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
  inputStyle: {
    height: 36,
    padding: 0,
    margin: 0,
    flex: 1,
  },
});
