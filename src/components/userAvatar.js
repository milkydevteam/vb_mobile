import React, {PureComponent} from 'react';
import {ViewStyle, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImageFunction from 'services/ImageFunction';

const styles = StyleSheet.create({
  avatarBtn: {
    marginRight: 15,
    height: 44,
    width: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  avatarStyle: {
    width: '100%',
    height: '100%',
  },
});

type Props = {
  style: ViewStyle,
  url: any,
  navigation: Object,
  onPress: () => void,
  onChange: () => void,
};

export default class UserAvatar extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
    };
  }
  onChangeAvatar = async () => {
    const image = await ImageFunction.openPicker('openPicker');
    if (image) {
      this.setState({
        url: image.path,
      });
    }
  };
  render() {
    const {url} = this.state;
    return (
      <TouchableOpacity
        style={{...styles.avatarBtn, ...this.props.style}}
        onPress={this.onChangeAvatar}>
        <Image
          style={styles.avatarStyle}
          source={{uri: url}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}
