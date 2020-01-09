import {ToastAndroid} from 'react-native';

export default class RootAction {
  constructor(content) {
    this.content = content;
  }
  showLoading = () => {
    this.content.setState({isLoading: true});
  };
  hideLoading = () => {
    this.content.setState({isLoading: false});
  };
  showMessage = (message = 'Đã có lỗi xảy ra') => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      100,
    );
  };
  showNotification = content => {
    this.content.setState(
      {
        notification: content,
        isShowNotification: true,
      },
      () => {
        setTimeout(this.content.hideNotification, 3000);
      },
    );
  };
  hideNotification = () => {
    this.content.setState({
      notification: null,
      isShowNotification: false,
    });
  };

  showDialog = (dialog: {
    type?: 'alert' | 'warning' | 'confirm',
    okText?: String,
    cancelText?: String,
    title?: String,
    body: String,
    callback?: (isCancel: boolean) => void,
  }) => {
    const tmp = {...dialog};
    if (!dialog.type) {
      tmp.type = 'alert';
    }
    if (!dialog.callback) {
      tmp.callback = () => {};
    }
    this.content.setState({isShowDialog: true, dialog: tmp});
  };
  hideDialog = () => {
    this.content.setState({isShowDialog: false, dialog: null});
  };
}
