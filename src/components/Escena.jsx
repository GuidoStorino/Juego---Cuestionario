// src/components/Escena.jsx
import React, { useState } from "react";
import EscenaCasino from "./EscenaCasino";
import AlertaModal from "./AlertaModal";
import MiniJuegoImagenes from './MiniJuegoImagenes';



function Escena({ escena, avanzar, elegirObjeto, actualizarEscena, guardarRespuesta }) {
  const [input, setInput] = useState("");
  const [alerta, setAlerta] = useState(null);
  const [inputCodigo, setInputCodigo] = useState("");
const [codigoValido, setCodigoValido] = useState(false);


  const manejarTextoLibre = () => {
    if (escena.validarTexto && typeof escena.validarTexto === "function") {
      const resultado = escena.validarTexto(input);
      if (resultado) {
        if (resultado.guardar && guardarRespuesta) {
          guardarRespuesta(resultado.guardar.clave, resultado.guardar.valor);
        }
        if (resultado.destino) {
          avanzar(resultado.destino, resultado.puntos || 0, resultado.dinero || 0);
        }
      }
    }
  };




    if (escena.tipo === "casino") {
    return <EscenaCasino escena={escena} avanzar={avanzar} />;
  }

   const opcionesParaMostrar =
    (codigoValido && Array.isArray(escena.desbloquea))
      ? escena.desbloquea
      : (Array.isArray(escena.opciones) ? escena.opciones : []);

      return (
    <div>
      <p
        style={escena.final
          ? { textAlign: "center", padding: 20, animation: "fadeIn 2s" }
          : {}}
      >
        {typeof escena.texto === "function" ? escena.texto(escena.estado || {}) : escena.texto}
      </p>

        {escena.requiereCodigo && !codigoValido && (
  <div>
    <p>Ingresá el código para continuar:</p>
    <input
      type="text"
      value={inputCodigo}
      onChange={(e) => setInputCodigo(e.target.value)}
    />
    <button
      onClick={() => {
        if (inputCodigo === escena.codigoCorrecto) {
          setCodigoValido(true);
          setAlerta("✅ Código correcto. Opciones desbloqueadas.");
        } else {
          setAlerta("❌ Código incorrecto.");
        }
      }}
    >
      Verificar
    </button>
  </div>
)};



      {(codigoValido ? escena.desbloquea : escena.opciones || []).map((op, i) => {
  // (tu lógica de botón actual)
        const requiere = op.requiere;
        const tieneRequisito = !requiere || (escena.inventario && escena.inventario.includes(requiere));
        

        return (

          
          <button
            key={i}
            onClick={() => {
              if (requiere && !tieneRequisito) {
                setAlerta(`⚔️ Necesitás ${requiere} para hacer esto.`);
                return;
              }
                if (op.mensaje) {
                setAlerta(op.mensaje);
              }
               if (op.objeto) {
                elegirObjeto(op.objeto); // ✅ se permite tomarlo múltiples veces
              }
              avanzar(op.destino, op.puntos || 0, op.dinero || 0, op.fichas || 0, op.personalidad, op.resetPerfil);

            }}
            style={{
              display: "block",
              margin: "8px 0",
              border: "none",
              background: "none",
              padding: 0,
              cursor: "pointer"
            }}
          >
            {op.imagen ? (
              <img
                src={op.imagen}
                alt={op.texto}
                style={{ width: "100%", maxWidth: 300, borderRadius: "8px" }}
              />
            ) : (
              op.texto
            )}
          </button>
        );
      })}

      {escena.objetos && escena.objetos.map((obj, i) => (
        <button
          key={i}
          onClick={() => elegirObjeto(obj.nombre)}
          style={{ display: "block", margin: "8px 0" }}
        >
          Tomar {obj.nombre}
        </button>
      ))}

      {escena.objetosComprar && escena.objetosComprar.map((obj, i) => (
        <button
          key={i}
          onClick={() => elegirObjeto(obj.nombre, obj.costo || 0)}
          style={{ display: "block", margin: "8px 0" }}
        >
          Comprar {obj.nombre} (${obj.costo || 0})
        </button>
      ))}

      {escena.textoLibre && (
        <div style={{ marginTop: 16 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí tu respuesta..."
            style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
          />
          <button onClick={manejarTextoLibre} style={{ marginTop: 8 }}>Enviar</button>
        </div>
      )}

      {escena.volver && (
        <button onClick={escena.volver} style={{ marginTop: "16px" }}>
          Quiero volver sobre mis pasos
        </button>
      )}

      {alerta && <AlertaModal mensaje={alerta} cerrar={() => setAlerta(null)} />}
    </div>
  );
}

export default Escena;
