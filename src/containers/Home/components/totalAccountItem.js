import React, {PureComponent} from 'react';
import {TouchableOpacity, View, Text, Animated} from 'react-native';
import style from './style/summaryItem.style';
import {__} from 'locales';
import {convertMoney} from 'utilities/convertMoney';

type Props = {
  total: Number,
  numberOfAccounts: Number,
  listAccount: Array<{
    id: String,
    accountName: String,
    balance: Number,
    type: String,
  }>,
};

export default class AccountItem extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
    };
    this.aniMargin = new Animated.Value(0);
    this.isOpen = false;
  }

  showDetail = async () => {
    const {isShowDetail} = this.state;
    await this.setState({isShowDetail: !isShowDetail});
    Animated.timing(this.aniMargin, {
      toValue: this.state.isShowDetail ? 8 : 0,
      duration: 100,
    }).start();
  };

  renderDetailItem = ({item}) => (
    <TouchableOpacity style={style.detailAccount}>
      <Text style={style.detailText}>
        {item.id} / {item.accountName} ({item.type})
      </Text>
      <Text style={style.detailText}>
        Total Available Balance {item.balance}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const {isShowDetail} = this.state;
    const {total, numberOfAccounts, listAccounts} = this.props;
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.btnItem} onPress={this.showDetail}>
          {!isShowDetail && <View style={style.sideViewLeft} />}
          <Animated.View
            style={[
              style.middleView,
              {
                marginLeft: this.aniMargin.interpolate({
                  inputRange: [0, 8],
                  outputRange: [0, 30],
                }),
              },
            ]}>
            <View style={style.labelView}>
              <Text style={style.summaryText}>{__('CUR_ACCOUNT')}</Text>
              <Text style={style.summaryText}>Total Available Balance</Text>
            </View>
            <View style={style.valueView}>
              <Text style={style.summaryText}>
                ({numberOfAccounts} Accounts)
              </Text>
              <Text style={style.summaryText}>VND {convertMoney(total)}</Text>
            </View>
          </Animated.View>
          {isShowDetail && <View style={style.sideViewRight} />}
        </TouchableOpacity>
        <Animated.FlatList
          data={listAccounts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderDetailItem}
          style={[
            style.listStyle,
            {
              maxHeight: this.aniMargin.interpolate({
                inputRange: [0, 8],
                outputRange: [0, 2000],
              }),
            },
          ]}
        />
      </View>
    );
  }
}
