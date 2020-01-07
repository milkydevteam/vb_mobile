import React, {PureComponent} from 'react';
import {DrawerActions} from 'react-navigation-drawer';
import {connect} from 'react-redux';
import AppContainer from 'components/appContainer';
import HomeInfo from './components/homeInfo';
import MenuFunction from './components/menuFunction';
import LastActiveList from './components/lastActivity';

class HomeScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onPress = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <HomeInfo />
        <MenuFunction />
        <LastActiveList />
      </AppContainer>
    );
  }
}

export default connect(null)(HomeScreen);
