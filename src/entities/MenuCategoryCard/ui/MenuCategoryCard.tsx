import {Dimensions, View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {TStructureItem} from "../../../shared/models/types";
import {FC} from "react";

interface MenuCategoryCardProp {
    category: TStructureItem
    onSelect: (barId: number) => void;
}

const MenuCategoryCard: FC<MenuCategoryCardProp> = ({category, onSelect}) => {
    const {title, image, parent_id} = category
    return (
        <TouchableOpacity style={styles.card} onPress={() => onSelect(parent_id)}>
            <Image
                source={{uri: image}}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
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
