import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from 'react-native'
import React from 'react'

export default function Movements({ data }) {
    return (
        <TouchableOpacity style={styles.container}>
            
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                <Text style={styles.value}>{data.value}</Text>
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }

});