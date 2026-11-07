
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function DayEndScreen({
  dia,
  onContinue,
}) {
  const ultimoDia = dia === 3;

  return (
    <View style={styles.container}>
      <Text style={styles.day}>
        {ultimoDia ? 'FIM DA DEMONSTRAÇÃO' : `FIM DO DIA ${dia}`}
      </Text>

      <View style={styles.content}>
        <Text style={styles.title}>
          {ultimoDia
            ? 'Algo ainda não terminou...'
            : 'A preparação continua...'}
        </Text>

        <Text style={styles.description}>
          {ultimoDia
            ? `Os três dias de preparação chegaram ao fim.

Você encontrou lembranças, mensagens e fragmentos de uma história que parece mais próxima do que imaginava.

Mas ainda existem perguntas sem resposta.

Quem está contando essa história?`
            : `O dia ${dia} chega ao fim.

Ainda há muito a fazer antes do desfile.

Amanhã será uma nova oportunidade para organizar os últimos detalhes.`}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={onContinue}
      >
        <Text style={styles.buttonText}>
          {ultimoDia ? 'VOLTAR AO MENU' : 'CONTINUAR'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D12',
    padding: 25,
    justifyContent: 'space-between',
    paddingTop: 90,
    paddingBottom: 40,
  },

  day: {
    color: '#A66A88',
    fontSize: 12,
    letterSpacing: 4,
    textAlign: 'center',
  },

  content: {
    paddingHorizontal: 10,
  },

  title: {
    color: '#D99AB8',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
  },

  description: {
    color: '#C7B8C4',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#702F4C',
    padding: 17,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    letterSpacing: 3,
  },
});
