// src/data/bosque.js

export const bosque = {
  bosque_intro: {
    texto: "Empezás a caminar por un bosque y te empezás a ver diferentes caminos para tomar. Un campo inmenso de flores rojas, rosas, y violetas, un sendero de tierra rodeado de árboles de hojas doradas, una feria de artesanías antiguas, y pequeñas casitas entre el paisaje boscoso. ¿Qué camino tomás?",
    opciones: [
      { texto: "Sendero", imagen:"/images/sendero_bosque.avif", destino: "sendero_tierra", puntos: 5 },
      { texto: "Campo de flores", destino: "campo_flores", puntos: -5 },
      { texto: "Feria", destino: "feria_bosque", puntos: -5 },
      { texto: "Casitas", destino: "casitas_bosque", puntos: -5 }
    ]
  },
  sendero_tierra: {
    texto: "Las hojas doradas comienzan a caer como una lluvia incesante. ¿Qué hacés?",
    opciones: [
    { texto: "Seguir por el sendero. En algún momento pararán.", destino: "bares_bosque"}, 
    {texto: "Salirte del camino", destino: "cabana_bosque" }]
  },

bares_bosque: {
  texto: "Un poco más lejos y a ambos lados se llegan a ver dos lugares en donde te podrías cobijar por un rato. Uno parece una pulpería de la que te olvidás el nombre ni bien le quitás la vista. El otro es una pequeña casa de té.",
  opciones: [
    {texto:"Pulpería", destino: "pulperia"},
    {texto: "Casa de té", destino: "casa_de_te"}
  ]
},

pulperia: {
  texto: "La pulpería ofrece buena comida y sus paredes están adornadas con cuadros de la época en la que fue construida y objetos antiguos. Al momento de irte, te ofrecen llevarte alguna.",
  opciones: [
    {texto: "Me llevo esa asombrosa espada que cuelga de la pared.", objeto: "espada", destino: "arturo"},
    {texto: "No, gracias. Pero me voy a llevar la botella que me quedó un poco de vino", objeto: "botella", destino:"arturo"}
  ]
},

arturo: {
  texto: "Al salir del lugar, la lluvia de hojas se ha calmado. Sin embargo, luego de caminar un poco hay otro lugar que llama tu atención. Es un local pequeño atendido por un hombre entrado en años llamado Arturo, quien te ofrece algunas de las especias que él mismo hace, no sin antes hablarte sobre el lugar y advertirte de las sorpresas que te podés encontrar por el camino.",
  opciones: [
    {texto: "Llevás un dulce de leche. Para alguna merienda", destino: "atula_estatua"},
    {texto: "Llevás una sal natural hecha con 14 especias diferentes", destino: "atula_estatua", objeto: "sal"}
  ]
},
  

  atula_estatua: {
    texto: "Una estatua oscura y de aspecto femenino se ve a unos pasos. A sus pies yace una inscripción. Preferís que la inscripción diga:",
    opciones: [
      { texto: "Has encontrado la estatua de Atula. La contemplación de su figura y la lectura de este escrito la hará cobrar vida. Tu destino está marcado.", destino: "atula_vida" },
      { texto: "Has encontrado la estatua de Atula. Bienaventurada seas. Tu fe en ella te ayudará a seguir por este bosque", destino: "pasos_bosque" }
   ]
  },
  atula_vida: {
    texto: "La inmovilidad de la estatua se convierte en una mujer enorme y de aspecto macabro. Inmediatamente te mira con ojos fijos y furiosos. De a poco, levanta una mano para atacarte con alguna magia. ¿Qué hacés en esta situación?",
    opciones: [
      {texto: "Desenvaino la espada que me llevé de La Protegida y se la clavó en el corazón. O donde pueda.", destino: "atula_espada", requiere: "espada"},
      {texto: "Desesperada, le tiro la sal de Arturo en los ojos.", destino: "atula_sal", requiere: "sal"},
      {texto: "Salgo corriendo. Y rezo porque corramos bien rápido", destino: "atula_correr"},
      {texto: "Le parto la botella de vino en la cabeza. Total ya está vacía", destino: "atula_botella", requiere: "botella"}
    ]
  },

  atula_espada: {
    texto: "Fuiste la Diego de la Vega del pueblo y Atula queda cortada en dos. Este es el fin de este recorrido.",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir hacia la calle y buscar el auto", destino: "calle_inicio"}
    ],
    final: true
  },

    atula_sal: {
    texto: "¡Esa sí que no se la vio venir! La sal de Arturo al parecer tenía propiedades muy poderosas e hizo que Atula se quemara y se desintegre. LLegaste al final del recorrido",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir hacia la calle y buscar el auto", destino: "calle_inicio"}
    ],
    final: true
  },

    atula_botella: {
    texto: "Uff... Le partista la cabeza. LLegaste al final del recorrido",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir hacia la calle y buscar el auto", destino: "calle_inicio"},
    ],
    final: true
  },

  casa_de_te: {
    texto: "La casa de té es bonita, acogedora, tiene sillas cómodas en donde sentarse y mesitas de madera. El lugar está completamente vacío. A través de la ventana, se puede observar cómo la lluvia de hojas doradas continúa sin cesar. Mientras miramos, se sienten los pasos de alguien que nos viene a atender. Es una anciana algo encorvada y de cabello muy blanco. Nos entrega la carta del lugar.",
    opciones:  [
      {texto: "Hacés un comentario liviano sobre el clima para distender un poco.", destino: "historia_te"},
      {texto: "Simplemente mirás la carta", destino: "carta_te"}
    ]
  },

  carta_te: {
    texto: "",
    opciones: [
      {texto: "Té de hierbas azules", destino: "afuera_casa_te", objeto: "hierbas azules"},
      {texto: "Té de hierbas rojas", destino: "afuera_casa_te", objeto: "hierbas rojas" },
      {texto: "Té de hierbas verdes", destino: "afuera_casa_te", objeto: "hierbas verdes"},
      {texto: "Té de hierbas doradas", destino: "afuera_casa_te", objeto: "hierbas doradas"}
    ]
  },

  historia_te: {
    texto: "",
    opciones: [
      {texto: "Continuar", destino: "carta_te"}
    ]
  },

 afuera_casa_te: {
  texto: "Ya afuera de la Casa de Té, das unos pasos y mirás el cielo",
  opciones: [
    {texto: "La lluvia de hojas doradas se arremolina allí arriba sobre las copas de los árboles y se dirigen hacia un solo lugar, indicándote hacia dónde ir.", requiere: "hierbas rojas", },
    {texto: "Las hojas calman su furia poco a poco y te quedás hasta ver cómo la última de ellas toca la tierra para quedarse allí.", requiere: "hierbas azules"},
    {texto: "Las hojas doradas se van tornando de un color más amarillo hasta llegar a ser completamente verdes. Algunas, incluso, se posan en las ramas como si siempre hubieran estado allí. La lluvia cesa y crecen algunas flores. Caminás un poco y encontrás un campo primaveral.", requiere: "hierbas verdes", destino: "campo_flores"},
    {texto: "Hay más y más hojas cayendo desde el cielo sin ton ni son. Serán más del doble que antes, aunque tus ojos entrecerrados no logran ver mucho. Te tapás la cara con un brazo y avanzás entre la tormenta de hojas doradas.", requiere: "hierbas doradas"}
  ]
 },

  calle_inicio: {
    texto: "En el auto de vuelta, en marcha sobre la ruta. ¿Para dónde vamos?",
    opciones: [
      {texto: "Buenos Aires", destino: "norte_objetos"},
      {texto: "La Costa", destino: "sur_objetos"}
    ]
  },  

  campo_flores: {
    texto: "El campo es realmente inmenso. Hay flores y más flores hacia todas partes.",
    opciones: [
      { texto: "Seguir caminando y mirando las flores", destino: "perderse" },
      { texto: "Tomar una flor y sentir el aroma", destino: "oler_flor" }]
  },

  perderse:{
    texto: "En la inmensidad te perdiste. Todo se ve igual para cualquier lado que mires",
    opciones: [
      { texto: "Voy a ir desde donde creo que vine", destino: "cabana_bosque"},
      { texto: "No, seguro estoy desorientada. Voy a tomar el camino contrario", destino: "puente"}  
    ]
  },

  oler_flor: {
    texto: "Las flores rosas parecen brillar más que ninguna, pero las rojas llaman tanto la atención... Y las violetas, tan particulares.",
    opciones: [
      { texto: "Rosas", destino: "lucy_sky", imagen:"/images/" },
      { texto: "Rojas", destino: "", imagen:"/images/" },
      { texto: "Violetas", destino: "", imagen:"/images/"}
      ]
  },

  lucy_sky: {
    texto: "Un mundo nuevo se abre. A lo lejos se ve un río, y a los lados árboles de mandarina que se abren paso debajo de cielos de mermelada. Sentís una voz que te habla cerca y le contestás despacio. La voz es de:",
    opciones: [
      {texto: "Tu propia imaginación", destino: "bote"},
      {texto: "Una chica con ojos de caleidoscopio", destino: "bote", puntos: 10},
      {texto: "Una chica con ojos de videotape", destino: "bote"},
      {texto: ""}
    ]
  },

  feria_bosque: {
    texto: "",
    opciones: [
      {texto: "Poción de la suerte", imagen: "", costo: 50},
      {texto: "Espejo mágico", imagen: "", costo: 30},
      {texto: "Libro antiguo", imagen: "", costo: 15},
      {texto: "Piedra", imagen: "", costo: 15}
    ]
  },


  cabana_bosque: {
    texto: "Te agitaste y perdiste.",
    opciones: [
      { texto: "Entrar en la cabaña", destino: "fin_cabana" },
      { texto: "Rodearla y seguir", destino: "fin_bosque" }
    ]
  },
  fin_cabana: {
    texto: "Un anciano sabio te da un mapa mágico. ¡Ganás 10 puntos!",
    opciones: [{ texto: "Volver al inicio", destino: "inicio", puntos: 10 }]
  },

  casitas_bosque: {
    texto: "Caminando entre las casitas del bosque ves una que te llama la atención. Porque a pesar de que todas son muy similares, esta tiene a unos pasos de su puerta un árbol del que sale un hongo inmenso y de un color naranja brillante.",
    opciones: [
      {texto: "Tomarle una fotografía al hongo", requiere: "cámara", destino: "viejo_casa"},
      {texto: "Seguir caminando", destino: "lago_juego" }
    ]
  },

  viejo_casa: {
    texto: "Un viejo sale de la casa y te ve fotografiando el hongo. Te ofrece llevártelo.",
    opciones: [
      {texto: "Le agradecés y seguís"},
      {texto: "Te llevás el hongo"}
    ]
  },

  fin_bosque: {
    texto: "Descubrís un claro con un lago escondido. Paz total.",
    opciones: [{ texto: "Volver al inicio", destino: "inicio", puntos: 5 }]
  }
};