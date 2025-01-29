import React, {FC} from "react";
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {useGetCityBarsQuery} from "../../../shared/models/cityBarsApi";
import CityList from "../../../features/CityList/ui/CityList";

const CityBarsScreen: FC = () => {
    const {data, isLoading} = useGetCityBarsQuery()
    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator size={'large'}/>}
            {!!data?.cities && <CityList cities={data.cities}/>}
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
export default CityBarsScreen
