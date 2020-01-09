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
import {heightTabbar} from 'utilities/Tranform';

const styles = StyleSheet.create({
  headContainer: {
    width: '100%',
    height: heightTabbar,
    backgroundColor: colors.primaryRed,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    elevation: 1,
    justifyContent: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 0.3,
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
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 0,
  },
  titleView: {
    height: '100%',
    justifyContent: 'center',
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
  titleStyle?: Object,
  rightText: any,
  leftButton: any,
  leftType?: 'IMG' | 'LIB',
  rightType?: 'IMG' | 'LIB' | 'TXT',
};

export default class Header extends PureComponent<Props> {
  static defaultProps = {
    onLeftPress: () => {},
    title: '',
    rightButton: null,
    onRightPress: () => {},
    headerStyle: {},
    titleStyle: {},
    leftType: 'IMG',
    rightType: 'IMG',
  };

  renderLeftHeader = () => (
    <TouchableOpacity onPress={this.props.onLeftPress} style={styles.left}>
      {this.props.leftType !== 'IMG' ? (
        this.props.leftButton
      ) : (
        <Image source={this.props.leftButton} style={this.props.leftStyle} />
      )}
    </TouchableOpacity>
  );

  renderRightHeader = () => (
    <TouchableOpacity onPress={this.props.onRightPress} style={styles.right}>
      {this.props.rightType !== 'IMG' ? (
        this.props.rightButton
      ) : (
        <Image source={this.props.rightButton} style={this.props.rightStyle} />
      )}
    </TouchableOpacity>
  );

  render() {
    const {rightButton, leftButton, title, titleStyle, rightText} = this.props;
    return (
      <View style={[styles.headContainer, this.props.headerStyle]}>
        {leftButton && this.renderLeftHeader()}
        <View style={styles.titleView}>
          {title ? (
            <Text
              style={{
                ...styles.title,
                ...titleStyle,
              }}>
              {typeof title === 'string' ? cutString(title, 40) : title}
            </Text>
          ) : null}
        </View>

        {rightButton || rightText ? this.renderRightHeader() : null}
      </View>
    );
  }
}
