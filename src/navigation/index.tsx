import {
    createStaticNavigation,
    StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CityBarsScreen from "../screens/CityBars/ui/CityBarsScreen";
import SelectedBarsScreen from "../screens/CityBars/ui/SelectedBarsScreen";


const RootStack = createNativeStackNavigator({
    screens: {
        Cities: {
            screen: CityBarsScreen,
            options: {
                title: 'CityBarsScreen',
                headerShown: true,
                headerTitle: 'Список городов'
            },
        },
        Bars: {
            screen: SelectedBarsScreen,
            options: {
                title: 'SelectedBarsScreen',
                headerShown: true,
                headerTitle: 'Бары в городе'
            },
        },
    },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}
