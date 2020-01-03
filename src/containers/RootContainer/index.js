import React, {PureComponent} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Navigator from 'navigators';
import style from './style/index.style';
import actions from 'reduxes/actions';

class RootContainer extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    global.root = {...this};
    actions.NetworkModel.checkNetwork();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaView style={style.areaContainer}>
        <Navigator />
      </SafeAreaView>
    );
  }
}

export default connect()(RootContainer);
