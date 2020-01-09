import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import AppContainer from 'components/appContainer';
import BackHeader from 'components/backHeader';
import {__} from 'locales';

class BeneficiaryList extends PureComponent {
  state = {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <BackHeader
          title={__('BENEFICIARY_LIST')}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text>BeneficiaryList Screen</Text>
      </AppContainer>
    );
  }
}

export default BeneficiaryList;
