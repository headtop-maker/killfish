import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TCities} from "../../../shared/models/types";

type CityCardProps = {
    city: TCities[0];
    onSelect: (cityId: number) => void;
};

const CityCard: FC<CityCardProps> = ({city, onSelect}) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onSelect(city.city_id)}
        >
            <Text style={styles.title}>{city.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        width: 250
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
});

export default CityCard;
