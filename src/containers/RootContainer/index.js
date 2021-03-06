import React, {PureComponent} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Navigator from 'navigators';
import style from './style/index.style';
import actions from 'reduxes/actions';
import colors from 'themes/Colors';
import {withLocale} from 'locales';
import RenderRootView from 'components/ViewRootController/RenderRootView';
import RootAction from 'components/ViewRootController/RootAction';

class RootContainer extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderView = new RenderRootView(this);
    const rootActions = new RootAction(this);
    global.root = {...rootActions, ...this};
    actions.NetworkModel.checkNetwork();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaView style={style.areaContainer}>
        <StatusBar backgroundColor={colors.primaryRed} />
        <Navigator />
        {this.renderView.renderLoading()}
        {this.renderView.renderNotification()}
        {this.renderView.renderDialog()}
      </SafeAreaView>
    );
  }
}

export default withLocale(connect()(RootContainer));
