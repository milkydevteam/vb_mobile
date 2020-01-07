import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from 'containers/Home';
import BranchMaps from 'containers/BranchMaps';
import {widthScreen} from 'utilities/Tranform';

const HomeStack = createDrawerNavigator(
  {
    HomeScreen,
    BranchMaps,
  },
  {
    drawerType: 'front',
    drawerWidth: widthScreen * 0.7,
    statusBarAnimation: 'fade',
    keyboardDismissMode: 'on-drag',
  },
);

export default HomeStack;
