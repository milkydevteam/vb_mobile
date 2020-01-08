import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text, FlatList, Alert} from 'react-native';
import {langService, __} from 'constants/locales';
import colors from 'themes/Colors';
import style from './style/lang.style';
import AppContainer from 'components/appContainer';

class LanguagesScreen extends PureComponent {
  state = {};
  componentDidMount() {
    this.initData();
  }
  initData = () => {
    const lang = langService.getCurrentLocale();
    const locales = langService.getLocales();
    this.setState({lang, locales});
  };
  keyExtractor = item => item.name;
  onSelect = async item => {
    langService.setLocale(item.name);
    this.initData();
    Alert.alert(
      'Thông báo',
      'Bạn cần khởi động lại ứng dụng để thay đổi ngôn ngữ',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            this.props.navigation.navigate('SplashScreen');
          },
        },
      ],
    );
  };
  renderItem = ({item, index}) => {
    const {lang} = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.onSelect(item)}
        key={item.name}
        style={{
          padding: 10,
          borderBottomColor: colors.grey,
          borderBottomWidth: 0.5,
        }}>
        <View style={style.justifyContent}>
          <Text>{item.title}</Text>
          {lang === item.name && <Text>{__('SELECTED')}</Text>}
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {locales} = this.state;
    return (
      <AppContainer>
        <FlatList
          data={locales}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </AppContainer>
    );
  }
}

export default LanguagesScreen;
