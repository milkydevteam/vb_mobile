import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from 'containers/Home';
import NewsDetail from 'containers/Home/newsDetail';
import BranchMaps from 'containers/BranchMaps';
import {widthScreen} from 'utilities/Tranform';

const HomeStack = createDrawerNavigator(
  {
    HomeScreen,
    BranchMaps,
  },
  {
    drawerType: 'slide',
    drawerWidth: widthScreen / 2,
    statusBarAnimation: 'fade',
  },
);

export default HomeStack;
