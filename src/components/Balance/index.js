import { 
    View,
    Text,
    StyleSheet
} from 'react-native'
import React from 'react'
import Item from '../Item';

export default function Balance({ saldo, gastos}) {
  return (
    <View style={styles.container}>
        <Item name='Saldo' value={saldo}/>
        <Item name='Gastos' value={gastos}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    }
})