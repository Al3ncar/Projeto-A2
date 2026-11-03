export const historicoPartidas = [];

export const registerMatch = ({ tempo, movimentos, resultado = "Vitoria" }) => {
  const partida = {
    id: historicoPartidas.length + 1,
    data: new Date().toISOString(),
    tempo,
    movimentos,
    resultado,
  };
  historicoPartidas.push(partida);
  return partida;
};
