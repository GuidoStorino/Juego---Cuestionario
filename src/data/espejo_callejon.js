import paredon from '../assets/paredon.jpg';

export const espejo_callejon = {
    espejo_callejon: {
        texto:"La calle es larga y oscura, la pared de gran tamaño.",
    opciones: [
      { texto: "Mirar el paredón", mensaje: paredon, requiere: "Linterna"},
      { texto: "Ir a la calle", destino: "calle_callejon"},
    ]
  },

  calle_callejon: {
    texto: "Las calles "
  },

  ferreteria_callejon:{
    id: "codigo_ferreteria",
    texto: "🔒 Ingrese el código para desbloquear.",
  opciones: [], 
  requiereCodigo: true,
  codigoCorrecto: "",
  desbloquea: [
    {texto: ""}
  ]
},
  
}