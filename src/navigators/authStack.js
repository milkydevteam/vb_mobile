import {createStackNavigator} from 'react-navigation-stack';
import DrawerApp from './drawerApp';
import Notification from 'containers/Notification';

const AuthStack = createStackNavigator(
  {
    DrawerApp,
    Notification,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
