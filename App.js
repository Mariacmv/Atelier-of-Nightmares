
import { useState } from 'react';

import HomeScreen from './src/screens/HomeScreen';
import IntroScreen from './src/screens/IntroScreen';
import AtelierScreen from './src/screens/AtelierScreen';
import WardrobeScreen from './src/screens/WardrobeScreen';
import MirrorScreen from './src/screens/MirrorScreen';
import PhoneScreen from './src/screens/PhoneScreen';
import DayEndScreen from './src/screens/DayEndScreen';
import DeskScreen from './src/screens/DeskScreen';

import {
  estadoInicial,
  atualizarRoupa,
  calcularEstadoReflexo,
  avancarDia,
  concluirAtividade,
  todasAtividadesConcluidas,
} from './src/logic/gameManager';

export default function App() {
  const [tela, setTela] = useState('menu');
  const [estadoJogo, setEstadoJogo] = useState({ ...estadoInicial });
  const podeFinalizarDia = todasAtividadesConcluidas(estadoJogo);

  function iniciarNovoJogo() {
    setEstadoJogo({ ...estadoInicial });
    setTela('introducao');
  }

  function confirmarRoupa(roupa) {
    setEstadoJogo((estadoAtual) =>
      atualizarRoupa(estadoAtual, roupa)
    );
  }

  function finalizarDia() {
    setTela('fimDia');
  }


  function continuarDia() {
    if (estadoJogo.dia >= 3) {
      setTela('menu');
      return;
    }

    setEstadoJogo((estadoAtual) =>
      avancarDia(estadoAtual)
    );

    setTela('atelie');
  }

  function examinarObjeto(objeto) {
    setObjetoSelecionado(objeto);

    if (onInspect) {
      onInspect();
    }
  }

  if (tela === 'introducao') {
    return (
      <IntroScreen
        onStart={() => setTela('atelie')}
      />
    );
  }

  if (tela === 'atelie') {
    return (
      <AtelierScreen
        onOpenWardrobe={() => setTela('guardaRoupa')}
        onOpenMirror={() => setTela('espelho')}
        roupaSelecionada={estadoJogo.roupaSelecionada}
        onOpenPhone={() => setTela('celular')}
        dia={estadoJogo.dia}
        onEndDay={finalizarDia}
        onOpenDesk={() => setTela('mesa')}
        atividadesConcluidas={estadoJogo.atividadesConcluidas}
        podeFinalizarDia={podeFinalizarDia}
      />
    );
  }

  if (tela === 'guardaRoupa') {
    return (
      <WardrobeScreen
        roupaSelecionada={estadoJogo.roupaSelecionada}
        onConfirm={confirmarRoupa}
        onBack={() => setTela('atelie')}
      />
    );
  }

  if (tela === 'espelho') {
    return (
      <MirrorScreen
        onBack={() => setTela('atelie')}
        estadoReflexo={calcularEstadoReflexo(estadoJogo.desgaste)}
        roupaSelecionada={estadoJogo.roupaSelecionada}
      />
    );
  }

  if (tela === 'celular') {
    return (
      <PhoneScreen
        onBack={() => setTela('atelie')}
        dia={estadoJogo.dia}
      />
    );
  }

  if (tela === 'fimDia') {
    return (
      <DayEndScreen
        dia={estadoJogo.dia}
        onContinue={continuarDia}
      />
    );
  }

  if (tela === 'mesa') {
    return (
      <DeskScreen
        onBack={() => setTela('atelie')}
        dia={estadoJogo.dia}
      />
    );
  }

  return (
    <HomeScreen
      onNewGame={iniciarNovoJogo}
    />
  );
}
