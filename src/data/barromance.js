export const barromance = {

barromance: {
  texto: "Primer lugar que visitamos juntos",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "navarro") {
      return {
        destino: "arab_strap",
        puntos: 10,
        guardar: { clave: "navarro", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: -5
      };
    }}},
    arab_strap: {
  texto: "Primera canción que bailamos juntos",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "the boy with the arab strap") {
      return {
        destino: "tanga",
        puntos: 10,
        guardar: { clave: "arab_strap", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        tanga: {
  texto: "Color de la primera tanga que usaste conmigo",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "celeste") {
      return {
        destino: "pelicula",
        puntos: 10,
        guardar: { clave: "tanga", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        pelicula: {
  texto: "Primera película que vimos los dos juntos ",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "homesick") {
      return {
        destino: "primer_recital",
        puntos: 10,
        guardar: { clave: "pelicula", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        primer_recital: {
  texto: "Primer recital al que fuimos ",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "la empoderada") {
      return {
        destino: "provincia",
        puntos: 10,
        guardar: { clave: "recital", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        provincia: {
  texto: "Primera provincia que visitamos ",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "san luis") {
      return {
        destino: "primera_serie",
        puntos: 10,
        guardar: { clave: "provincia", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        primera_serie: {
  texto: "Primera serie que vimos juntos ",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "ted lasso") {
      return {
        destino: "primer_juego",
        puntos: 10,
        guardar: { clave: "serie", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        primer_juego: {
  texto: "Primer juego que me hiciste y culpable de todo lo que vino después ",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "cuestionario") {
      return {
        destino: "pelicula_tarantino",
        puntos: 10,
        guardar: { clave: "cuestionario", valor: input }
      };
    } else {
      return {
        destino: "escena_incorrecta",
        puntos: 0
      };
    }}},
        pelicula_tarantino: {
  texto: "Primera película de Tarantino que vimos ",
  textoLibre: true,
  validarTexto: (input) => {
    if (input.toLowerCase().trim() === "bastardos sin gloria") {
      return {
        destino: "",
        puntos: 10,
        guardar: { clave: "bastardos", valor: input }
      };
    } else {
      return {
        destino: "memoria_restaurada",
        puntos: 0
      };
    }}},
    escena_incorrecta: {
      texto: "No logro recuperar la memoria...",
      opciones: [
        {texto: "Volver a jugar", destino: "barromance"},
        {texto: "Volver al bar", destino: "bar"}
      ],
      final: true
    },
    memoria_restaurada: {
    texto: "Uff... Ya me acuerdo de todo. Ey! Mirá, nos ganamos un free pass.",
    opciones: [
        {texto: "Tomar el free pass y volver al bar", objeto: "Free Pass", destino: "bar" },
        {texto: "Agarrarlo y salir del bar", objeto: "Free Pass", destino: "calle_inicio"}
    ],
    final: true
},
  
  
  }