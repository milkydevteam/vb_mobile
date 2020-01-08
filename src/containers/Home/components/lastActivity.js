import React, {PureComponent} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import style from './style/lastActivity.style';
import ActivityItem from './activityItem';
import {randomActivity} from '../randomData';
import colors from 'themes/Colors';
import {__} from 'locales';

type Props = {};

export default class LastActiveList extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await this.setState({isLoading: true});
    setTimeout(() => {
      const data = randomActivity();
      this.setState({data: [...this.state.data, ...data], isLoading: false});
    }, 1000);
  };
  handleLoadMore = async () => {
    if (this.state.isLoading) {
      return;
    }
    this.getData();
  };
  renderItem = ({item, index}) => (
    <ActivityItem item={item} key={index.toString()} />
  );
  renderFooter = () => {
    if (this.state.isLoading) {
      return (
        <View style={style.scrollFooter}>
          <ActivityIndicator color={colors.primaryRed} />
        </View>
      );
    }
    return null;
  };
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>{__('LAST_ACTIVITY')}</Text>
        <FlatList
          data={this.state.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          style={style.scrollview}
          contentContainerStyle={style.contentStyle}
          renderItem={this.renderItem}
          initialNumToRender={10}
          maxToRenderPerBatch={6}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}
