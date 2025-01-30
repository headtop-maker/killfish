import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {IProduct} from "../../../shared/models/types";


type ProductCardProps = {
    item: IProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({item}) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.descr}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>Цена: {item.prices.full / 100}₽</Text>
                    <Text style={styles.discountPrice}>
                        По карте: {item.prices.card / 100}₽
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    description: {
        fontSize: 12,
        color: '#666',
        marginVertical: 4,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 14,
        color: '#ff6347',
    },
    discountPrice: {
        fontSize: 14,
        color: '#008000',
    },
});

export default ProductCard;
