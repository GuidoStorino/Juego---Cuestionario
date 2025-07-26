import { useState, useEffect } from "react";

const frases = [
  "Elegí la imagen que represente mejor la libertad",
  "¿Cuál imagen se siente más melancólica?",
  "Seleccioná la imagen más alegre",
  "Elegí la imagen que represente el misterio",
  "Seleccioná la imagen que te parezca más inspiradora"
];

const obtenerImagenesAleatorias = () => {
  const todas = Array.from({ length: 50 }, (_, i) => `/imgs/img${i + 1}.jpg`);
  return todas.sort(() => 0.5 - Math.random()).slice(0, 7);
};

const obtenerFraseAleatoria = () => {
  return frases[Math.floor(Math.random() * frases.length)];
};

const MiniJuegoImagenes = () => {
  const [imagenes, setImagenes] = useState([]);
  const [frase, setFrase] = useState("");
  const [seleccion, setSeleccion] = useState(null);

  const iniciarJuego = () => {
    setImagenes(obtenerImagenesAleatorias());
    setFrase(obtenerFraseAleatoria());
    setSeleccion(null);
  };

  useEffect(() => {
    iniciarJuego();
  }, []);

  const manejarSeleccion = (imagen) => {
    setSeleccion(imagen);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">{frase}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Opción ${index + 1}`}
            className={`w-full h-40 object-cover cursor-pointer rounded-lg border-4 ${
              seleccion === img ? "border-green-500" : "border-transparent"
            } hover:border-blue-400`}
            onClick={() => manejarSeleccion(img)}
          />
        ))}
      </div>

      {seleccion && (
        <div className="text-center mb-4">
          <p className="text-lg">Elegiste una imagen. ¿Querés volver a jugar?</p>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={iniciarJuego}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Volver a jugar
        </button>
      </div>
    </div>
  );
};

export default MiniJuegoImagenes;
