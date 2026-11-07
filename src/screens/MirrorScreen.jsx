
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

const estados = {
  normal: {
    titulo: 'Seu reflexo',
    descricao: 'Você observa sua aparência. Tudo parece normal.',
  },
  alterado: {
    titulo: 'Algo está diferente',
    descricao: 'Seu rosto parece mais cansado. Talvez seja apenas o desgaste da preparação.',
  },
  deteriorado: {
    titulo: 'Você mal se reconhece',
    descricao: 'Seu reflexo parece abatido. Há algo profundamente errado.',
  },
};

export default function MirrorScreen({
  onBack,
  estadoReflexo = 'normal',
  roupaSelecionada,
}) {
  const estado = estados[estadoReflexo] || estados.normal;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DIA 01</Text>
        <Text style={styles.headerText}>ESPELHO</Text>
      </View>

      <View style={styles.mirrorFrame}>
        <View style={styles.reflection}>
          <View style={styles.facePlaceholder}>
            <Text style={styles.placeholderText}>
              REFLEXO DA PERSONAGEM
            </Text>
            <Text style={styles.placeholderText}>
            {roupaSelecionada
                ? roupaSelecionada.nome
                : 'Você ainda não escolheu seu visual.'}
            </Text>
            <Text style={styles.placeholderHint}>
              Ilustração será adicionada posteriormente
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.descriptionArea}>
        <Text style={styles.title}>{estado.titulo}</Text>
        <Text style={styles.description}>
          {estado.descricao}
        </Text>
      </View>

      <Pressable style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>VOLTAR AO ATELIÊ</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D12',
    padding: 22,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  headerText: {
    color: '#A66A88',
    fontSize: 11,
    letterSpacing: 3,
  },
  mirrorFrame: {
    flex: 1,
    backgroundColor: '#302634',
    borderWidth: 5,
    borderColor: '#806276',
    borderRadius: 150,
    padding: 12,
    maxHeight: 440,
  },
  reflection: {
    flex: 1,
    backgroundColor: '#211923',
    borderRadius: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facePlaceholder: {
    width: '75%',
    height: '75%',
    backgroundColor: '#382B3A',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  placeholderText: {
    color: '#D8C3D2',
    fontSize: 12,
    letterSpacing: 2,
    textAlign: 'center',
  },
  placeholderHint: {
    color: '#A99AA8',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 12,
  },
  descriptionArea: {
    paddingVertical: 25,
  },
  title: {
    color: '#D99AB8',
    fontSize: 19,
    marginBottom: 10,
  },
  description: {
    color: '#C7B8C4',
    fontSize: 14,
    lineHeight: 23,
  },
  button: {
    backgroundColor: '#702F4C',
    padding: 16,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    letterSpacing: 2,
  },
});
