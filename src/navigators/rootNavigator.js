import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeStack from './drawerApp';
import AuthStack from './authStack';

const AppContainer = createSwitchNavigator(
  {
    AuthStack,
    HomeStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(AppContainer);
