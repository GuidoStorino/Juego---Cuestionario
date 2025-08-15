import React, { useState, useEffect } from 'react';
import './LagoJuego.css';
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

// Generador de niños (usado con lazy init)
function generateNinos() {
  return Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    estado: 'sentado', // 'sentado' | 'arrojado' | 'escapando'
    posicion: Math.random() * 70 + 15, // 15% a 85% del ancho
    direccionEscape: Math.random() > 0.5 ? 'izquierda' : 'derecha',
  }));
}

export default function LagoJuego({cambiarEscena}) {
  const [accionActual, setAccionActual] = useState(null);
  const [cooldowns, setCooldowns] = useState({ patada: false, guantes: false, pasto: false });
  const [usoAcciones, setUsoAcciones] = useState({ patada: 0, guantes: 0, pasto: 0 });
  const [cansancio, setCansancio] = useState(0);
  const [ninos, setNinos] = useState(generateNinos); // lazy init
  const [escapeIniciado, setEscapeIniciado] = useState(false);

  // Regeneración de cansancio
  useEffect(() => {
    const intervalo = setInterval(() => {
      setCansancio((prev) => Math.max(0, prev - 1));
    }, 500);
    return () => clearInterval(intervalo);
  }, []);

function manejarClickNino(id) {
  if (!accionActual || cansancio >= 100) return;

  // Verificamos el estado actual del niño (estado "real", no el que pueda estar en un closure viejo)
  const objetivo = ninos.find(n => n.id === id);
  if (!objetivo) return;

  // Permitimos click si está sentado o si ya está escapando
  if (!(objetivo.estado === 'sentado' || objetivo.estado === 'escapando')) return;

  // 1) Marcamos el niño clickeado como 'arrojado' de forma atómica
  setNinos(prev =>
    prev.map(n => (n.id === id ? { ...n, estado: 'arrojado' } : n))
  );

  // 2) Cansancio con clamp
  setCansancio(c => Math.min(100, c + 20));

  // 3) Eliminar al niño arrojado después de la animación (solo si fue marcado)
  setTimeout(() => {
    setNinos(prev => prev.filter(n => n.id !== id));
  }, 800); // coincide con tu animación .nino.arrojado

  // 4) Uso de acciones y cooldowns con functional setState (evita stale state)
  setUsoAcciones(prev => {
    const nuevoValor = (prev[accionActual] || 0) + 1;
    const actualizado = { ...prev, [accionActual]: nuevoValor };

    if (nuevoValor >= 2) {
      setCooldowns(cd => ({ ...cd, [accionActual]: true }));
      setTimeout(() => {
        setUsoAcciones(u => ({ ...u, [accionActual]: 0 }));
        setCooldowns(cd => ({ ...cd, [accionActual]: false }));
      }, 3000);
    }

    return actualizado;
  });

  // 5) Si el escape no había iniciado, lo programamos con RETARDO para dar una ventana
  //    al jugador y que pueda seguir clickeando a otros niños.
  if (!escapeIniciado) {
    setEscapeIniciado(true);
    const RETARDO_ESCAPE_MS = 2200; // ajustalo si querés más/menos tiempo
    setTimeout(() => {
      setNinos(prev => prev.map(n => (n.estado === 'sentado' ? { ...n, estado: 'escapando' } : n)));
    }, RETARDO_ESCAPE_MS);
  }
}


 return (
    <div
      className="juego-lago"
      style={{ backgroundImage: `url(${fondo})` }}
      aria-label="Mini juego del lago"
      role="region"
    >
      {/* Acciones */}
      <div className="acciones">
        {Object.entries(ACCIONES).map(([clave, { icono, nombre }]) => {
          const enCooldown = cooldowns[clave];
          const seleccionado = accionActual === clave;
          return (
            <button
              key={clave}
              onClick={() => setAccionActual(clave)}
              disabled={enCooldown}
              className={`${seleccionado ? 'seleccionado' : ''} ${enCooldown ? 'en-cooldown' : ''}`}
              aria-pressed={seleccionado}
              title={enCooldown ? `${nombre} en enfriamiento...` : nombre}
            >
              <img src={icono} alt={nombre} width={40} height={40} />
            </button>
          );
        })}
      </div>

      {/* Barra de cansancio */}
      <div className="barra-cansancio" aria-label="Cansancio">
        <div className="relleno" style={{ height: `${cansancio}%` }} />
        <span className="porcentaje" aria-hidden="true">{cansancio}%</span>
      </div>

      {/* Área con los niños */}
      <div className="area-ninos">
        {ninos.map((n) => (
          <img
            key={n.id}
            src={nino}
            alt="Niño sentado"
            className={`nino ${n.estado} ${n.estado === 'escapando' ? n.direccionEscape : ''}`}
            style={{ left: `${n.posicion}%` }}
            onClick={() => (n.estado === 'sentado' || n.estado === 'escapando') && manejarClickNino(n.id)}
            draggable={false}
          />
        ))}
      </div>

      {/* Botón para cambiar de escena */}
      <button
        className="boton-siguiente-escena"
        onClick={() => cambiarEscena('bosque_intro')}
      >
        Volver al bosque
      </button>
    </div>
  );
}