import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import AppContainer from 'components/appContainer';
import BackHeader from 'components/backHeader';
import {__} from 'locales';

class InhouseTransfer extends PureComponent {
  state = {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <BackHeader
          title={__('INHOUSE_TRANSFER')}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text>InhouseTransfer Screen</Text>
      </AppContainer>
    );
  }
}

export default InhouseTransfer;
