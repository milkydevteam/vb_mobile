import {createStackNavigator} from 'react-navigation-stack';
import SettingScreen from 'containers/Setting';

const AuthStack = createStackNavigator(
  {
    SettingScreen,
  },
  {
    initialRouteKey: 'SettingScreen',
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
