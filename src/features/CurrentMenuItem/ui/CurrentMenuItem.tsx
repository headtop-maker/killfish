import React, {FC} from "react";
import {View, StyleSheet, Text} from 'react-native'
import {useAppDispatch, useAppSelector} from "../../../shared/models/storeHooks";
import {selectBarId, selectCityId, selectParentId} from "../../MenuList/models/selectors";
import {useNavigation} from "@react-navigation/native";
import {useGetCurrentMenuItemQuery, useGetMenuQuery} from "../../../shared/models/cityBarsApi";


const CurrentMenuItem: FC = () => {
    const barId = useAppSelector(selectBarId)
    const cityId = useAppSelector(selectCityId)
    const parentId = useAppSelector(selectParentId)


    if (!barId || !cityId || !parentId) {
        return null
    }

    const {data, isLoading} = useGetCurrentMenuItemQuery({barId, cityId, parentId})
    if (!data) {
        return null
    }


    return (
        <View>
            <Text> Описание категории </Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default CurrentMenuItem
