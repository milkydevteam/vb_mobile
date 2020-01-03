import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from 'containers/Home';
import NewsDetail from 'containers/Home/newsDetail';
import BranchMaps from 'containers/BranchMaps';

const HomeStack = createStackNavigator(
  {
    BranchMaps,
    HomeScreen,
    NewsDetail,
  },
  {
    initialRouteKey: 'BranchMaps',
    headerMode: 'none',
    mode: 'card',
  },
);

export default HomeStack;
