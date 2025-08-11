export const duende_tesoro = {

    duende_tesoro: {
        id: "duende_tesoro",
        opciones: [
            {texto: "Rocho", imagen: "/Juego---Cuestionario/game-project/public/images/leprechaun.png", mensaje: "Rock tiene el tesoro"},
            {texto: "Robbie", imagen: "/Juego---Cuestionario/game-project/public/images/leprechaun.png", mensaje: "Uno de nosotros miente"},
            {texto: "Rock", imagen: "/Juego---Cuestionario/game-project/public/images/leprechaun.png", mensaje: "Rocho no tiene el tesoro"},
            {texto: "Rooney", imagen: "/Juego---Cuestionario/game-project/public/images/leprechaun.png", mensaje: "Tanto tiempo hace que estamos aquí. Rowling, quien más. Rock, quien menos."},
            {texto: "Rocco", imagen: "/Juego---Cuestionario/game-project/public/images/leprechaun.png", mensaje: "Yo no sé quién tiene el tesoro, no sé de esas cosas. No estoy aquí hace tan poco como Rock, pero tampoco hace tanto como Rowling, Sólo sé que no se lo darían a quien acusa a otro de traición. Eso es una traición. Pero no me pregunten. No sé quién lo tiene."},
            {texto: "Rowling", imagen: "/Juego---Cuestionario/game-project/public/images/leprechaun.png", mensaje: "El tesoro no se le deja nunca al más anciano, pero mucho menos se le confía al más joven"},
            {texto: "❗Ya tengo las respuestas a sus preguntas", destino: "pregunta1"}
        ]
    },

pregunta1: {
  texto: "¿Quién miente?",
  id: "duende_2",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "rocho") {
      return {
        destino: "pregunta2",
        dinero: 10,
        guardar: { clave: "duende_mentiroso", valor: input }
      };
    } else {
      return {
        destino: "respuesta_incorrecta",
        dinero: -10
      };
    }}},
pregunta2: {
  texto: "¿De quién habla Rocco cuando dice 'a quien acusa a otro de traición'?",
  id: "duende_3",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "robbie") {
      return {
        destino: "pregunta3",
        dinero: 10,
        guardar: { clave: "traidor", valor: input }
      };
    } else {
      return {
        destino: "respuesta_incorrecta",
        dinero: -10
      };
    }}},
pregunta3: {
  texto: "¿Quién tiene el tesoro?",
  id: "duende_4",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "rooney") {
      return {
        destino: "tesoro_duende",
        dinero: 10,
        guardar: { clave: "tesorero", valor: input }
      };
    } else {
      return {
        destino: "respuesta_incorrecta",
        dinero: -20
      };
    }}},
    respuesta_incorrecta: {
  texto: "Los duendes han logrado engañarte",
  id: "duende_5",
  opciones: [
    {texto: "Intentar de vuelta", destino: "duende_tesoro"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Salir a la calle, no quiero perder más dinero", destino: "calle_inicio"}
  ]
},
    tesoro_duende: {
  texto: "Has acertado cada una de las preguntas y trampas propuestas por los seis duendes del bosque. A regañadientes, desentierran el tesoro y te lo entregan.",
  id: "duende_4",
        opciones: [
            {texto: "Tomar el tesoro", mensaje: "Piedra de cuarzo rosa", destino: "tesoro_duende", objeto: "Piedra de Cuarzo rosa"},
            {texto: "Continuar en el bosque", destino: "bosque_intro"},
            {texto: "Salir a la calle", destino: "calle_inicio"}
        ]
    }}