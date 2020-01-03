import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style/index.style';

class NewsDetail extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={style.title}>Go back Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewsDetail;
