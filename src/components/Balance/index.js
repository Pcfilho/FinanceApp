import { 
    View,
    Text,
    StyleSheet
} from 'react-native'
import React from 'react'
import Item from '../Item';
import { MotiView,  } from 'moti';

export default function Balance({ saldo, gastos}) {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: '0',
      }}
      animate={{
        rotateX: '0deg',
        opacity: '1',
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900
      }}
    >
        <Item name='Saldo' value={saldo}/>
        <Item name='Gastos' value={gastos}/>
    </MotiView>
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