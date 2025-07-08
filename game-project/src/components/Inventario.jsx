function Inventario({ inventario }) {
  if (inventario.length === 0) return null;

  return (
    <div style={{ marginBottom: 20 }}>
      <strong>Inventario:</strong> {inventario.join(", ")}
    </div>
  );
}

export default Inventario;
