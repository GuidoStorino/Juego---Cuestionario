import React, { useState, useEffect } from "react";
import './CabanaJuego.css';
import libroantiguo from '../assets/libroantiguo.PNG'

const RECETAS_VALIDAS = [
  ['cáncer', 'flor roja', 'sal'],
  ['escorpio', 'flor roja', 'sal'],
  ['piedra piscis', 'flor roja', 'sal'],
  ['tauro', 'hueso animal', 'vino'],
  ['virgo', 'hueso animal', 'vino'],
  ['capricornio', 'hueso animal', 'vino'],
  ['aries', 'hongo', 'incienso aromático'],
  ['leo', 'hongo', 'incienso aromático'],
  ['sagitario', 'hongo', 'incienso aromático'],
  ['geminis', 'hongo', 'incienso aromático'],
  ['libra', 'hongo', 'incienso aromático'],
  ['acuario', 'hongo', 'incienso aromático'],
  ['sangre de unicornio', 'agua del bosque'],
  ['piedra zafiro', 'hierbas doradas', 'vino'],
  ['piedra zafiro', 'hierbas azules', 'vino'],
  ['piedra de cuarzo rosa', 'hierbas verdes', 'agua del bosque'],
  ['piedra de cuarzo rosa', 'hierbas rojas', 'agua del bosque'],
];

const RECETAS_FALLIDAS = [
  { ingredientes: ['sal', 'agua del bosque', 'vino'], resultado: "El líquido se pone oscuro y espeso. No parece seguro beberlo." },
  { ingredientes: ['hongo', 'vino', 'hueso animal'], resultado: "Una nube púrpura emerge del caldero... ¡explota sin previo aviso!" },
  { ingredientes: ['hierbas azules', 'sal', 'hierbas rojas'], resultado: "La mezcla se vuelve amarga y sin color. El anciano frunce el ceño." },
];

const CalderoPocion = () => {
  const [inventario, setInventario] = useState([]);
  const [objetosUsados, setObjetosUsados] = useState([]); // debería ser siempre array
  const [mensaje, setMensaje] = useState("");
  const [tieneLibro, setTieneLibro] = useState(false);
  const [juegoGanado, setJuegoGanado] = useState(false);
  const [mostrarRecetas, setMostrarRecetas] = useState(false);

  useEffect(() => {
    const inventarioGuardado = JSON.parse(localStorage.getItem("inventario")) || [];
    setInventario(inventarioGuardado);
    setTieneLibro(inventarioGuardado.map(i => String(i).toLowerCase()).includes("libro antiguo"));
  }, []);

  // versión segura: acepta null/undefined y devuelve array de strings (lowercase) ordenado
  const normalizeAndSort = (arr) => {
    if (!Array.isArray(arr)) {
      if (arr == null) return []; // si es null/undefined devolvemos array vacío
      // si no es array, intentamos convertirlo a array con un solo elemento
      return [String(arr).toLowerCase()].sort();
    }
    return arr.map(i => String(i).toLowerCase()).sort();
  };

  const agregarAlCaldero = (objeto) => {
    // guardamos la cadena tal cual en inventario; pero comparamos en lowercase
    if (String(objeto).toLowerCase() === "libro antiguo") {
      setMostrarRecetas(prev => !prev);
      return;
    }
    // defensivo: si objetosUsados está undefined por alguna razón, inicializamos a []
    setObjetosUsados(prev => {
      const base = Array.isArray(prev) ? prev : [];
      if (base.includes(objeto)) return base;
      return [...base, objeto];
    });
  };

  const prepararPocion = () => {
    // logs de diagnóstico
    console.log("PREPARAR: objetosUsados (raw) =", objetosUsados, "tieneLibro =", tieneLibro);

    // aseguramos que trabajamos con array
    const ingredientesUsados = normalizeAndSort(objetosUsados);
    console.log("PREPARAR: ingredientesUsados (normalizados) =", ingredientesUsados);

    // si no hay ingredientes, salimos (y mostramos mensaje)
    if (ingredientesUsados.length === 0) {
      setMensaje("No hay objetos en el caldero. Agregá algo primero.");
      return;
    }

    // buscar receta exitosa
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

    // buscar receta fallida
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
    <div className="caldero-app" style={{ padding: "1rem", backgroundColor: "#f0efe7", borderRadius: "12px", paddingBottom: "2.5rem" }}>
      <h2>Caldero Mágico</h2>

      <div className={`caldero ${estadoCaldero}`} aria-hidden="true">
        <div className="pata p1" />
        <div className="pata p2" />
        <div className="liquido" />
        <div className="burbujas"><span/><span/><span/><span/></div>
        <div className="humo"><div className="nube n1"/><div className="nube n2"/><div className="nube n3"/></div>
        <div className="chispa chispas-1" />
        <div className="chispa chispas-2" />
        <div className="chispa chispas-3" />
      </div>

      {!juegoGanado && (
        <button onClick={() => irAEscena("bosque_intro")} style={{ marginBottom: "1rem" }}>
          Aún no tengo suficientes elementos, voy a seguir buscando en el bosque
        </button>
      )}

      {!tieneLibro && (
        <p>'No te molestes. El Libro antiguo de los hechizos se ha perdido para siempre.'</p>
      )}

      {tieneLibro && !juegoGanado && (
        <>
          <p>Seleccioná objetos para echar al caldero:</p>
          <ul>
            {Array.isArray(inventario) && inventario.length > 0 ? (
              inventario.map((obj, idx) => (
                <li key={String(obj) + "-" + idx}>
                  <button onClick={() => agregarAlCaldero(obj)}>{obj}</button>
                </li>
              ))
            ) : (
              <li style={{ opacity: 0.7 }}>No tenés objetos en el inventario.</li>
            )}
          </ul>

          <p>Objetos en el caldero: {Array.isArray(objetosUsados) && objetosUsados.length ? objetosUsados.join(", ") : "Ninguno"}</p>

          <button onClick={prepararPocion} disabled={!Array.isArray(objetosUsados) || objetosUsados.length === 0}>
            Preparar Poción
          </button>
        </>
      )}

      {mostrarRecetas && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src= {libroantiguo}
            alt="Recetas del libro antiguo"
            style={{ maxWidth: "100%", border: "2px solid #333", borderRadius: "8px" }}
          />
        </div>
      )}

      {mensaje && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensaje}</p>}

      {juegoGanado && (
        <div style={{ marginTop: "1rem" }}>
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
