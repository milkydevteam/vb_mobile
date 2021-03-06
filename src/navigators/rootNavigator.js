import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import NotAuthStack from './notAuthStack';
import AuthStack from './authStack';
import LanguageScreen from 'containers/Setting/languages';

const AppContainer = createSwitchNavigator(
  {
    NotAuthStack,
    AuthStack,
    LanguageScreen,
  },
  {
    initialRouteName: 'NotAuthStack',
  },
);

export default createAppContainer(AppContainer);
