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
    const {navigation} = this.props;
    return (
      <AppContainer navigation={this.props.navigation}>
        <ScrollView
          style={style.scrollview}
          contentContainerStyle={style.content}>
          <HomeInfo navigation={navigation} />
          <MenuFunction navigation={navigation} />
          <LastActiveList navigation={navigation} />
          <AccountSummary navigation={navigation} />
        </ScrollView>
      </AppContainer>
    );
  }
}

export default connect(null)(HomeScreen);
