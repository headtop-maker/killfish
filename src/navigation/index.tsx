import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CityBarsScreen from "../Screens/CityBars/ui/CityBarsScreen";


const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: CityBarsScreen,
      options: {
        title: 'CityBarsScreen',
        headerShown: true,
        headerTitle:'Города'
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
