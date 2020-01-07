import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style/homeInfo.style';
import UserAvatar from 'components/userAvatar';

type Props = {};

export default class HomeInfo extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <UserAvatar url="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/p960x960/76751481_2585736798200024_6249272050989400064_o.jpg?_nc_cat=107&_nc_oc=AQkl7ovcncVnYezKXwVWQUvkqDWRcskpTtdla0bIt3e7luZwFyCKyJXuqJHS1Ch8NRA&_nc_ht=scontent.fhan2-3.fna&oh=bf08740868ade8e4236e15da76932912&oe=5EADFC86" />
        <View style={style.middleView}>
          <Text style={[style.textColor, style.name]}>Hello UserName !</Text>
          <Text style={style.textColor}>CorparateName</Text>
          <Text style={style.textColor}>Last login: 07 01 2020</Text>
        </View>
        <View style={style.endView}>
          <TouchableOpacity style={style.btn}>
            <Text style={style.textColor}>EN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
