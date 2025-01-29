import React, {FC} from "react";
import {View, StyleSheet, Text} from 'react-native'
import CurrentMenuItem from "../../../features/CurrentMenuItem/ui/CurrentMenuItem";


const CurrentMenuItemScreen: FC = () => {

    return (
        <View style={styles.container}>
            <CurrentMenuItem/>
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
export default CurrentMenuItemScreen
