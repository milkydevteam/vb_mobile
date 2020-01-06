import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import style from './style/index.style';

class HomeScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity>
          <Text style={style.title}>Go to Detail Screen</Text>
        </TouchableOpacity>
        <TextInput
          style={style.input}
          underlineColorAndroid="transparent"
          onChangeText={text => {
            this.userName = text;
          }}
          placeholder="username"
        />
      </View>
    );
  }
}

export default connect(null)(HomeScreen);
