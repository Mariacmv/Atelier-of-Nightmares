import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

const objetos = {
  espelho: {
    nome: 'Espelho',
    descricao:
      'Seu reflexo observa você em silêncio. Por enquanto, tudo parece normal.',
  },
  guardaRoupa: {
    nome: 'Guarda-roupa',
    descricao:
      'Suas roupas estão organizadas. Você precisa escolher um visual para a preparação do desfile.',
  },
  celular: {
    nome: 'Celular',
    descricao:
      'Você tem uma nova mensagem da agência. É melhor conferir.',
  },
  mesa: {
    nome: 'Mesa de trabalho',
    descricao:
      'Há desenhos, tecidos e algumas fotografias espalhadas sobre a mesa.',
  },
};

export default function AtelierScreen({ onOpenWardrobe, onOpenMirror, roupaSelecionada, onOpenPhone, dia, onEndDay, onOpenDesk, atividadesConcluidas = [], podeFinalizarDia = false, }) {
  const [objetoSelecionado, setObjetoSelecionado] = useState(null);

  function interagir(objeto) {
    if (objeto === 'guardaRoupa') {
      onOpenWardrobe();
      return;
    }

    if (objeto === 'espelho') {
      onOpenMirror();
      return;
    }

    if (objeto === 'celular') {
      onOpenPhone();
      return;
    }

    if (objeto === 'mesa') {
      onOpenDesk();
      return;
    }

    setObjetoSelecionado(objetos[objeto]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.day}>
          DIA {String(dia).padStart(2, '0')}
        </Text>
        <Text style={styles.location}>ATELIÊ</Text>
      </View>

      <View style={styles.room}>
        <Text style={styles.roomTitle}>Seu espaço de preparação</Text>
        <Text style={styles.selectedOutfit}>
          {roupaSelecionada
            ? `Visual escolhido: ${roupaSelecionada.nome}`
            : 'Você ainda não escolheu seu visual.'}
        </Text>
        <View style={styles.mirrorArea}>
          <Pressable
            style={styles.mirror}
            onPress={() => interagir('espelho')}
          >
            <Text style={styles.mirrorText}>ESPELHO</Text>
            <Text style={styles.mirrorHint}>Toque para observar</Text>
          </Pressable>
        </View>

        <View style={styles.objectsRow}>
          <Pressable
            style={styles.object}
            onPress={() => interagir('guardaRoupa')}
          >
            <Text style={styles.objectIcon}>▥</Text>
            <Text style={styles.objectText}>GUARDA-ROUPA</Text>
          </Pressable>

          <Pressable
            style={styles.object}
            onPress={() => interagir('mesa')}
          >
            <Text style={styles.objectIcon}>▤</Text>
            <Text style={styles.objectText}>MESA</Text>
          </Pressable>

          <Pressable
            style={styles.object}
            onPress={() => interagir('celular')}
          >
            <Text style={styles.objectIcon}>▯</Text>
            <Text style={styles.objectText}>CELULAR</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.progressPanel}>
        <Text style={styles.progressTitle}>
          PREPARAÇÃO DO DIA
        </Text>

        <Text style={styles.progressText}>
          {atividadesConcluidas.length}/3 atividades concluídas
        </Text>
      </View>

      <Pressable
        style={[
          styles.endDayButton,
          !podeFinalizarDia && styles.disabledButton,
        ]}
        onPress={onEndDay}
        disabled={!podeFinalizarDia}
      >
        <Text style={styles.endDayText}>
          {podeFinalizarDia
            ? 'FINALIZAR DIA'
            : 'CONCLUA AS ATIVIDADES'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D12',
    padding: 20,
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  day: {
    color: '#A66A88',
    letterSpacing: 3,
    fontSize: 12,
  },
  location: {
    color: '#C7B8C4',
    letterSpacing: 3,
    fontSize: 12,
  },
  room: {
    flex: 1,
    backgroundColor: '#211923',
    borderWidth: 1,
    borderColor: '#493344',
    padding: 15,
    justifyContent: 'space-between',
  },
  roomTitle: {
    color: '#C7B8C4',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  mirrorArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mirror: {
    width: '65%',
    height: 190,
    backgroundColor: '#302634',
    borderWidth: 4,
    borderColor: '#806276',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mirrorText: {
    color: '#E8DDE5',
    letterSpacing: 3,
    fontSize: 14,
  },
  mirrorHint: {
    color: '#A99AA8',
    fontSize: 10,
    marginTop: 10,
  },
  objectsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    gap: 8,
  },
  object: {
    flex: 1,
    minHeight: 90,
    backgroundColor: '#382B3A',
    borderWidth: 1,
    borderColor: '#594456',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  objectIcon: {
    color: '#D8C3D2',
    fontSize: 27,
    marginBottom: 8,
  },
  objectText: {
    color: '#D8C3D2',
    fontSize: 9,
    letterSpacing: 1,
    textAlign: 'center',
  },
  interactionPanel: {
    minHeight: 115,
    maxHeight: 150,
    backgroundColor: '#1A141D',
    borderWidth: 1,
    borderColor: '#493344',
    marginTop: 15,
    padding: 15,
    justifyContent: 'center',
  },
  panelTitle: {
    color: '#D99AB8',
    fontSize: 15,
    marginBottom: 8,
  },
  panelDescription: {
    color: '#C7B8C4',
    fontSize: 13,
    lineHeight: 20,
  },
  instruction: {
    color: '#8E7F8D',
    textAlign: 'center',
    fontSize: 12,
  },
  closeText: {
    color: '#D99AB8',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 12,
  },
  selectedOutfit: {
    color: '#D99AB8',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
  endDayButton: {
    backgroundColor: '#493344',
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },

  endDayText: {
    color: '#D8C3D2',
    fontSize: 11,
    letterSpacing: 2,
  },
  progressPanel: {
    marginTop: 15,
    alignItems: 'center',
  },

  progressTitle: {
    color: '#D99AB8',
    fontSize: 10,
    letterSpacing: 2,
  },

  progressText: {
    color: '#A99AA8',
    fontSize: 11,
    marginTop: 6,
  },

  disabledButton: {
    opacity: 0.4,
  },
});
