import {PermissionsAndroid, Platform, Alert} from 'react-native';
import apis from 'services/apis';
import * as types from '../reduxType';

class Instance {
  accessToken = '';
  user = {};
  setUser = data => async dispatch => {
    const test = await apis.create().User.getUserById();
    dispatch({
      type: types.SET_USER,
      data: {
        ...data,
        text: test,
      },
    });
  };

  getPositionUser = (
    isShowError = false,
    callback: (location: {
      longitude: number,
      latitude: number,
    }) => void = () => {},
  ) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        const tmp = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        this.location = tmp;
        callback(tmp);
      },
      errRequest => {
        try {
          if (Platform.OS === 'android' && Platform.Version >= 23) {
            PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            ).then(result => {
              if (!result) {
                PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                ).then(
                  result1 => {
                    if (result1) {
                      this.getPositionUser();
                    } else {
                      if (isShowError) {
                        Alert.alert(
                          'Thông báo',
                          'Bạn cần cấp quyền truy cập vị trí để sử dụng chức năng này',
                        );
                      }
                    }
                  },
                  err => {
                    console.log(err);
                    if (isShowError && err) {
                      Alert.alert(
                        'Thông báo',
                        'Bạn cần cấp quyền truy cập vị trí để sử dụng chức năng này',
                      );
                    }
                  },
                );
              }
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      {
        enableHighAccuracy: Platform.OS !== 'android',
        timeout: 5000,
        maximumAge: 0,
      },
    );
  };
}

class UserModel {
  instance: Instance;
  static getInstance(): Instance {
    if (!this.instance) {
      this.instance = new Instance();
    }
    return this.instance;
  }
}

export default UserModel.getInstance();
