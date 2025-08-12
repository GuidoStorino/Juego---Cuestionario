import React, { useState } from "react";
import "./Piano.css"; 

export function Piano({ correctSequence = [], onMelodyComplete }){
  // Definimos las teclas y la secuencia correcta
  const keys = [
    { note: "C", type: "white" },
    { note: "C#", type: "black" },
    { note: "D", type: "white" },
    { note: "D#", type: "black" },
    { note: "E", type: "white" },
    { note: "F", type: "white" },
    { note: "F#", type: "black" },
    { note: "G", type: "white" },
    { note: "G#", type: "black" },
    { note: "A", type: "white" },
    { note: "A#", type: "black" },
    { note: "B", type: "white" },
  ];

  const [sequence, setSequence] = useState([]);

  const handleKeyPress = (note) => {
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
          onClick={() => handleKeyPress(key.note)}
        >
          {/* El nombre de la nota lo dejamos oculto o visible para pruebas */}
          <span className="note-label">{key.note}</span>
        </div>
      ))}
    </div>
  );
}
