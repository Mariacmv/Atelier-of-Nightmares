
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const anotacoes = {
  1: {
    titulo: 'Primeiras impressões',
    data: 'DIA 01',
    texto:
      'Faz tempo que não tenho uma oportunidade assim.\n\n' +
      'Passei a manhã pensando nas roupas que gostaria de usar. ' +
      'Ainda tenho alguns desenhos antigos guardados. Talvez eu devesse procurá-los.',
  },
  2: {
    titulo: 'Uma dúvida',
    data: 'DIA 02',
    texto:
      'A agência disse que preciso ser mais cuidadosa com minhas escolhas.\n\n' +
      'Será que estou tentando agradar tanto os outros que já não sei mais o que gosto de vestir?',
  },
  3: {
    titulo: 'Antes do desfile',
    data: 'DIA 03',
    texto:
      'Amanhã tudo estará decidido.\n\n' +
      'Encontrei alguns dos meus desenhos antigos. É estranho olhar para eles e perceber como eu tinha tantas ideias. Será que ainda consigo reconhecer o que é meu?',
  },
};

export default function NotesScreen({ onBack, dia = 1 }) {
  const nota = anotacoes[dia] || anotacoes[1];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MINHAS ANOTAÇÕES</Text>

      <View style={styles.note}>
        <Text style={styles.date}>{nota.data}</Text>
        <Text style={styles.title}>{nota.titulo}</Text>
        <Text style={styles.content}>{nota.texto}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    color: '#d8c8b8',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 28,
    letterSpacing: 2,
  },
  note: {
    backgroundColor: '#e8dfd0',
    padding: 24,
    minHeight: 300,
  },
  date: {
    color: '#777064',
    fontSize: 12,
    marginBottom: 18,
  },
  title: {
    color: '#302b27',
    fontSize: 22,
    marginBottom: 24,
  },
  content: {
    color: '#39332e',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    marginTop: 28,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d8c8b8',
  },
  buttonText: {
    color: '#d8c8b8',
    textAlign: 'center',
    letterSpacing: 2,
  },
});
