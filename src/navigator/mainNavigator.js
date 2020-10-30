import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen43165034Navigator from '../features/BlankScreen43165034/navigator';
import Settings165013Navigator from '../features/Settings165013/navigator';
import UserProfile165006Navigator from '../features/UserProfile165006/navigator';
import Settings165005Navigator from '../features/Settings165005/navigator';
import Settings165003Navigator from '../features/Settings165003/navigator';
import SignIn2165001Navigator from '../features/SignIn2165001/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen43165034: { screen: BlankScreen43165034Navigator },
Settings165013: { screen: Settings165013Navigator },
UserProfile165006: { screen: UserProfile165006Navigator },
Settings165005: { screen: Settings165005Navigator },
Settings165003: { screen: Settings165003Navigator },
SignIn2165001: { screen: SignIn2165001Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
