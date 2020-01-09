import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import AppContainer from 'components/appContainer';

class Notification extends PureComponent {
  state = {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <Text>Notification</Text>
      </AppContainer>
    );
  }
}

export default Notification;
