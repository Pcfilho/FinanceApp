import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Paulo César'/>
      <Text>Pagina Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
