import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeStack from './homeStack';
import SettingStack from './settingStack';
import BranchMaps from 'containers/BranchMaps';
import {widthScreen} from 'utilities/Tranform';

const DrawerApp = createDrawerNavigator(
  {
    HomeStack,
    BranchMaps,
    SettingStack,
  },
  {
    drawerType: 'front',
    drawerWidth: widthScreen * 0.7,
    statusBarAnimation: 'fade',
    keyboardDismissMode: 'on-drag',
  },
);

export default DrawerApp;
