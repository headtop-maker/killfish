import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import CityCard from "../../../entities/CityCard/ui/CityCard";
import {TCities} from "../../../shared/models/types";
import {useAppDispatch} from "../../../shared/models/storeHooks";
import {setCityId, setSelectedBars} from "../../../shared/models/cityBarsSlice";
import {useNavigation} from "@react-navigation/native";

interface ICityListProps {
    cities: TCities
}

const CityList: FC<ICityListProps> = ({cities}) => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch()

    const handleCitySelect = (cityId: number) => {
        const currentBars = cities.find((item) => item.city_id === cityId)?.bars

        if (!!currentBars) {
            dispatch(setCityId(cityId))
            dispatch(setSelectedBars(currentBars))
            navigation.navigate('Bars')
        }
    };

    const renderItem = ({item}: { item: TCities[0] }) => {
        return <CityCard city={item} onSelect={handleCitySelect}/>;
    };

    return (
        <View
            style={{maxHeight: 300}}>
            <FlatList
                data={cities}
                keyExtractor={(item) => 'CityBars' + item.city_id}
                renderItem={renderItem}
            />
        </View>
    );
};


export default CityList;
