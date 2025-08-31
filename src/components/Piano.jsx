import React, { useState, useEffect, useRef } from "react";
import "./Piano.css";

export function Piano({ correctSequence = [], onMelodyComplete }) {
  const keys = [
    { note: "C", type: "white", freq: 261.63 },
    { note: "C#", type: "black", freq: 277.18 },
    { note: "D", type: "white", freq: 293.66 },
    { note: "D#", type: "black", freq: 311.13 },
    { note: "E", type: "white", freq: 329.63 },
    { note: "F", type: "white", freq: 349.23 },
    { note: "F#", type: "black", freq: 369.99 },
    { note: "G", type: "white", freq: 392.00 },
    { note: "G#", type: "black", freq: 415.30 },
    { note: "A", type: "white", freq: 440.00 },
    { note: "A#", type: "black", freq: 466.16 },
    { note: "B", type: "white", freq: 493.88 },
  ];

  const [sequence, setSequence] = useState([]);
  const audioCtx = useRef(null);

  useEffect(() => {
    // no creamos el AudioContext aquí para evitar que algunos navegadores lo suspendan sin interacción
  }, []);

  const ensureAudioContext = async () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.current.state === "suspended") {
      try {
        await audioCtx.current.resume();
      } catch (e) {
        // ignore
      }
    }
  };

  const playTone = (frequency, type = "white", duration = 0.4) => {
    if (!audioCtx.current) return;

    const ctx = audioCtx.current;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // timbre
    osc.type = type === "white" ? "sine" : "triangle";
    osc.frequency.setValueAtTime(frequency, now);

    // Envelope seguro: empezamos en valor muy bajo (no 0), atacamos y luego decay exponencial a valor pequeño
    const peak = type === "white" ? 0.25 : 0.18;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + 0.02); // ataque
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // decay

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    // detener un pelín después del decay para asegurar que la rampa termine
    osc.stop(now + duration + 0.02);

    // limpieza opcional cuando termina
    osc.onended = () => {
      try {
        osc.disconnect();
        gain.disconnect();
      } catch (e) {}
    };
  };

  const handleKeyPress = async (note, freq, type) => {
    // asegurar AudioContext activo (resume si hace falta)
    await ensureAudioContext();

    playTone(freq, type);

    const newSequence = [...sequence, note];
    setSequence(newSequence);

    if (newSequence.length === correctSequence.length && correctSequence.length > 0) {
      onMelodyComplete && onMelodyComplete(newSequence);
      setSequence([]);
    }
  };

  return (
    <div className="piano">
      {keys.map((key, index) => (
        <div
  key={key.note}
  className={`piano-key ${key.type} ${key.note.replace("#", "sharp")}`}
  onMouseDown={() => handleKeyPress(key.note, key.freq, key.type)}
>
  <span className="note-label">{key.note}</span>
</div>


        
        
      ))}
    </div>
  );
}
