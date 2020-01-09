import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from 'containers/Home';
import AccountDetail from 'containers/Home/accountDetail';
import BeneficiaryList from 'containers/Methods/beneficiaryList';
import ExchangeRate from 'containers/Methods/exchangeRate';
import InhouseTransfer from 'containers/Methods/inhouseTransfer';
import PendingTask from 'containers/Methods/pendingTask';

const AuthStack = createStackNavigator(
  {
    HomeScreen,
    BeneficiaryList,
    ExchangeRate,
    InhouseTransfer,
    PendingTask,
    AccountDetail,
  },
  {
    initialRouteKey: 'HomeScreen',
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
