import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import AppContainer from 'components/appContainer';

class SettingScreen extends PureComponent {
  state = {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <Text>Setting Screen</Text>
      </AppContainer>
    );
  }
}

export default SettingScreen;
