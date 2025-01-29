import React, {FC} from "react";
import {Text, View,StyleSheet} from 'react-native'

const CityBarsScreen:FC=()=>{
    return (
        <View style={styles.container}>
            <Text>CityBarsScreen</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default CityBarsScreen
