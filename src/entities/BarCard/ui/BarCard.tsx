import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TBars} from "../../../shared/models/types";

interface BarCardProps {
    bar: TBars;
    onSelect: (barId: number) => void;
}

const BarCard: FC<BarCardProps> = ({bar, onSelect}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onSelect(bar.bar_id)}>
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{bar.title}</Text>
                    <Text style={styles.address}>{bar.address}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.hoursText}>Часы работы: {bar.start_hour_hd} - {bar.end_hour_hd}</Text>
                    <Text style={[styles.alcoText, bar.is_alco ? styles.alcoAvailable : styles.noAlco]}>
                        {bar.is_alco ? 'Алкаголь доступен' : 'Без алкаголя'}
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.callButton}
                        onPress={() => bar.phone && console.log(`${bar.phone}`)}
                    >
                        <Text style={styles.callButtonText}>Позвонить: {bar.phone}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        backgroundColor: '#ffffff',
        padding: 16,
        margin: 8,
    },
    headerContainer: {
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    address: {
        fontSize: 14,
        color: '#666',
    },
    infoContainer: {
        marginTop: 8,
    },
    hoursText: {
        fontSize: 14,
        color: '#555',
    },
    versionText: {
        fontSize: 14,
        color: '#555',
    },
    alcoText: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 4,
    },
    alcoAvailable: {
        color: '#28a745',
    },
    noAlco: {
        color: '#dc3545',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    callButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    callButtonText: {
        color: '#ffffff',
        fontWeight: '500',
        marginLeft: 8,
    },
});

export default BarCard;
