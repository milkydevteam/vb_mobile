import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import style from './style/RootContainerStyle';
import colors from 'themes/Colors';

export default class RenderRootView {
  constructor(content) {
    this.content = content;
  }
  renderDialog = () => {
    const {isShowDialog, dialog} = this.content.state;
    if (!isShowDialog) {
      return null;
    }
    let title = 'Thông báo';
    let color = 'black';
    if (dialog.type === 'warning') {
      title = 'Lưu ý';
      color = colors.secondRed;
    }
    if (dialog.type === 'confirm') {
      title = 'Xác nhận';
      color = colors.greenText;
    }
    if (dialog.title) {
      title = dialog.title;
    }
    const onCallback = (isCancel = false) => {
      global.root.hideDialog();
      dialog.callback(isCancel);
    };
    return (
      <View style={[style.background, {backgroundColor: 'rgba(0,0,0,0.35)'}]}>
        <View style={style.dialogContainer}>
          <View style={style.dialogTitle}>
            <Text style={{color, fontWeight: 'bold'}}>
              {title.toLocaleUpperCase()}
            </Text>
          </View>
          <View style={{padding: 12, width: '100%', minHeight: 100}}>
            <Text>{dialog.body}</Text>
          </View>
          <View style={style.dialogFooter}>
            <TouchableOpacity
              style={style.dialogBtn}
              onPress={() => onCallback()}>
              <Text style={{color: colors.greenText, fontSize: 15}}>
                {dialog.okText || 'Đồng ý'}
              </Text>
            </TouchableOpacity>
            {dialog.type === 'confirm' && (
              <TouchableOpacity
                style={{
                  ...style.dialogBtn,
                  borderLeftColor: 'rgba(0,0,0,0.5)',
                  borderLeftWidth: 0.5,
                }}
                onPress={() => onCallback(true)}>
                <Text>{dialog.cancelText || 'Hủy'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };
  renderLoading = () => {
    if (this.content.state.isLoading) {
      return (
        <View style={style.background}>
          <ActivityIndicator color={colors.greenText} size="small" />
        </View>
      );
    }
    return null;
  };
  renderNotification = () => {
    if (this.content.state.isShowNotification) {
      const notify = this.content.state.notification;
      return (
        <View style={style.notificationContainer}>
          <TouchableOpacity
            style={style.notificationitem}
            onPress={() => {
              if (notify.navigate) {
                global.root.navigate(
                  notify.navigate.path,
                  notify.navigate.params,
                );
              } else {
                global.root.navigate('Notification');
              }
              global.root.hideNotification();
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              {notify.title}
            </Text>
            <Text style={{fontSize: 13, fontStyle: 'italic'}} numberOfLines={2}>
              {notify.body}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };
}
