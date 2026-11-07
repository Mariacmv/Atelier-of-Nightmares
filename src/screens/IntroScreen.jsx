import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function IntroScreen({ onStart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>DIA 01 — O CONVITE</Text>

      <Text style={styles.title}>Uma nova oportunidade</Text>

      <Text style={styles.description}>
        Depois de tantos meses de preparação, finalmente chegou
        a oportunidade que você estava esperando.

        {'\n\n'}

        Um desfile importante. Uma agência renomada.
        E três dias para provar que você merece estar ali.
      </Text>

      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D12',
    justifyContent: 'center',
    padding: 30,
  },
  day: {
    color: '#A66A88',
    fontSize: 12,
    letterSpacing: 3,
    marginBottom: 25,
  },
  title: {
    color: '#E8DDE5',
    fontSize: 29,
    marginBottom: 25,
  },
  description: {
    color: '#C7B8C4',
    fontSize: 16,
    lineHeight: 27,
  },
  button: {
    backgroundColor: '#702F4C',
    padding: 16,
    alignItems: 'center',
    marginTop: 55,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    letterSpacing: 3,
  },
});