import React, { useState, useEffect } from "react";
import './CabanaJuego.css';

const RECETAS_VALIDAS = [
  ['hierbas', 'vino', 'sal'],
  ['sal', 'hongos', 'vino'],
  ['hierbas', 'hongos', 'agua'],
  ['cámara', 'hongo']
];

const RECETAS_FALLIDAS = [
  { ingredientes: ['sal', 'agua'], resultado: "El líquido se pone oscuro y espeso. No parece seguro beberlo." },
  { ingredientes: ['hongos', 'vino'], resultado: "Una nube púrpura emerge del caldero... ¡explota sin previo aviso!" },
  { ingredientes: ['hierbas', 'sal'], resultado: "La mezcla se vuelve amarga y sin color. El anciano frunce el ceño." },
];

const CalderoPocion = () => {
  const [inventario, setInventario] = useState([]);
  const [objetosUsados, setObjetosUsados] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [tieneLibro, setTieneLibro] = useState(false);
  const [juegoGanado, setJuegoGanado] = useState(false);
  const [mostrarRecetas, setMostrarRecetas] = useState(false);

  useEffect(() => {
    const inventarioGuardado = JSON.parse(localStorage.getItem("inventario")) || [];
    setInventario(inventarioGuardado);
    setTieneLibro(inventarioGuardado.includes("Libro antiguo"));
  }, []);

  const agregarAlCaldero = (objeto) => {
    if (objeto === "Libro antiguo") {
      setMostrarRecetas(prev => !prev);
      return;
    }
    if (!objetosUsados.includes(objeto)) {
      setObjetosUsados(prev => [...prev, objeto]);
    }
  };

  const normalizeAndSort = (arr) =>
    arr.map(i => String(i).toLowerCase()).sort();

  const prepararPocion = () => {
    const ingredientesUsados = normalizeAndSort(objetosUsados);

    const recetaExitosa = RECETAS_VALIDAS.find((receta) => {
      const r = normalizeAndSort(receta);
      return (
        ingredientesUsados.length === r.length &&
        ingredientesUsados.every((ing, i) => ing === r[i])
      );
    });

    if (recetaExitosa) {
      setMensaje("¡La poción está brillando! ¡Encontraste la cura! Salvaste a las criaturas del bosque. Gracias, gracias, ¡gracias!");
      setJuegoGanado(true);
      return;
    }

    const recetaFallida = RECETAS_FALLIDAS.find(({ ingredientes }) => {
      const r = normalizeAndSort(ingredientes);
      return (
        ingredientesUsados.length === r.length &&
        ingredientesUsados.every((ing, i) => ing === r[i])
      );
    });

    if (recetaFallida) {
      setMensaje(recetaFallida.resultado);
    } else {
      setMensaje("La mezcla burbujea sin sentido... No parece funcionar.");
    }
  };

  const reiniciarJuego = () => {
    setObjetosUsados([]);
    setMensaje("");
    setJuegoGanado(false);
    setMostrarRecetas(false);
  };

  const irAEscena = (destino) => {
    localStorage.setItem("escena", destino);
    window.location.reload();
  };

  const estadoCaldero = juegoGanado ? "exito" : (mensaje && !juegoGanado ? "fallo" : "");

  return (
    <div style={{ padding: "1rem", backgroundColor: "#f0efe7", borderRadius: "12px" }}>
      <h2>Caldero Mágico</h2>

      <div className={`caldero ${estadoCaldero}`}>
  <div className="pata p1" aria-hidden="true"></div>
  <div className="pata p2" aria-hidden="true"></div>

  <div className="liquido" aria-hidden="true"></div>

  <div className="burbujas" aria-hidden="true">
    <span></span><span></span><span></span><span></span>
  </div>

  <div className="humo" aria-hidden="true">
    <div className="nube n1"></div>
    <div className="nube n2"></div>
    <div className="nube n3"></div>
  </div>

  <div className="chispa chispas-1" aria-hidden="true"></div>
  <div className="chispa chispas-2" aria-hidden="true"></div>
  <div className="chispa chispas-3" aria-hidden="true"></div>
</div>


      {!juegoGanado && (
        <button onClick={() => irAEscena("bosque_intro")} style={{ marginBottom: "1rem" }}>
          Aún no tengo suficientes elementos, voy a seguir buscando en el bosque
        </button>
      )}

      {!tieneLibro && (
        <p>El anciano dice: "Para preparar una poción necesitas el libro antiguo."</p>
      )}

      {tieneLibro && !juegoGanado && (
        <>
          <p>Seleccioná objetos para echar al caldero:</p>
          <ul>
            {inventario.map((obj, idx) => (
              <li key={obj + "-" + idx}>
                <button onClick={() => agregarAlCaldero(obj)}>{obj}</button>
              </li>
            ))}
          </ul>

          <p>Objetos en el caldero: {objetosUsados.join(", ") || "Ninguno"}</p>

          <button onClick={prepararPocion} disabled={objetosUsados.length === 0}>
            Preparar Poción
          </button>
        </>
      )}

      {mostrarRecetas && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src="/img/recetas-libro.png"
            alt="Recetas del libro antiguo"
            style={{ maxWidth: "100%", border: "2px solid #333", borderRadius: "8px" }}
          />
        </div>
      )}

      {mensaje && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensaje}</p>}

      {juegoGanado && (
        <div style={{ marginTop: "1rem" }}>
          <h3></h3>
          <button onClick={() => irAEscena("bosque_intro")} style={{ marginRight: "1rem" }}>
            Aún no tengo suficientes elementos, voy a seguir buscando en el bosque
          </button>
          <button onClick={reiniciarJuego}>Preparar poción nuevamente</button>
        </div>
      )}

      {!juegoGanado && mensaje && (
        <div style={{ marginTop: "1rem" }}>
          <button onClick={reiniciarJuego}>Preparar poción nuevamente</button>
        </div>
      )}
    </div>
  );
};

export default CalderoPocion;
