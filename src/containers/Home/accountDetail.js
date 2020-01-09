import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import AppContainer from 'components/appContainer';
import BackHeader from 'components/backHeader';
import {__} from 'locales';
import style from './style/accountDetail.style';

class AccountDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {};

  render() {
    return (
      <AppContainer navigation={this.props.navigation} style={style.container}>
        <BackHeader
          title={__('ACCOUNT_DETAIL')}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={style.formContainer} />
      </AppContainer>
    );
  }
}

export default AccountDetail;
