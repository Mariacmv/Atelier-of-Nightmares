
import { useState } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';


const objetosPorDia = {
  1: [
    {
      id: 1,
      nome: 'Desenhos antigos',
      icone: '✎',
      descricao:
        'Há vários desenhos de roupas espalhados pela mesa. Alguns parecem antigos, mas foram feitos com muito cuidado. No canto de uma folha, há uma pequena assinatura.',
    },
    {
      id: 2,
      nome: 'Fotografias',
      icone: '▧',
      descricao:
        'Uma fotografia mostra o ateliê em outra época. O ambiente parece mais colorido e organizado. Há alguém ao fundo, mas a imagem está pouco nítida.',
    },
    {
      id: 3,
      nome: 'Documentos',
      icone: '▤',
      descricao:
        'Entre os papéis, você encontra uma lista de preparativos para o desfile. Nada parece fora do comum.',
    },
  ],

  2: [
    {
      id: 1,
      nome: 'Desenhos antigos',
      icone: '✎',
      descricao:
        'Você encontra outros desenhos. Alguns apresentam modelos de roupas muito diferentes daqueles que a agência costuma sugerir.',
    },
    {
      id: 2,
      nome: 'Fotografias',
      icone: '▧',
      descricao:
        'A fotografia chama sua atenção novamente. No verso, há uma anotação escrita à mão: "Não esqueça o que você queria criar."',
    },
    {
      id: 3,
      nome: 'Documentos',
      icone: '▤',
      descricao:
        'Entre os documentos, há uma folha com anotações sobre uma antiga coleção. O nome da coleção parece familiar.',
    },
  ],

  3: [
    {
      id: 1,
      nome: 'Desenhos antigos',
      icone: '✎',
      descricao:
        'Você reconhece os desenhos. Todos foram feitos por você. Algumas peças parecem ter sido criadas para uma coleção que nunca chegou a ser apresentada.',
    },
    {
      id: 2,
      nome: 'Fotografias',
      icone: '▧',
      descricao:
        'Agora você consegue reconhecer o lugar e as pessoas nas fotografias. São lembranças de um período que parecia ter ficado muito distante.',
    },
    {
      id: 3,
      nome: 'Documentos',
      icone: '▤',
      descricao:
        'O documento contém uma antiga proposta de coleção. Na parte inferior, está sua assinatura. Você começa a entender que aquelas descobertas fazem parte da sua própria história.',
    },
  ],
};

export default function DeskScreen({ onBack, dia = 1, onInspect, }) {
  const [objetoSelecionado, setObjetoSelecionado] = useState(null);
  const objetos = objetosPorDia[dia] || objetosPorDia[1];

  function examinarObjeto(objeto) {
    setObjetoSelecionado(objeto);

    if (onInspect) {
      onInspect();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MESA DE TRABALHO</Text>

      <Text style={styles.subtitle}>
        Alguns objetos parecem guardar lembranças.
      </Text>

      <ScrollView contentContainerStyle={styles.objectList}>
        {objetos.map((objeto) => (
          <Pressable
            key={objeto.id}
            style={[
              styles.objectCard,
              objetoSelecionado?.id === objeto.id &&
                styles.selectedCard,
            ]}
            onPress={() => {
              setObjetoSelecionado(objeto);

              if (onInspect) {
                onInspect();
              }
            }}
          >
            <Text style={styles.objectIcon}>
              {objeto.icone}
            </Text>

            <Text style={styles.objectName}>
              {objeto.nome}
            </Text>

            <Text style={styles.inspectText}>
              EXAMINAR
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.descriptionPanel}>
        {objetoSelecionado ? (
          <ScrollView>
            <Text style={styles.panelTitle}>
              {objetoSelecionado.nome}
            </Text>

            <Text style={styles.description}>
              {objetoSelecionado.descricao}
            </Text>
          </ScrollView>
        ) : (
          <Text style={styles.instruction}>
            Selecione um objeto para examiná-lo.
          </Text>
        )}
      </View>

      <Pressable
        style={styles.button}
        onPress={onBack}
      >
        <Text style={styles.buttonText}>
          VOLTAR AO ATELIÊ
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D12',
    padding: 22,
    paddingTop: 55,
  },

  title: {
    color: '#E8DDE5',
    fontSize: 19,
    letterSpacing: 3,
  },

  subtitle: {
    color: '#A99AA8',
    fontSize: 12,
    marginTop: 12,
    marginBottom: 25,
  },

  objectList: {
    gap: 12,
    paddingBottom: 15,
  },

  objectCard: {
    backgroundColor: '#211923',
    borderWidth: 1,
    borderColor: '#493344',
    padding: 18,
    minHeight: 100,
    justifyContent: 'center',
  },

  selectedCard: {
    borderColor: '#D99AB8',
    backgroundColor: '#302230',
  },

  objectIcon: {
    color: '#D99AB8',
    fontSize: 24,
    marginBottom: 8,
  },

  objectName: {
    color: '#E8DDE5',
    fontSize: 14,
  },

  inspectText: {
    color: '#8E7F8D',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 8,
  },

  descriptionPanel: {
    minHeight: 130,
    maxHeight: 160,
    backgroundColor: '#1A141D',
    borderWidth: 1,
    borderColor: '#493344',
    padding: 15,
    justifyContent: 'center',
  },

  panelTitle: {
    color: '#D99AB8',
    fontSize: 14,
    marginBottom: 10,
  },

  description: {
    color: '#C7B8C4',
    fontSize: 13,
    lineHeight: 21,
  },

  instruction: {
    color: '#8E7F8D',
    fontSize: 12,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#702F4C',
    padding: 16,
    alignItems: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    letterSpacing: 2,
  },
});
