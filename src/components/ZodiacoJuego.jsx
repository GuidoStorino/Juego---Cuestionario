import React, { useState, useEffect } from 'react';
import signosZodiaco from './signosZodiaco';
import './ZodiacoJuego.css';

const normalizar = s =>
  s ? s.toString().trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';

export default function JuegoZodiaco({ elegirObjeto, cambiarEscena }) {
  const [piedras, setPiedras] = useState({});
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [caracteristicaActual, setCaracteristicaActual] = useState(null);
  const [piedraGanadora, setPiedraGanadora] = useState(null);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  // Función para reconstruir el juego según el inventario guardado
  const inicializarJuego = () => {
    const stored = JSON.parse(localStorage.getItem('inventario') || '[]');
    const invNorm = new Set(stored.map(i => normalizar(i)));

    // Construir piedras
    const nuevasPiedras = {};
    for (const signo in signosZodiaco) {
      const ganada = invNorm.has(normalizar(signo));
      nuevasPiedras[signo] = {
        aciertos: ganada ? 3 : 0,
        completada: ganada,
      };
    }
    setPiedras(nuevasPiedras);



    // Construir mazo solo con piedras no ganadas
    const mazo = [];
    for (const signo in signosZodiaco) {
      if (nuevasPiedras[signo].completada) continue;
      ['buenas', 'malas', 'graciosas'].forEach(tipo => {
        (signosZodiaco[signo][tipo] || []).forEach(texto => {
          mazo.push({ texto, signo });
        });
      });
    }
    const mazoBarajado = mazo.sort(() => Math.random() - 0.5);
    setCaracteristicas(mazoBarajado);
    setCaracteristicaActual(mazoBarajado[0] || null);

    // Revisar si todas las piedras fueron completadas
    setJuegoTerminado(Object.values(nuevasPiedras).every(p => p.completada));
  };

  // Inicializamos al montar
  useEffect(() => {
    inicializarJuego();
  }, []);

  useEffect(() => {
  Object.entries(piedras).forEach(([signo, data]) => {
    if (data.completada) {
      const stored = JSON.parse(localStorage.getItem('inventario') || '[]');
      if (!stored.includes(signo)) {
        localStorage.setItem('inventario', JSON.stringify([...stored, signo]));
        elegirObjeto(signo); // también actualizar inventario del padre
        setPiedraGanadora(signo);
      }
    }
  });
}, [piedras]);


  const manejarSeleccionPiedra = (signoElegido) => {
if (!caracteristicaActual) return;
if (piedras[signoElegido]?.completada) return;

const esCorrecto = signoElegido === caracteristicaActual.signo;
let seCompleto = false;

setPiedras(prev => {
  const nuevo = { ...prev };
  const nuevosAciertos = esCorrecto ? (nuevo[signoElegido].aciertos || 0) + 1 : nuevo[signoElegido].aciertos;
  seCompleto = nuevosAciertos === 3;
  nuevo[signoElegido] = {
    ...nuevo[signoElegido],
    aciertos: nuevosAciertos,
    completada: seCompleto ? true : nuevo[signoElegido].completada,
  };
  return nuevo;
});


    if (seCompleto) {
      elegirObjeto(signoElegido);

      // Guardar en localStorage para persistencia
      const stored = JSON.parse(localStorage.getItem('inventario') || '[]');
      if (!stored.includes(signoElegido)) {
        localStorage.setItem('inventario', JSON.stringify([...stored, signoElegido]));
      }

      setPiedraGanadora(signoElegido);
    }

    // Avanzar a la próxima característica
    const siguiente = caracteristicas
      .slice(1)
      .filter(c => !(seCompleto && c.signo === signoElegido));
    setCaracteristicas(siguiente);
    setCaracteristicaActual(siguiente[0] || null);
  };

  const reiniciarJuego = () => {
    setPiedraGanadora(null);
    inicializarJuego();
  };

  return (
    <div className="juego-zodiaco">
      <button className="boton-salir" onClick={() => cambiarEscena('bosque_intro')}>
        Salir del juego
      </button>

      {juegoTerminado ? (
        <div className="mensaje-final">
          <h2>¡Completaste todas las piedras!</h2>
          <button onClick={reiniciarJuego}>Volver a jugar</button>
        </div>
      ) : (
        <>
          {caracteristicaActual && (
            <div className="caracteristica-cayendo">
              <p>{caracteristicaActual.texto}</p>
            </div>
          )}

          <div className="mesa-piedras">
            {Object.entries(piedras).map(([signo, data]) => (
              <div
                key={signo}
                className={`piedra ${data.completada || data.aciertos > 0 ? 'piedra-brillante' : ''}`}
                onClick={() => manejarSeleccionPiedra(signo)}
              >
                <div className="piedra-barra" style={{ height: `${(data.aciertos / 3) * 100}%` }} />
                <div className="contenido">{signo}</div>
              </div>
            ))}
          </div>

          {piedraGanadora && !juegoTerminado && (
            <div className="mensaje-piedra">
              ¡Completaste la piedra de {piedraGanadora}! 🎉
            </div>
          )}
        </>
      )}
    </div>
  );
}
