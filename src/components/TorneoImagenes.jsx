import React, { useState, useEffect } from 'react';
import { listaDeImagenes } from './listaImagenes';
import './TorneoImagenes.css';

const TorneoImagenes = ({ onFinish }) => {
  const [rondaActual, setRondaActual] = useState([]);
  const [siguientesRondas, setSiguientesRondas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [ganadoraFinal, setGanadoraFinal] = useState(null);

  useEffect(() => {
    // Mezclamos y arrancamos primera ronda
    const mezcladas = [...listaDeImagenes].sort(() => 0.5 - Math.random());
    setRondaActual(mezcladas);
    setIndice(0);
    setSiguientesRondas([]);
    setGanadoraFinal(null);
  }, []);

  const handleEleccion = (imagenElegida) => {
    setSiguientesRondas((prev) => [...prev, imagenElegida]);

    const nuevoIndice = indice + 2;
    if (nuevoIndice < rondaActual.length) {
      setIndice(nuevoIndice);
    } else {
      // Terminó la ronda actual
      if (siguientesRondas.length + 1 === 1) {
        setGanadoraFinal(imagenElegida);
      } else {
        setRondaActual([...siguientesRondas, imagenElegida]); // nueva ronda
        setSiguientesRondas([]);
        setIndice(0);
      }
    }
  };

  if (ganadoraFinal) {
    return (
      <div className="torneo-container">
        <h2>¡Imagen ganadora!</h2>
        <img src={ganadoraFinal.src} alt="Ganadora" className="imagen-final" />
        <button onClick={() => window.location.reload()}>Jugar otra vez</button>
        {onFinish && <button onClick={onFinish}>Volver al juego</button>}
      </div>
    );
  }

  const imagen1 = rondaActual[indice];
  const imagen2 = rondaActual[indice + 1];

  return (
    <div className="torneo-container">
      <h2>¿Cuál preferís?</h2>
      <div className="par-imagenes">
        {imagen1 && (
          <img
            key={imagen1.id}
            src={imagen1.src}
            alt={`opcion-${imagen1.id}`}
            className="imagen-opcion"
            onClick={() => handleEleccion(imagen1)}
          />
        )}
        {imagen2 && (
          <img
            key={imagen2.id}
            src={imagen2.src}
            alt={`opcion-${imagen2.id}`}
            className="imagen-opcion"
            onClick={() => handleEleccion(imagen2)}
          />
        )}
      </div>
    </div>
  );
};

export default TorneoImagenes;
