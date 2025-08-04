export const listaDeImagenes = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/imagen_${i + 1}.HEIC`, // Ruta desde /public
}));