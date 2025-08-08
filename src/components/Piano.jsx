import React, { useEffect, useState } from "react";

export function Piano() {
  const [notas, setNotas] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [yaDesbloqueado, setYaDesbloqueado] = useState(false);

  const sonidos = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
  const claveCorrecta = ["Do", "Mi", "Sol"];

  useEffect(() => {
    const desbloqueado = localStorage.getItem("piano_desbloqueado") === "true";
    setYaDesbloqueado(desbloqueado);
    if (desbloqueado) {
      setMensaje("🔓 Ya desbloqueaste el piano.");
    }
  }, []);

  const tocarNota = (nota) => {
    reproducirSonido(nota);

    const nuevasNotas = [...notas, nota];
    setNotas(nuevasNotas);

    const últimas = nuevasNotas.slice(-claveCorrecta.length);

    if (
      !yaDesbloqueado &&
      JSON.stringify(últimas) === JSON.stringify(claveCorrecta)
    ) {
      setMensaje("🔓 ¡Escuchás un clic de cerradura abriéndose!");
      setYaDesbloqueado(true);
      localStorage.setItem("piano_desbloqueado", "true");
    }
  };

  const reproducirSonido = (nota) => {
    const audio = new Audio(`/sonidos/${nota}.mp3`);
    audio.play();
  };

  return (
    <div>
      <p>🎹 Piano</p>
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
        {sonidos.map((nota) => (
          <button key={nota} onClick={() => tocarNota(nota)}>
            {nota}
          </button>
        ))}
      </div>
      {mensaje && <p style={{ color: "green", marginTop: "10px" }}>{mensaje}</p>}
    </div>
  );
}
