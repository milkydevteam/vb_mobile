import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from 'containers/Auth/login';
import RegisterInfo from 'containers/Auth/register';
import SplashScreen from 'containers/Auth/splashScreen';
import WelcomeScreen from 'containers/Auth/welcome';
import RegisterPhone from 'containers/Auth/registerPhone';
import VerifyOTP from 'containers/Auth/verifyOtp';

const AuthStack = createStackNavigator(
  {
    WelcomeScreen,
    SplashScreen,
    LoginScreen,
    RegisterInfo,
    RegisterPhone,
    VerifyOTP,
  },
  {
    initialRouteKey: 'SplashScreen',
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
