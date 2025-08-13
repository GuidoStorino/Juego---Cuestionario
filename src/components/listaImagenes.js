export const listaDeImagenes = Array.from({ length: 38 }, (_, i) => ({
  id: i + 1,
  src: `/Juego---Cuestionario/game-project/public/images/IMG${i + 1}.JPG`, // Ruta desde /public
}));