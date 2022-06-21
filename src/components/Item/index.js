import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Item({ name, value }) {
  return (
    <View style={styles.item}>
        <Text style={styles.itemTitle}>{name}</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{value}</Text>
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    currencySymbol: {
        color: '#dadada',
        marginRight: 6,

    },
    balance: {
        fontSize: 22,
        
    }, 

})