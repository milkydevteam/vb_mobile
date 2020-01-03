import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import cutString from 'utilities/cutString';
import colors from 'themes/Colors';
import icons from 'themes/icons';
import {heightTabbar} from 'utilities/Tranform';

const styles = StyleSheet.create({
  headContainer: {
    width: '100%',
    height: heightTabbar,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    elevation: 1,
    justifyContent: 'center',
  },
  center: {
    borderBottomWidth: 0.3,
    borderColor: '#707070',
    width: '70%',
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingLeft: 5,
  },
  placeholder: {
    color: colors.grey,
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 15,
  },
  right: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 5,
    right: 0,
    height: '100%',
  },
  left: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 5,
    left: 0,
    height: '100%',
  },
  textInput: {
    height: 40,
    padding: 0,
    paddingLeft: 7,
    width: '70%',
    fontSize: 13,
  },
  title: {
    color: 'black',
    fontSize: 17,
  },
});

type Props = {
  onLeftPress?: () => void,
  onRightPress?: () => void,
  title?: any,
  rightButton?: any,
  leftStyle: Object,
  rightStyle: Object,
  headerStyle?: ViewStyle,
  leftButton?: any,
  titleStyle?: Object,
  rightText: any,
};

export default class Header extends PureComponent<Props> {
  static defaultProps = {
    onLeftPress: () => {
      global.root.navigate();
    },
    title: '',
    rightButton: null,
    leftButton: icons.backBlack,
    onRightPress: () => {},
    headerStyle: {},
    titleStyle: {},
  };
  focusInput = () => {
    this.textInput.focus();
  };
  renderLeftHeader = () => (
    <TouchableOpacity onPress={this.props.onLeftPress} style={styles.left}>
      <Image source={this.props.leftButton} style={this.props.leftStyle} />
    </TouchableOpacity>
  );

  renderRightHeader = () => (
    <TouchableOpacity onPress={this.props.onRightPress} style={styles.right}>
      {this.props.rightButton ? (
        <Image
          source={this.props.rightButton}
          style={this.props.rightStyle}
          resizeMethod="resize"
          resizeMode="contain"
        />
      ) : null}
      {this.props.rightText || null}
    </TouchableOpacity>
  );

  render() {
    const {rightButton, leftButton, title, titleStyle, rightText} = this.props;
    return (
      <View style={[styles.headContainer, this.props.headerStyle]}>
        {leftButton && this.renderLeftHeader()}
        {title ? (
          <Text
            style={{
              ...styles.title,
              ...titleStyle,
            }}>
            {typeof title === 'string' ? cutString(title, 40) : title}
          </Text>
        ) : null}

        {rightButton || rightText ? this.renderRightHeader() : null}
      </View>
    );
  }
}
