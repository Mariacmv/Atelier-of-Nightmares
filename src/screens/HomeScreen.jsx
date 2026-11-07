import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function HomeScreen({ onNewGame }) {
  return (
    <ImageBackground
      source={require('../assets/images/title.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <StatusBar style="light" />

      <View style={styles.overlay}>
        <Text style={styles.logo}>
          Atelier of{"\n"}Nightmares
        </Text>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={onNewGame}
          >
            <Text style={styles.buttonText}>INICIAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>CONFIGURAÇÕES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>CRÉDITOS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20,10,20,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    color: '#fff',
    fontSize: 42,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 80,
    textShadowColor: '#ffaad5',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 15,
  },

  menu: {
    width: '80%',
    gap: 18,
  },

  mainButton: {
    backgroundColor: '#7d2872',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  secondaryButton: {
    backgroundColor: 'rgba(125,40,114,0.85)',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 2,
  },
});