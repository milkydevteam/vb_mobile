import React, {PureComponent} from 'react';
import {StatusBar, View} from 'react-native';
import {connect} from 'react-redux';
import style from './style/splash.style';
import actions from 'reduxes/actions';

type Props = {
  navigation: Object,
};

class Splash extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('splas');
    this.getState();
  }

  componentWillUnmount() {}

  getState = async isConnected => {
    actions.UserModel.getPositionUser(true);

    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    }, 200);
    return null;
  };
  render() {
    return (
      <View style={style.container}>
        <StatusBar hidden />
        <View style={{backgroundColor: 'red', height: 100, width: 100}} />
      </View>
    );
  }
}

export default connect(null)(Splash);
