import {FlatList, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../shared/models/storeHooks";
import {selectBars} from "../models/selectors";
import React from "react";
import {TBars} from "../../../shared/models/types";

import BarCard from "../../../entities/BarCard/ui/BarCard";
import {setBarId} from "../../../shared/models/cityBarsSlice";

const BarsList = () => {
    const selected = useAppSelector(selectBars)
    const dispatch = useAppDispatch()
    const handleBarSelect = (barId: number) => {
        dispatch(setBarId(barId))
    };

    const renderItem = ({item}: { item: TBars }) => {
        return <BarCard bar={item} onSelect={handleBarSelect}/>;
    };

    return (

        <View>
            <FlatList
                data={selected}
                keyExtractor={(item) => 'SelectedBars' + item.bar_id}
                renderItem={renderItem}
            />
        </View>

    )
}

export default BarsList
