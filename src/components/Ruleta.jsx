import React, { useEffect, useState, useRef } from "react";

function Ruleta({ numeroGanador = 1, girando = false }) {
  const [angulo, setAngulo] = useState(0);
  const rafRef = useRef(null);

  // helper: calcula rotación objetivo en grados para que la sección "numeroGanador"
  // quede en el indicador superior (-90°). Añadimos `vueltas` completas para animar.
  const calcularRotacionObjetivo = (numero, vueltas = 4) => {
    const sectorSize = 360 / 5; // 72
    const centro = (numero - 1) * sectorSize + sectorSize / 2; // centro de la sección
    // queremos que centro + rotación = -90  -> rotación = -90 - centro
    const base = -90 - centro;
    return vueltas * 360 + base;
  };

  useEffect(() => {
    // limpieza
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (girando) {
      // animación con requestAnimationFrame (easeOutCubic)
      const objetivo = calcularRotacionObjetivo(numeroGanador, 4); // 4 vueltas
      const duracion = 3000;
      let inicio = null;

      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function animar(timestamp) {
        if (!inicio) inicio = timestamp;
        const tiempo = timestamp - inicio;
        const progreso = Math.min(tiempo / duracion, 1);
        const eased = easeOutCubic(progreso);
        const ang = eased * objetivo;
        setAngulo(ang);

        if (progreso < 1) {
          rafRef.current = requestAnimationFrame(animar);
        } else {
          rafRef.current = null;
          // asegurar que quede exactamente en el objetivo final
          setAngulo(objetivo);
        }
      }

      // cancelar cualquier raf previo
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animar);
    } else {
      // si no está girando, calculamos posición estática para el numeroGanador
      const objetivo = calcularRotacionObjetivo(numeroGanador, 0); // sin vueltas
      // normalizamos a un valor entre 0..360 para buena transición CSS
      const normalized = ((objetivo % 360) + 360) % 360;
      setAngulo(normalized);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [girando, numeroGanador]);

  const secciones = [1, 2, 3, 4, 5];
  const size = 200;
  const center = size / 2;
  const radius = 90;
  const sectorSize = 360 / secciones.length;

  return (
    <div style={{ position: "relative", width: size, height: size, margin: "auto" }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          transform: `rotate(${angulo}deg)`,
          transformOrigin: `${center}px ${center}px`,
          transition: girando ? "none" : "transform 600ms cubic-bezier(.22,.98,.35,1)"
        }}
      >
        {secciones.map((num, i) => {
          const startAngle = i * sectorSize;
          const largeArcFlag = sectorSize > 180 ? 1 : 0;
          const x1 = center + radius * Math.cos((Math.PI / 180) * startAngle);
          const y1 = center + radius * Math.sin((Math.PI / 180) * startAngle);
          const x2 = center + radius * Math.cos((Math.PI / 180) * (startAngle + sectorSize));
          const y2 = center + radius * Math.sin((Math.PI / 180) * (startAngle + sectorSize));
          const pathData = `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
          const color = i % 2 === 0 ? "#f44336" : "#2196f3";
          const textAngle = startAngle + sectorSize / 2;
          const textX = center + (radius - 30) * Math.cos((Math.PI / 180) * textAngle);
          const textY = center + (radius - 30) * Math.sin((Math.PI / 180) * textAngle);

          return (
            <g key={i}>
              <path d={pathData} fill={color} stroke="#000" strokeWidth="2" />
              <text
                x={textX}
                y={textY}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="18"
                fill="#fff"
                fontWeight="bold"
                style={{ pointerEvents: "none" }}
              >
                {num}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Indicador (triángulo arriba) */}
      <div
        style={{
          position: "absolute",
          top: -6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderBottom: "18px solid black",
          zIndex: 10
        }}
      />
    </div>
  );
}

export default Ruleta;
