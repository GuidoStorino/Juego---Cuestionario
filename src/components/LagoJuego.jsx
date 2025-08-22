import React, { useState, useEffect, useRef, useMemo } from 'react';
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

function generateNinos() {
  return Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    estado: 'sentado',                 // 'sentado' | 'agarrado' | 'arrojado' | 'escapando'
    posicion: Math.random() * 70 + 15, // left% (15 a 85)
    top: null,                         // top% durante drag; null => bottom:10%
    direccionEscape: Math.random() > 0.5 ? 'izquierda' : 'derecha',
  }));
}

function emojiCursor(emoji, size = 64, hotspotX = 32, hotspotY = 32) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>
    <text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='${size * 0.8}'>${emoji}</text>
  </svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hotspotX} ${hotspotY}, auto`;
}

export default function LagoJuego({ cambiarEscena }) {
  const [accionActual, setAccionActual] = useState(null);
  const [cooldowns, setCooldowns] = useState({ patada: false, guantes: false, pasto: false });
  const [usoAcciones, setUsoAcciones] = useState({ patada: 0, guantes: 0, pasto: 0 });
  const [cansancio, setCansancio] = useState(0);
  const [ninos, setNinos] = useState(generateNinos);
  const [escapeIniciado, setEscapeIniciado] = useState(false);
  const [mensajePaz, setMensajePaz] = useState(false); // <-- NUEVO

  const areaRef = useRef(null);
  const draggingIdRef = useRef(null);
  const cansancioRef = useRef(cansancio);
  useEffect(() => { cansancioRef.current = cansancio; }, [cansancio]);

  const cursorCSS = useMemo(() => {
    if (accionActual === 'patada') return emojiCursor('🥾', 64, 40, 40);
    if (accionActual === 'guantes') return 'grabbing';
    if (accionActual === 'pasto') return 'grab';
    return 'auto';
  }, [accionActual]);

  // Temporizador de 15s para mostrar el mensaje
  useEffect(() => {
    const timer = setTimeout(() => setMensajePaz(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  // Regeneración de cansancio gradual
  useEffect(() => {
    const t = setInterval(() => setCansancio(c => Math.max(0, c - 1)), 500);
    return () => clearInterval(t);
  }, []);

  // Disparar escape 2.2s después de la primera acción
  useEffect(() => {
    if (!escapeIniciado) return;
    const RETARDO_ESCAPE_MS = 2200;
    const t = setTimeout(() => {
      setNinos(prev => prev.map(n => (n.estado === 'sentado' ? { ...n, estado: 'escapando' } : n)));
    }, RETARDO_ESCAPE_MS);
    return () => clearTimeout(t);
  }, [escapeIniciado]);

  // Reset de cooldowns a los 3s
  useEffect(() => {
    const timers = [];
    (['patada', 'guantes', 'pasto']).forEach((k) => {
      if (cooldowns[k]) {
        const t = setTimeout(() => {
          setCooldowns(cd => ({ ...cd, [k]: false }));
          setUsoAcciones(u => ({ ...u, [k]: 0 }));
        }, 3000);
        timers.push(t);
      }
    });
    return () => timers.forEach(clearTimeout);
  }, [cooldowns]);

  // Listeners globales: drag y drop (mouse/touch)
  useEffect(() => {
    function onMouseMove(e) {
      const id = draggingIdRef.current;
      if (id == null) return;
      const rect = areaRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pctX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const pctY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      setNinos(prev => prev.map(n => (n.id === id ? { ...n, posicion: pctX, top: pctY } : n)));
    }

    function onMouseUp() {
      const id = draggingIdRef.current;
      if (id == null) return;

      if (cansancioRef.current >= 100) {
        setNinos(prev => prev.map(n => (n.id === id ? { ...n, estado: 'sentado', top: null } : n)));
        draggingIdRef.current = null;
        return;
      }

      setNinos(prev => {
        const objetivo = prev.find(n => n.id === id && n.estado === 'agarrado');
        if (!objetivo) return prev;
        return prev.map(n => (n.id === id ? { ...n, estado: 'arrojado' } : n));
      });

      setCansancio(c => Math.min(100, c + 20));
      setUsoAcciones(prev => {
        const nuevo = (prev.guantes || 0) + 1;
        const actualizado = { ...prev, guantes: nuevo };
        if (nuevo >= 2) setCooldowns(cd => ({ ...cd, guantes: true }));
        return actualizado;
      });

      setEscapeIniciado(prev => (prev ? prev : true));
      draggingIdRef.current = null;
    }

    function onTouchMove(e) {
      const id = draggingIdRef.current;
      if (id == null) return;
      const touch = e.touches[0];
      if (!touch) return;
      const rect = areaRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pctX = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
      const pctY = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
      setNinos(prev => prev.map(n => (n.id === id ? { ...n, posicion: pctX, top: pctY } : n)));
    }

    function onTouchEnd() { onMouseUp(); }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  // Eliminar niños al terminar la animación de vuelo
  useEffect(() => {
    function onAnimationEnd(e) {
      if (e.animationName !== 'volarAlLago') return;
      const el = e.target;
      const idStr = el?.dataset?.id;
      if (!idStr) return;
      const id = Number(idStr);
      setNinos(prev => prev.filter(n => n.id !== id));
    }
    const area = areaRef.current;
    if (!area) return;
    area.addEventListener('animationend', onAnimationEnd);
    return () => area.removeEventListener('animationend', onAnimationEnd);
  }, []);

  // Click (patada/pasto)
  function manejarClickNinoByEvent(e) {
    const id = parseInt(e.currentTarget.dataset?.id, 10);
    if (Number.isNaN(id)) return;
    if (accionActual === 'guantes') return;
    if (cansancioRef.current >= 100) return;

    setNinos(prev => {
      const objetivo = prev.find(n => n.id === id);
      if (!objetivo) return prev;
      if (!(objetivo.estado === 'sentado' || objetivo.estado === 'escapando')) return prev;
      return prev.map(n => (n.id === id ? { ...n, estado: 'arrojado' } : n));
    });

    setCansancio(c => Math.min(100, c + 20));
    setUsoAcciones(prev => {
      const nuevo = (prev[accionActual] || 0) + 1;
      const actualizado = { ...prev, [accionActual]: nuevo };
      if (nuevo >= 2) setCooldowns(cd => ({ ...cd, [accionActual]: true }));
      return actualizado;
    });
    setEscapeIniciado(prev => (prev ? prev : true));
  }

  // Agarrar con guantes (mousedown/touchstart)
  function agarrarNinoByEvent(e) {
    if (accionActual !== 'guantes') return;
    if (cansancioRef.current >= 100) return;

    const id = parseInt(e.currentTarget.dataset?.id, 10);
    if (Number.isNaN(id)) return;

    const clientX = e.touches ? e.touches[0]?.clientX : e.clientX;
    const clientY = e.touches ? e.touches[0]?.clientY : e.clientY;
    const rect = areaRef.current?.getBoundingClientRect();

    setNinos(prev => {
      const objetivo = prev.find(n => n.id === id);
      if (!objetivo || objetivo.estado !== 'sentado') return prev;
      const pctX = rect && clientX != null ? Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)) : objetivo.posicion;
      const pctY = rect && clientY != null ? Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100)) : null;
      return prev.map(n => (n.id === id ? { ...n, estado: 'agarrado', posicion: pctX, top: pctY } : n));
    });

    draggingIdRef.current = id;
    e.preventDefault();
  }

  return (
  <div
    className={`juego-lago ${accionActual ? "tiene-accion" : ""}`}
    style={{
      backgroundImage: `url(${fondo})`,
      cursor: cursorCSS,
      position: "relative",
      left: "-210px", // 👈 mueve toda la pantalla 40px a la izquierda
    }}
    aria-label="Mini juego del lago"
    role="region"
  >
      {/* Mensaje de paz */}
      {mensajePaz && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255,255,255,0.9)',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            zIndex: 100,
            textAlign: 'center',
            pointerEvents: 'none', // para no bloquear clics
          }}
        >
          Ahora sí, paz y tranquilidad
        </div>
      )}

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
      <div className="area-ninos" ref={areaRef}>
        {ninos.map((n) => (
          <img
            key={n.id}
            data-id={String(n.id)}
            src={nino}
            alt="Niño"
            className={`nino ${n.estado} ${n.estado === 'escapando' ? n.direccionEscape : ''}`}
            style={{
              left: `${n.posicion}%`,
              top: n.top != null ? `${n.top}%` : undefined,
              bottom: n.top == null ? '10%' : 'auto',
            }}
            draggable={false}
            onClick={manejarClickNinoByEvent}
            onMouseDown={agarrarNinoByEvent}
            onTouchStart={agarrarNinoByEvent}
          />
        ))}
      </div>

      {/* Cambio de escena */}
      <button className="boton-siguiente-escena" onClick={() => cambiarEscena('bosque_intro')}>
        Volver al bosque
      </button>
    </div>
  );
}
