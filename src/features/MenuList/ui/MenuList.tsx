import {ActivityIndicator, FlatList, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../shared/models/storeHooks";
import {selectBarId, selectCityId} from "../models/selectors";
import {useGetMenuQuery} from "../../../shared/models/cityBarsApi";
import {structureToArray} from "../lib/structureToArray";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {TStructureItem} from "../../../shared/models/types";

import MenuCategoryCard from "../../../entities/MenuCategoryCard/ui/MenuCategoryCard";
import {setParentId} from "../../../shared/models/cityBarsSlice";
import {useNavigation} from "@react-navigation/native";
import VerticalCardItem from "../../../entities/MenuCategoryCard/ui/VerticalCardItem";

const MenuList = () => {
    const [childsCat, setCildsCat] = useState<TStructureItem[]>([])
    const barId = useAppSelector(selectBarId)
    const cityId = useAppSelector(selectCityId)
    const dispatch = useAppDispatch()
    const navigation = useNavigation();


    if (barId === undefined || cityId === undefined) {
        return null
    }
    const {data, isLoading} = useGetMenuQuery({barId, cityId})


    useLayoutEffect(() => {
        const initialChildren = !!data && structureToArray(data.structure)[0]
        const initialCards = !!initialChildren && initialChildren.childs.map(item => data.structure[item])
        if (!!initialCards && initialCards.length > 0) {
            setCildsCat(initialCards)
        }
    }, [data])


    if (data === undefined) {
        return null
    }

    const handleCitySelect = (id: number) => {
        const getChildren = data.structure[id].childs
        const childCat = getChildren.map(item => data.structure[item])
        setCildsCat(childCat)
    };

    const handleChildSelect = (parentId: number) => {
        dispatch(setParentId(parentId))
        navigation.navigate('CurrentMenuItem')
    };


    const renderItem = ({item}: { item: TStructureItem }) => {
        return <MenuCategoryCard category={item} onSelect={handleCitySelect}/>;
    };

    const renderVerticalItem = ({item}: { item: TStructureItem }) => {
        return <VerticalCardItem category={item} onSelect={handleChildSelect}/>;
    };

    return (
        <View style={{alignItems: 'center'}}>
            {isLoading && <ActivityIndicator size={"large"}/>}
            <FlatList
                horizontal={true}
                data={structureToArray(data.structure)}
                keyExtractor={(item) => 'CatList' + item.id}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: 10}}
            />


            <FlatList
                data={childsCat}
                keyExtractor={(item) => 'ChildList' + item.id}
                renderItem={renderVerticalItem}
                showsHorizontalScrollIndicator={false}
            />


        </View>)
}

export default MenuList
