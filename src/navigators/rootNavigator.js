import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import AuthStack from './authStack';

const AppContainer = createSwitchNavigator(
  {
    AuthStack,
    HomeStack,
  },
  {
    initialRouteName: 'HomeStack',
  },
);

export default createAppContainer(AppContainer);
