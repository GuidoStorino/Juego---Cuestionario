// Importa de forma estática todos los archivos de /src/assets/torneo
// Ajustá la ruta y las extensiones a lo que uses
const modules = import.meta.glob('../assets/torneo/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
});

function fileNameFromPath(path) {
  // Ej: '../assets/torneo/poster_01.jpg' -> 'poster_01.jpg'
  return path.split('/').pop();
}

export const listaDeImagenes = Object.entries(modules).map(([path, mod], i) => ({
  id: fileNameFromPath(path) || `img-${i}`,
  src: mod.default, // URL final que sirve Vite
}));
