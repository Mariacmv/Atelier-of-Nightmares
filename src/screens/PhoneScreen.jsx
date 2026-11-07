
import { useState } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

const mensagensAgencia = {
  1: {
    horario: '07:15',
    texto: `Bom dia!

Sua participação no desfile foi confirmada.

Você terá três dias para preparar seu visual e organizar os últimos detalhes.

Estamos contando com você.`,
  },

  2: {
    horario: '08:30',
    texto: `Bom dia!

Como está a preparação?

Precisamos apresentar um resultado impecável.

Não nos decepcione.`,
  },

  3: {
    horario: '09:00',
    texto: `Chegamos ao último dia de preparação.

Precisamos que todos os detalhes estejam definidos.

Estamos esperando um excelente resultado.`,
  },
};

const mensagensMisteriosas = {
  1: {
    horario: '23:47',
    remetente: 'VOCÊ',
    texto: `Você se lembra de quando tudo começou?

Aquele lugar parecia tão diferente naquela época.

Será que ainda existe alguma coisa daquele tempo?`,
  },

  2: {
    horario: '02:13',
    remetente: 'VOCÊ',
    texto: `Algumas coisas nunca deveriam ter sido esquecidas.

Você ainda guarda aqueles desenhos?

Olhe novamente para a mesa.`,
  },

  3: {
    horario: '03:06',
    remetente: 'VOCÊ',
    texto: `Você finalmente chegou até aqui.

Mas será que se lembra de tudo?

Talvez esteja na hora de descobrir.`,
  },
};

const anotacoes = {
  1: {
    titulo: 'Primeiro dia',
    texto: `Faz tanto tempo que espero por uma oportunidade assim.

Ainda não consigo acreditar que vou participar do desfile.

Preciso escolher algo bonito. Quero que seja especial.`,
  },

  2: {
    titulo: 'Segundo dia',
    texto: `Passei boa parte do dia pensando nas roupas.

A agência parece ter uma ideia muito específica do que espera de mim.

Será que estou escolhendo o que realmente gosto?`,
  },

  3: {
    titulo: 'Terceiro dia',
    texto: `Amanhã é o desfile.

Estou tentando não pensar demais nisso.

Encontrei alguns desenhos antigos hoje.

Sinto falta de quando criar roupas era apenas algo que me fazia feliz.`,
  },
};

export default function PhoneScreen({ onBack, dia = 1 }) {
  const [secao, setSecao] = useState('agencia');

  const agencia = mensagensAgencia[dia] || mensagensAgencia[1];
  const misteriosa = mensagensMisteriosas[dia] || mensagensMisteriosas[1];
  const anotacao = anotacoes[dia] || anotacoes[1];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CELULAR</Text>

        <Text style={styles.time}>
          {secao === 'agencia'
            ? agencia.horario
            : secao === 'mensagens'
              ? misteriosa.horario
              : 'NOTAS'}
        </Text>
      </View>

      <View style={styles.phoneContent}>
        <View style={styles.tabs}>
          <Pressable
            style={[
              styles.tab,
              secao === 'agencia' && styles.activeTab,
            ]}
            onPress={() => setSecao('agencia')}
          >
            <Text style={styles.tabText}>AGÊNCIA</Text>
          </Pressable>

          <Pressable
            style={[
              styles.tab,
              secao === 'mensagens' && styles.activeTab,
            ]}
            onPress={() => setSecao('mensagens')}
          >
            <Text style={styles.tabText}>MENSAGENS</Text>
          </Pressable>

          <Pressable
            style={[
              styles.tab,
              secao === 'anotacoes' && styles.activeTab,
            ]}
            onPress={() => setSecao('anotacoes')}
          >
            <Text style={styles.tabText}>ANOTAÇÕES</Text>
          </Pressable>
        </View>

        <ScrollView>
          {secao === 'agencia' && (
            <View style={styles.conversation}>
              <Text style={styles.sender}>AGÊNCIA</Text>

              <View style={styles.message}>
                <Text style={styles.messageText}>
                  {agencia.texto}
                </Text>
              </View>

              <Text style={styles.messageTime}>
                {agencia.horario}
              </Text>
            </View>
          )}

          {secao === 'mensagens' && (
            <View style={styles.conversation}>
              <Text style={styles.sender}>
                {misteriosa.remetente}
              </Text>

              <View style={styles.message}>
                <Text style={styles.messageText}>
                  {misteriosa.texto}
                </Text>
              </View>

              <Text style={styles.messageTime}>
                {misteriosa.horario}
              </Text>
            </View>
          )}

          {secao === 'anotacoes' && (
            <View style={styles.note}>
              <Text style={styles.noteTitle}>
                {anotacao.titulo}
              </Text>

              <Text style={styles.noteText}>
                {anotacao.texto}
              </Text>
            </View>
          )}
        </ScrollView>
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
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  headerText: {
    color: '#A66A88',
    fontSize: 12,
    letterSpacing: 3,
  },

  time: {
    color: '#A99AA8',
    fontSize: 12,
  },

  phoneContent: {
    flex: 1,
    backgroundColor: '#211923',
    borderWidth: 1,
    borderColor: '#493344',
    padding: 18,
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#493344',
    marginBottom: 25,
  },

  tab: {
    paddingVertical: 12,
    paddingHorizontal: 5,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#D99AB8',
  },

  tabText: {
    color: '#D99AB8',
    fontSize: 10,
    letterSpacing: 1,
  },

  conversation: {
    alignItems: 'flex-start',
  },

  sender: {
    color: '#D99AB8',
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 10,
  },

  message: {
    backgroundColor: '#382B3A',
    padding: 16,
    borderRadius: 8,
    maxWidth: '95%',
  },

  messageText: {
    color: '#E8DDE5',
    fontSize: 13,
    lineHeight: 22,
  },

  messageTime: {
    color: '#8E7F8D',
    fontSize: 10,
    marginTop: 8,
  },

  note: {
    backgroundColor: '#2B222D',
    padding: 18,
    borderRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: '#A66A88',
  },

  noteTitle: {
    color: '#D99AB8',
    fontSize: 14,
    marginBottom: 18,
    letterSpacing: 1,
  },

  noteText: {
    color: '#E8DDE5',
    fontSize: 13,
    lineHeight: 24,
  },

  button: {
    backgroundColor: '#702F4C',
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    letterSpacing: 2,
  },
});
