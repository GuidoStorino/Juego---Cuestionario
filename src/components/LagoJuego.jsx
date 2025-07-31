import React, { useState, useEffect } from 'react';
import './LagoJuego.css'; // para estilos
import bota from '../assets/bota.png';
import guantes from '../assets/guantes.png';
import pasto from '../assets/pasto.png';
import nino from '../assets/nino.png';
import fondo from '../assets/lago_fondo.png';

const ACCIONES = {
  patada: { icono: bota, nombre: 'Patada' },
  guantes: { icono: guantes, nombre: 'Arrojar' },
  pasto: { icono: pasto, nombre: 'Empujar' },
};

export default function LagoJuego() {
  const [accionActual, setAccionActual] = useState(null);
  const [cooldowns, setCooldowns] = useState({ patada: false, guantes: false, pasto: false });
  const [usoAcciones, setUsoAcciones] = useState({ patada: 0, guantes: 0, pasto: 0 });
  const [cansancio, setCansancio] = useState(0);
  const [ninos, setNinos] = useState(generateNinos());

  // Regenerar cansancio con el tiempo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setCansancio((prev) => Math.max(0, prev - 1));
    }, 500);
    return () => clearInterval(intervalo);
  }, []);

  function generateNinos() {
    return Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      estado: 'sentado', // 'sentado', 'arrojado', 'escapando'
      posicion: Math.random() * 80 + 10, // posición en pantalla (izquierda %)
    }));
  }

  function manejarClickNino(id) {
    if (!accionActual || cansancio >= 100) return;
    const nuevoEstado = [...ninos];
    const index = nuevoEstado.findIndex((n) => n.id === id);
    if (nuevoEstado[index].estado === 'sentado') {
      nuevoEstado[index].estado = 'arrojado';
      setNinos(nuevoEstado);
      setCansancio((c) => c + 20);

      const nuevosUsos = { ...usoAcciones, [accionActual]: usoAcciones[accionActual] + 1 };
      setUsoAcciones(nuevosUsos);

      if (nuevosUsos[accionActual] >= 2) {
        setCooldowns({ ...cooldowns, [accionActual]: true });
        setTimeout(() => {
          setUsoAcciones({ ...usoAcciones, [accionActual]: 0 });
          setCooldowns({ ...cooldowns, [accionActual]: false });
        }, 3000);
      }
    }
  }

  function iniciarEscape() {
    const nuevo = ninos.map((n) =>
      n.estado === 'sentado' ? { ...n, estado: 'escapando' } : n
    );
    setNinos(nuevo);
  }

  return (
    <div className="juego-lago" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="acciones">
        {Object.entries(ACCIONES).map(([clave, { icono, nombre }]) => (
          <button
            key={clave}
            onClick={() => setAccionActual(clave)}
            disabled={cooldowns[clave]}
            className={accionActual === clave ? 'seleccionado' : ''}
          >
            <img src={icono} alt={nombre} width={40} />
          </button>
        ))}
      </div>

      <div className="barra-cansancio">
        <div className="relleno" style={{ height: `${cansancio}%` }} />
      </div>

      <div className="area-ninos">
        {ninos.map((n) => (
          <img
            key={n.id}
            src={nino}
            className={`nino ${n.estado}`}
            style={{ left: `${n.posicion}%` }}
            onClick={() => manejarClickNino(n.id)}
          />
        ))}
      </div>

      <button className="boton-empezar" onClick={iniciarEscape}>¡Empezar Escape!</button>
    </div>
  );
}
