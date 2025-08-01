import React, { useState, useEffect } from "react";

const recetas = [
  {
    nombre: "Poción de Curación",
    ingredientes: ["hierbas", "sal", "vino"],
    resultado: "Lograste crear una poción de curación. ¡Bien hecho!",
  },
  {
    nombre: "Poción Explosiva",
    ingredientes: ["azufre", "aceite", "sal"],
    resultado: "¡Boom! El caldero explotó. Has creado una poción explosiva.",
  },
  {
    nombre: "Poción de Invisibilidad",
    ingredientes: ["mandrágora", "vino", "agua lunar"],
    resultado: "Te has vuelto invisible por un momento.",
  },
];

const CalderoPocion = () => {
  const [inventario, setInventario] = useState([]);
  const [objetosUsados, setObjetosUsados] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [tieneLibro, setTieneLibro] = useState(false);

  useEffect(() => {
    const inventarioGuardado = JSON.parse(localStorage.getItem("inventario")) || [];
    setInventario(inventarioGuardado);
    setTieneLibro(inventarioGuardado.includes("Libro antiguo"));
  }, []);

  const agregarAlCaldero = (objeto) => {
    if (!objetosUsados.includes(objeto)) {
      setObjetosUsados([...objetosUsados, objeto]);
    }
  };

  const prepararPocion = () => {
    const ingredientesUsados = [...objetosUsados].sort();

    const recetaEncontrada = recetas.find((receta) => {
      const ingredientesEsperados = [...receta.ingredientes].sort();
      return (
        ingredientesUsados.length === ingredientesEsperados.length &&
        ingredientesUsados.every((ing, i) => ing === ingredientesEsperados[i])
      );
    });

    if (recetaEncontrada) {
      setMensaje(recetaEncontrada.resultado);
    } else {
      setMensaje("La mezcla burbujea sin sentido... No parece funcionar.");
    }
  };

  if (!tieneLibro) {
    return <p>El anciano dice: "Para preparar una poción necesitas el libro antiguo."</p>;
  }

  return (
    <div style={{ padding: "1rem", backgroundColor: "#f0efe7", borderRadius: "12px" }}>
      <h2>Caldero Mágico</h2>
      <p>Seleccioná objetos para echar al caldero:</p>
      <ul>
        {inventario.map((obj, idx) => (
          <li key={idx}>
            <button onClick={() => agregarAlCaldero(obj)}>{obj}</button>
          </li>
        ))}
      </ul>

      <p>Objetos en el caldero: {objetosUsados.join(", ") || "Ninguno"}</p>

      <button onClick={prepararPocion} disabled={objetosUsados.length === 0}>
        Preparar Poción
      </button>

      {mensaje && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensaje}</p>}
    </div>
  );
};

export default CalderoPocion;
