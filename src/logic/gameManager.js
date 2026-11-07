
export const estadoInicial = {
  dia: 1,
  desgaste: 0,
  roupaSelecionada: null,
  desfileRealizado: false,
  atividadesConcluidas: [],
};

export const atividadesObrigatorias = [
  'celular',
  'roupa',
  'mesa',
];

export function calcularEstadoReflexo(desgaste) {
  if (desgaste >= 70) return 'deteriorado';
  if (desgaste >= 30) return 'alterado';
  return 'normal';
}

export function atualizarRoupa(estado, roupa) {
  return {
    ...estado,
    roupaSelecionada: roupa,
    atividadesConcluidas: [
      ...new Set([
        ...estado.atividadesConcluidas,
        'roupa',
      ]),
    ],
  };
}

export function concluirAtividade(estado, atividade) {
  return {
    ...estado,
    atividadesConcluidas: [
      ...new Set([
        ...estado.atividadesConcluidas,
        atividade,
      ]),
    ],
  };
}

export function todasAtividadesConcluidas(estado) {
  return atividadesObrigatorias.every(
    (atividade) =>
      estado.atividadesConcluidas.includes(atividade)
  );
}

export function atualizarDesgaste(estado, valor) {
  return {
    ...estado,
    desgaste: Math.max(
      0,
      Math.min(100, estado.desgaste + valor)
    ),
  };
}

export function avancarDia(estado) {
  return {
    ...estado,
    dia: Math.min(3, estado.dia + 1),
    atividadesConcluidas: [],
  };
}
