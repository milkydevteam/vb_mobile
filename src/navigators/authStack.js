import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from 'containers/Auth/login';
import RegisterScreen from 'containers/Auth/register';
import SplashScreen from 'containers/Auth/splashScreen';

const AuthStack = createStackNavigator(
  {
    SplashScreen,
    LoginScreen,
    RegisterScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
