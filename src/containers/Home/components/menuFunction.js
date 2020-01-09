import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import style from './style/menuFunction.style';
import FunctionItem from './functionItem';

type Props = {};

export default class MenuFunction extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.menu = [
      {
        color: 'red',
        label: 'Beneficiary_List',
        screen: 'BeneficiaryList',
      },
      {
        color: 'blue',
        label: 'Inhouse_transfer',
        screen: 'InhouseTransfer',
      },
      {
        color: 'yellow',
        label: 'Pending_Task',
        screen: 'PendingTask',
      },
      {
        color: 'grey',
        label: 'Exchange_Rate',
        screen: 'ExchangeRate',
      },
    ];
  }

  onItemPress = screenName => {
    this.props.navigation.navigate(screenName);
  };

  renderItem = () =>
    this.menu.map((item, index) => (
      <FunctionItem
        key={index.toString()}
        {...item}
        onPress={this.onItemPress}
      />
    ));
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style.container}
        contentContainerStyle={style.contentStyle}>
        {this.renderItem()}
      </ScrollView>
    );
  }
}
