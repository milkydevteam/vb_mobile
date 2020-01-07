import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import AppContainer from 'components/appContainer';
import HomeInfo from './components/homeInfo';
import MenuFunction from './components/menuFunction';
import LastActiveList from './components/lastActivity';
import AccountSummary from './components/accountSummary';
import style from './style/index.style';

class HomeScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <ScrollView
          style={style.scrollview}
          contentContainerStyle={style.content}>
          <HomeInfo />
          <MenuFunction />
          <LastActiveList />
          <AccountSummary />
        </ScrollView>
      </AppContainer>
    );
  }
}

export default connect(null)(HomeScreen);
