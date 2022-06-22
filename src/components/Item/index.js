import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Item({ name, value }) {
    const itemFontColor = () => {
        if (name == 'Saldo') {
            return '#2ecc71'
        }
        if (name == 'Gastos') {
            return '#e74c3c'
        }
        else {
            return 'black'
        }
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
            fontWeight: 'bold',
            color: itemFontColor()
        }, 
    
    })


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

