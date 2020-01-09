import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import AppContainer from 'components/appContainer';
import BackHeader from 'components/backHeader';
import {__} from 'locales';

class PendingTask extends PureComponent {
  state = {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <BackHeader
          title={__('PENDING_TASK')}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text>PendingTask Screen</Text>
      </AppContainer>
    );
  }
}

export default PendingTask;
