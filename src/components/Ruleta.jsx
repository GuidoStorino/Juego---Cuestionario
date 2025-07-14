import React, { useEffect, useState } from "react";

function Ruleta({ numeroGanador, girando }) {
  const [angulo, setAngulo] = useState(0);

  useEffect(() => {
    if (girando) {
      const totalGiros = 360 * 4 + (numeroGanador - 1) * 72; // 5 secciones = 360/5 = 72 grados
      const duracion = 3000;
      let inicio = null;

      function animar(timestamp) {
        if (!inicio) inicio = timestamp;
        const tiempoPasado = timestamp - inicio;
        const progreso = Math.min(tiempoPasado / duracion, 1);
        const anguloActual = progreso * totalGiros;
        setAngulo(anguloActual);
        if (progreso < 1) {
          requestAnimationFrame(animar);
        }
      }

      requestAnimationFrame(animar);
    } else {
      setAngulo((numeroGanador - 1) * 72);
    }
  }, [girando, numeroGanador]);

  const secciones = [1, 2, 3, 4, 5];

  return (
    <div style={{ position: "relative", width: 200, height: 200, margin: "auto" }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{
          transform: `rotate(${angulo}deg)`,
          transition: girando ? "none" : "transform 0.5s ease-out"
        }}
      >
        {secciones.map((num, i) => {
          const startAngle = i * 72;
          const largeArcFlag = 72 > 180 ? 1 : 0;
          const x1 = 100 + 90 * Math.cos((Math.PI / 180) * startAngle);
          const y1 = 100 + 90 * Math.sin((Math.PI / 180) * startAngle);
          const x2 = 100 + 90 * Math.cos((Math.PI / 180) * (startAngle + 72));
          const y2 = 100 + 90 * Math.sin((Math.PI / 180) * (startAngle + 72));
          const pathData = `M100,100 L${x1},${y1} A90,90 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
          const color = i % 2 === 0 ? "#f44336" : "#2196f3";

          return (
            <g key={i}>
              <path d={pathData} fill={color} stroke="#000" strokeWidth="2" />
              <text
                x={100 + 60 * Math.cos((Math.PI / 180) * (startAngle + 36))}
                y={100 + 60 * Math.sin((Math.PI / 180) * (startAngle + 36))}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="18"
                fill="#fff"
                fontWeight="bold"
              >
                {num}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Indicador */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          marginLeft: -10,
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "20px solid black"
        }}
      />
    </div>
  );
}

export default Ruleta;
