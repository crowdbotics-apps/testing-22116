import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen59165063Navigator from '../features/BlankScreen59165063/navigator';
import BlankScreen60165062Navigator from '../features/BlankScreen60165062/navigator';
import BlankScreen61165061Navigator from '../features/BlankScreen61165061/navigator';
import BlankScreen62165060Navigator from '../features/BlankScreen62165060/navigator';
import BlankScreen86165040Navigator from '../features/BlankScreen86165040/navigator';
import BlankScreen87165039Navigator from '../features/BlankScreen87165039/navigator';
import CopyOfBlankScreen60165038Navigator from '../features/CopyOfBlankScreen60165038/navigator';
import BlankScreen42165035Navigator from '../features/BlankScreen42165035/navigator';
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
BlankScreen59165063: { screen: BlankScreen59165063Navigator },
BlankScreen60165062: { screen: BlankScreen60165062Navigator },
BlankScreen61165061: { screen: BlankScreen61165061Navigator },
BlankScreen62165060: { screen: BlankScreen62165060Navigator },
BlankScreen86165040: { screen: BlankScreen86165040Navigator },
BlankScreen87165039: { screen: BlankScreen87165039Navigator },
CopyOfBlankScreen60165038: { screen: CopyOfBlankScreen60165038Navigator },
BlankScreen42165035: { screen: BlankScreen42165035Navigator },
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
