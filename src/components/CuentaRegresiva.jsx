// src/components/CuentaRegresiva.jsx
import { useEffect, useState } from "react";

export default function CuentaRegresiva({ segundosInicio, onTiempoTerminado }) {
  const [tiempo, setTiempo] = useState(segundosInicio);

  useEffect(() => {
    if (tiempo <= 0) {
      onTiempoTerminado();
      return;
    }

    const intervalo = setInterval(() => {
      setTiempo((t) => t - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempo]);

  const minutos = String(Math.floor(tiempo / 60)).padStart(2, "0");
  const segundos = String(tiempo % 60).padStart(2, "0");

  return (
    <div style={{
      position: "fixed",
      top: 10,
      right: 10,
      background: "black",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      fontSize: "1.5rem",
      fontFamily: "monospace"
    }}>
      {minutos}:{segundos}
    </div>
  );
}
