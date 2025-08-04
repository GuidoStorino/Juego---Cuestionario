import React, { useState, useEffect } from 'react';
import signosZodiaco from './signosZodiaco';
import './ZodiacoJuego.css';

export default function JuegoZodiaco({ elegirObjeto, inventario = [] }) {
  const [piedras, setPiedras] = useState({});
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [caracteristicaActual, setCaracteristicaActual] = useState(null);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [piedraGanadora, setPiedraGanadora] = useState(null);

  // Función que inicializa el juego
  const iniciarJuego = () => {
    // Armar piedras
    const nuevasPiedras = {};
    for (const signo in signosZodiaco) {
      nuevasPiedras[signo] = {
        aciertos: 0,
        completada: inventario.includes(signo),
      };
    }
    setPiedras(nuevasPiedras);

    // Armar características
    const todas = [];
    for (const signo in signosZodiaco) {
      if (inventario.includes(signo)) continue;
      ['buenas', 'malas', 'graciosas'].forEach(tipo => {
        signosZodiaco[signo][tipo].forEach(texto => {
          todas.push({ texto, signo });
        });
      });
    }
    // Mezclar características
    setCaracteristicas(todas.sort(() => Math.random() - 0.5));
    setCaracteristicaActual(null);
    setJuegoTerminado(false);
    setPiedraGanadora(null);
  };

  // Iniciar juego al montar
  useEffect(() => {
    iniciarJuego();
  }, []);

  // Mostrar la siguiente característica si corresponde
  useEffect(() => {
    if (!juegoTerminado && caracteristicas.length > 0 && !caracteristicaActual) {
      setCaracteristicaActual(caracteristicas[0]);
    }
  }, [caracteristicas, juegoTerminado, caracteristicaActual]);

const manejarSeleccionPiedra = (signoElegido) => {
  if (!caracteristicaActual || juegoTerminado) return;

  const esCorrecto = signoElegido === caracteristicaActual.signo;

  setPiedras(prev => {
    const nuevo = { ...prev };

    // Solo sumar si no está completada
    if (esCorrecto && !nuevo[signoElegido].completada) {
      const nuevosAciertos = nuevo[signoElegido].aciertos + 1;
      nuevo[signoElegido] = {
        ...nuevo[signoElegido],
        aciertos: nuevosAciertos,
        completada: nuevosAciertos === 3,
      };

      // Si justo se completó, guardamos en una bandera y procesamos después
      if (nuevosAciertos === 3) {
        // Ejecutar luego del update
        setTimeout(() => {
          setJuegoTerminado(true);
          setPiedraGanadora(signoElegido);
          elegirObjeto(signoElegido); // Agrega al inventario
        }, 0);
      }
    }

    return nuevo;
  });

  // Avanzar a la próxima característica
  setCaracteristicas(prev => prev.slice(1));
  setCaracteristicaActual(null);
};


  const reiniciarJuego = () => {
    // Volver a iniciar, pero conservar las piedras ya ganadas (en inventario)
    iniciarJuego();
  };

  return (
    <div className="juego-zodiaco">
      {juegoTerminado ? (
        <div className="mensaje-final">
          <h2>¡Completaste la piedra de {piedraGanadora}!</h2>
          <button onClick={reiniciarJuego}>Volver a jugar</button>
        </div>
      ) : (
        <>
          {caracteristicaActual ? (
            <div className="caracteristica-cayendo">
              <p>{caracteristicaActual.texto}</p>
            </div>
          ) : (
            <p></p>
          )}
          <div className="mesa-piedras">
{Object.entries(piedras).map(([signo, data]) => (
  <div
    key={signo}
    className={`piedra ${data.completada ? 'piedra-brillante' : data.aciertos > 0 ? 'piedra-brillante' : ''}`}
    onClick={() => manejarSeleccionPiedra(signo)}
  >
    {/* Barra de progreso visual */}
    <div
  className="piedra-barra"
  style={{ height: `${(data.aciertos / 3) * 100}%` }}
></div>


    {/* Contenido visible sobre la piedra */}
    <div className="contenido">
      {signo}
     
    </div>
  </div>
))}

          </div>
        </>
      )}
    </div>
  );
}
