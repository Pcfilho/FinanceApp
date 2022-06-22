import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '13/09/2021',
    type: 0 // Despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '24/09/2022',
    type: 1 // Receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '28/10/2022',
    type: 1 // Receita
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Paulo César'/>
      
      <Balance saldo='9.250.90' gastos='-527,00'/>

      <Actions></Actions>
      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginTop: 14,
    marginStart: 14,
    marginEnd: 14
  },

});
