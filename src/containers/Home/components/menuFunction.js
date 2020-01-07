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
        label: 'Beneficiary List',
      },
      {
        color: 'blue',
        label: 'Inhouse transfer',
      },
      {
        color: 'yellow',
        label: 'Pending Task',
      },
      {
        color: 'grey',
        label: 'Exchange Rate',
      },
    ];
  }
  renderItem = () =>
    this.menu.map((item, index) => (
      <FunctionItem
        key={index.toString()}
        color={item.color}
        label={item.label}
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
