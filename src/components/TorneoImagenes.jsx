import React, { useState, useEffect } from 'react';
import { listaDeImagenes } from './listaImagenes';
import './TorneoImagenes.css';

const TorneoImagenes = ({ onFinish, actualizarEscena }) => {
  const [rondaActual, setRondaActual] = useState([]);
  const [siguientesRondas, setSiguientesRondas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [ganadoraFinal, setGanadoraFinal] = useState(null);

  // Inicia una ronda garantizando cantidad PAR en rondaActual.
  // Si arr es impar, "reserva" una imagen (bye) en siguientesRondas.
  const iniciarRonda = (arr) => {
    const next = [...arr];
    // si querés remezclar en cada ronda, descomentá:
    // next.sort(() => 0.5 - Math.random());

    const carry = next.length % 2 === 1 ? next.pop() : null; // saca una si es impar
    setRondaActual(next);            // siempre par
    setIndice(0);
    setSiguientesRondas(carry ? [carry] : []);
  };

  useEffect(() => {
    // Mezclamos SOLO al inicio
    const mezcladas = [...listaDeImagenes].sort(() => 0.5 - Math.random());
    iniciarRonda(mezcladas);
    setGanadoraFinal(null);
  }, []);

  const handleEleccion = (imagenElegida) => {
    // Calculamos el índice siguiente de la ronda actual
    const nuevoIndice = indice + 2;

    setSiguientesRondas((prev) => {
      const acumuladas = [...prev, imagenElegida];

      if (nuevoIndice < rondaActual.length) {
        // Todavía quedan pares por jugar en esta ronda
        setIndice(nuevoIndice);
        return acumuladas;
      }

      // La ronda actual terminó -> decidir próxima fase
      if (acumuladas.length === 1) {
        // Queda una sola imagen => ganadora final
        setGanadoraFinal(acumuladas[0]);
        return [];
      } else {
        // Iniciar nueva ronda con las acumuladas (aplica bye si es impar)
        iniciarRonda(acumuladas);
        return [];
      }
    });
  };

  // Estados terminales / vacíos
  if (ganadoraFinal) {
    return (
      <div className="torneo-container">
        <h2>¡Película ganadora!</h2>
        <img src={ganadoraFinal.src} alt="Ganadora" className="imagen-final" />
        <div className="acciones-final">
          <button onClick={() => window.location.reload()}>Jugar otra vez</button>
          {onFinish && <button onClick={onFinish}>Volver al juego</button>}
          {actualizarEscena && (
            <button onClick={() => actualizarEscena('bar')}>Volver al bar</button>
          )}
        </div>
      </div>
    );
  }

  if (!rondaActual || rondaActual.length === 0) {
    return (
      <div className="torneo-container">
        <h2>Cargando torneo…</h2>
      </div>
    );
  }

  const imagen1 = rondaActual[indice];
  const imagen2 = rondaActual[indice + 1]; // siempre debería existir por el “bye”, pero dejamos guardas

  return (
    <div className="torneo-container">
      <h2>¿Cuál te gustó más?</h2>
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
