import {Dimensions, View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {TStructureItem} from "../../../shared/models/types";
import {FC} from "react";

interface MenuCategoryCardProp {
    category: TStructureItem
    onSelect: (barId: number) => void;
}

const MenuCategoryCard: FC<MenuCategoryCardProp> = ({category, onSelect}) => {
    const {title, image, id} = category
    return (
        <TouchableOpacity style={styles.card} onPress={() => onSelect(id)}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        marginRight: 10
    },
    image: {
        width: '100%',
        height: 200,
    },
    infoContainer: {
        padding: 16,
    },
    smallTitle: {
        fontSize: 14,
        color: '#888',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4,
    },
})
export default MenuCategoryCard
