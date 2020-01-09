import React, {PureComponent} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './style/summary.style';
import {__} from 'locales';
import AccountItem from './totalAccountItem';
import {randomDataAccount} from '../randomData';
import colors from 'themes/Colors';

type Props = {
  navigation: Object,
};

export default class AccountSummary extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await this.setState({isLoading: true});
    setTimeout(() => {
      const data = randomDataAccount();
      this.setState({data: [...this.state.data, ...data], isLoading: false});
    }, 1000);
  };
  handleLoadMore = () => {
    if (this.state.isLoading) {
      return;
    }
    this.getData();
  };
  renderItem = ({item, index}) => (
    <AccountItem
      {...item}
      key={index.toString()}
      onPress={() => this.props.navigation.navigate('AccountDetail')}
    />
  );
  renderFooter = () => {
    if (this.state.data.length >= 10 && !this.state.isLoading) {
      return (
        <TouchableOpacity
          style={style.scrollFooter}
          onPress={this.handleLoadMore}>
          <Text style={style.textFooter}>Load more</Text>
        </TouchableOpacity>
      );
    }
    if (this.state.isLoading) {
      return <ActivityIndicator color={colors.primaryRed} />;
    }
    return null;
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>{__('ACC_SUMMARY')}</Text>
        <FlatList
          style={style.scrollview}
          contentContainerStyle={style.contentStyle}
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          extraData={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          initialNumToRender={10}
          maxToRenderPerBatch={6}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}
