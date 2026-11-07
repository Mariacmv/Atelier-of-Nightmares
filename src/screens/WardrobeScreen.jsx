
import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

const roupas = [
  { id: 1, nome: 'Vestido delicado', tipo: 'Elegante', cor: '#B58CA8' },
  { id: 2, nome: 'Vestido preto', tipo: 'Clássico', cor: '#39313D' },
  { id: 3, nome: 'Conjunto casual', tipo: 'Casual', cor: '#A9A1B5' },
  { id: 4, nome: 'Vestido vermelho', tipo: 'Marcante', cor: '#8C354B' },
];

export default function WardrobeScreen({ onBack, roupaSelecionada: roupaSalva, onConfirm }) {
  const [roupaSelecionada, setRoupaSelecionada] = useState(
    roupaSalva ?? null
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GUARDA-ROUPA</Text>
      <Text style={styles.subtitle}>
        Escolha uma roupa para sua preparação.
      </Text>

      <ScrollView contentContainerStyle={styles.clothingList}>
        {roupas.map((roupa) => {
          const selecionada = roupaSelecionada?.id === roupa.id;

          return (
            <Pressable
              key={roupa.id}
              style={[
                styles.clothingCard,
                selecionada && styles.selectedCard,
              ]}
              onPress={() => setRoupaSelecionada(roupa)}
            >
              <View
                style={[
                  styles.clothingPreview,
                  { backgroundColor: roupa.cor },
                ]}
              />

              <View style={styles.clothingInfo}>
                <Text style={styles.clothingName}>
                  {roupa.nome}
                </Text>
                <Text style={styles.clothingType}>
                  {roupa.tipo}
                </Text>
              </View>

              {selecionada && (
                <Text style={styles.check}>✓</Text>
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.selection}>
          {roupaSelecionada
            ? `Selecionado: ${roupaSelecionada.nome}`
            : 'Nenhuma roupa selecionada'}
        </Text>

        <Pressable
          style={[
            styles.button,
            !roupaSelecionada && styles.disabledButton,
          ]}
          disabled={!roupaSelecionada}
          onPress={() => {
            onConfirm(roupaSelecionada);
            onBack();
          }}
        >
          <Text style={styles.buttonText}>CONFIRMAR ESCOLHA</Text>
        </Pressable>

        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>VOLTAR AO ATELIÊ</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D12',
    padding: 24,
    paddingTop: 55,
  },
  title: {
    color: '#E8DDE5',
    fontSize: 22,
    letterSpacing: 4,
  },
  subtitle: {
    color: '#A99AA8',
    fontSize: 13,
    marginTop: 12,
    marginBottom: 25,
  },
  clothingList: {
    gap: 14,
    paddingBottom: 20,
  },
  clothingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#211923',
    borderWidth: 1,
    borderColor: '#493344',
    padding: 12,
    gap: 15,
  },
  selectedCard: {
    borderColor: '#D99AB8',
    backgroundColor: '#302230',
  },
  clothingPreview: {
    width: 65,
    height: 75,
    borderRadius: 4,
  },
  clothingInfo: {
    flex: 1,
    gap: 6,
  },
  clothingName: {
    color: '#E8DDE5',
    fontSize: 14,
  },
  clothingType: {
    color: '#A99AA8',
    fontSize: 11,
  },
  check: {
    color: '#D99AB8',
    fontSize: 20,
  },
  footer: {
    marginTop: 'auto',
    gap: 15,
  },
  selection: {
    color: '#A99AA8',
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#702F4C',
    padding: 16,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#493344',
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    letterSpacing: 2,
  },
  backButton: {
    alignItems: 'center',
    padding: 10,
  },
  backText: {
    color: '#A99AA8',
    fontSize: 11,
    letterSpacing: 2,
  },
});
