
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
  if (estado.atividadesConcluidas.includes(atividade)) {
    return estado;
  }

  const desgastePorAtividade = {
    celular: 5,
    roupa: 5,
    mesa: 0,
  };

  const aumento = desgastePorAtividade[atividade] || 0;

  return {
    ...estado,
    desgaste: Math.min(100, estado.desgaste + aumento),
    atividadesConcluidas: [
      ...estado.atividadesConcluidas,
      atividade,
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
