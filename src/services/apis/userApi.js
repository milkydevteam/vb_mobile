import {NavigationActions} from 'react-navigation';
import {request} from './base';
import UserModel from 'reduxes/actions/user';

const UserAPI = () => {
  const signOut = () => {
    request('POST', '/authen/logout', {member_id: UserModel.user.userId});
    const resetAction = NavigationActions.navigate({
      routeName: 'Auth',
      action: NavigationActions.navigate({routeName: 'Login'}),
    });
    global.navigation.dispatch(resetAction);
  };

  const getUserById = userId =>
    request('GET', 'https://dev-api-ct.vbee.vn/api/v1/nerres/test');

  return {getUserById, signOut};
};
export default UserAPI;
