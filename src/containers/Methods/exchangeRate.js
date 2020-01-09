import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import AppContainer from 'components/appContainer';
import BackHeader from 'components/backHeader';
import {__} from 'locales';

class ExchangeRate extends PureComponent {
  state = {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <BackHeader
          title={__('EXCHANGE_RATE')}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text>ExchangeRate Screen</Text>
      </AppContainer>
    );
  }
}

export default ExchangeRate;
