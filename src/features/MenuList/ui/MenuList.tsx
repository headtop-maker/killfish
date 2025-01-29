import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../shared/models/storeHooks";
import {selectBarId, selectCityId} from "../models/selectors";
import {useGetMenuQuery} from "../../../shared/models/cityBarsApi";
import {structureToArray} from "../lib/structureToArray";
import React from "react";
import {TStructureItem} from "../../../shared/models/types";

import MenuCategoryCard from "../../../entities/MenuCategoryCard/ui/MenuCategoryCard";
import {setParentId} from "../../../shared/models/cityBarsSlice";
import {useNavigation} from "@react-navigation/native";

const MenuList = () => {
    const barId = useAppSelector(selectBarId)
    const cityId = useAppSelector(selectCityId)
    const dispatch = useAppDispatch()
    const navigation = useNavigation();
    if (barId === undefined || cityId === undefined) {
        return null
    }
    const {data, isLoading} = useGetMenuQuery({barId, cityId})
    if (data === undefined) {
        return null
    }


    const rootCategories = structureToArray(data.structure)
    const handleCitySelect = (parentId: number) => {
        dispatch(setParentId(parentId))
        navigation.navigate('CurrentMenuItem')
    };

    const renderItem = ({item}: { item: TStructureItem }) => {
        return <MenuCategoryCard category={item} onSelect={handleCitySelect}/>;
    };

    return (
        <View style={{alignItems: 'center'}}>
            {isLoading && <ActivityIndicator size={"large"}/>}
            <FlatList
                data={rootCategories}
                keyExtractor={(item) => 'CatList' + item.id}
                renderItem={renderItem}
            />
        </View>)
}

export default MenuList
