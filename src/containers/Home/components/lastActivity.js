import React, {PureComponent} from 'react';
import {ScrollView, View, Text} from 'react-native';
import style from './style/lastActivity.style';
import ActivityItem from './activityItem';

type Props = {};

export default class LastActiveList extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          status: 'Approve',
          label: 'Beneficiary List',
          idCard: '201906211008288',
        },
        {
          status: 'Approve',
          label: 'Inhouse transfer',
          idCard: '201906211008288',
        },
        {
          status: 'Approve',
          label: 'Pending Task',
          idCard: '201906211008288',
        },
        {
          status: 'Approve',
          label: 'Exchange Rate',
          idCard: '201906211008288',
        },
      ],
    };
  }
  renderItem = () =>
    this.state.data.map((item, index) => (
      <ActivityItem item={item} key={index.toString()} />
    ));
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Last Activity</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.scrollview}
          contentContainerStyle={style.contentStyle}>
          {this.renderItem()}
        </ScrollView>
      </View>
    );
  }
}
