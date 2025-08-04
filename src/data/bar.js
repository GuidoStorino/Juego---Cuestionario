export const bar = {
    bar: {
        texto:"El bar es espacioso, de luz tenue y paredes de piedra. Hay gente, pero no está lleno. Para sentarte, elegís la barra. Una moza joven con el pelo recogido se acerca y te ofrece escanear el código QR o la carta en papel.",
    opciones: [
      { texto: "QR", destino: "carta_qr"},
      { texto: "Carta en papel", destino: "carta_papel"}
    ]
  },

carta_papel: {
  texto: "La moza te sonríe. 'Hace mucho que alguien no elige el QR', dice. Busca una carta que estaba detrás de ella y se retira. Al mirar la carta, te sorprendés con la descripción de algunos tragos y decidís cuál tomar.",
  opciones: [
    {texto: "Un trago que te permite escanear a la gente (sin que lo sepan) y averiguar cosas sobre ellos.", destino: "escaneo_gente"},
    {texto: "Un trago que te permite tener la capacidad de conectar con las personas que te interesan y llegar a buenas conversaciones.", destino: "buenas_conversaciones"},
    {texto: "Un trago que te permite conseguir la comida que quieras cuando quieras.", destino: "comida_infinita"}
  ]
},

comida_infinita: {
  texto: "¿Qué es lo primero que pedís en el bar teniendo este poder?",
  opciones: [
    {texto: "Sushi", destino: "comida_casa"},
    {texto: "Asado", destino: "comida_casa"},
    {texto: "Hamburguesa", destino: "comida_casa"},
    {texto: "Otra", destino: "comida_casa"}
  ],
},

comida_casa: {
  texto: "Estando ya en tu casa, ¿qué es lo que harías?",
  opciones: [
    {texto: "Elijo una comida para tener por los siguientes seis meses, a ver si se me acaba el poder", destino: "comida_seis_meses"},
    {texto: "Voy viendo día a día qué quiero comer", destino: "comida_dia"}
  ]
},

comida_seis_meses: {
  texto: "¿Cuál?",
  textoLibre: true,
  validarTexto: (input) => {
    return {
      destino: "agradecimiento",
      guardar: { clave: "mensajeFinal", valor: input }
    };
  }
},

comida_dia: {
  texto: "¿Qué comerías el primer día y por qué? ¿Qué comerías en nuestro próximo sábado juntos y por qué?",
  textoLibre: true,
  validarTexto: (input) => {
    return {
      destino: "agradecimiento",
      guardar: { clave: "mensajeFinal", valor: input }
    };
  }
},

agradecimiento: {
  texto: "Gracias por jugar. Tu recompensa es tener este superpoder. Ah, y lo más importante de todo: no te preocupes, esta comida mágica no engorda. ¡A comer!",
  final: true,
  opciones: [
    {texto: "Volver al bar", destino: "bar"},
    {texto: "Salir a la calle", destino: "calle_inicio"}
  ]
},

buenas_conversaciones: {
texto: "",
opciones: [
  { texto: "Un chabón sentado tomando una copa de vino que sabría perfectamente cuál vino va con vos.", destino: "test_vino"},
  { texto: "Un hombre viejo en la punta del bar con la mirada fija en la nada que conoce cada secreto de lo que parece solamente un simple bar.", destino: "barhistorias"},
  { texto: "Hay una persona sentada comiendo muy tranquilamente. Pero lo mirás bien. Y mejor. Notás que tiene una miguita en la comisura del labio...", destino: "miguita_comisura"}
]
},

test_vino: {
  texto: "",
  opciones: [{texto: ""}]
},

escaneo_gente: {
  texto: "Mirás atentamente a la gente del lugar y hay algunos de ellos que logran captar tu atención.",
  opciones: [
    {texto: "Una persona que vio muchas películas y quiere saber sobre algunas que viste vos", destino: "TorneoImagenes"},
    {texto: "Un hombre que parece muy tranquilo en realidad está tramando algo sucio. Un cómplice va a caer al bar en cualquier momento para realizar un robo.", destino: "baraccion", resetPerfil: true},
    {texto: ""},
    {texto: "Me mirás a los ojos y se provoca un efecto inverso. De repente no te recuerdo y tenés que volver a hacer que me acuerde de vos.", destino: "barromance"}
  ]
},

TorneoImagenes: {
  texto: "",
  opciones: [{texto: ""}],
  id: "test_vino"
},

}