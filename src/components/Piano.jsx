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
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  }, []);

  const playTone = (frequency, type = "white", duration = 0.4) => {
    if (!audioCtx.current) return;

    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();

    // Diferentes timbres según tipo de tecla
    osc.type = type === "white" ? "sine" : "triangle";

    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(type === "white" ? 0.25 : 0.2, audioCtx.current.currentTime);

    // Un pequeño ataque y decaimiento para hacerlo más piano-like
    gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
    gain.gain.linearRampToValueAtTime(type === "white" ? 0.25 : 0.2, audioCtx.current.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.current.destination);

    osc.start();
    osc.stop(audioCtx.current.currentTime + duration);
  };

const handleKeyPress = (note, freq, type) => {
  // Crear AudioContext al primer click si aún no existe
  if (!audioCtx.current) {
    audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
  }

  playTone(freq, type);

  const newSequence = [...sequence, note];
  setSequence(newSequence);

  if (newSequence.length === correctSequence.length) {
    onMelodyComplete(newSequence);
    setSequence([]);
  }
};


  return (
    <div className="piano">
      {keys.map((key, index) => (
        <div
          key={index}
          className={`piano-key ${key.type}`}
          onClick={() => handleKeyPress(key.note, key.freq, key.type)}
        >
          <span className="note-label">{key.note}</span>
        </div>
      ))}
    </div>
  );
}
