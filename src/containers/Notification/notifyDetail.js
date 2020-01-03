import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import style from './style/index.style';
import actions from 'reduxes/actions';

class HomeScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // call api get data
  };

  changeUserInfo = async () => {
    if (this.userName) {
      this.props.setUser({name: this.userName}); // test redux
      this.props.navigation.navigate('DetailScreen');
    } else {
      Alert.alert('Warning', 'you must fill name');
    }
  };

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity onPress={this.changeUserInfo}>
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

export default connect(null, {
  setUser: actions.user.setUser,
})(HomeScreen);
