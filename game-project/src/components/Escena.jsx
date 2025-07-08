function Escena({ escena, avanzar, elegirObjeto }) {
  return (
    <div>
      <h2>{escena.texto}</h2>

      {escena.objetos && (
        <div>
          {escena.objetos.map((obj, idx) => (
            <button key={idx} onClick={() => elegirObjeto(obj)} style={{ margin: "5px" }}>
              {obj}
            </button>
          ))}
        </div>
      )}

      {escena.opciones && (
        <div>
          {escena.opciones.map((op, idx) => (
            <button key={idx} onClick={() => avanzar(op.destino, op.puntos || 0)} style={{ margin: "5px" }}>
              {op.texto}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Escena;
