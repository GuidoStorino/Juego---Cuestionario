// src/data/bosque.js
import pasto from '../assets/pasto.png';

export const bosque = {
  bosque_intro: {
    texto: "Empezás a caminar por un bosque y te empezás a ver diferentes caminos para tomar. Un campo inmenso de flores rojas, rosas, y violetas, un sendero de tierra rodeado de árboles de hojas doradas, una feria de artesanías antiguas, y pequeñas casitas entre el paisaje boscoso. ¿Qué camino tomás?",
    opciones: [
      { texto: "Sendero", imagen: "/Juego---Cuestionario/game-project/public/images/Senderobosque.jpg", destino: "sendero_tierra", puntos: 5 },
      { texto: "Campo de flores", destino: "campo_flores", imagen: "/Juego---Cuestionario/game-project/public/images/", puntos: -5 },
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
    {texto: "Casa de té", destino: "casadete"}
  ]
},

pulperia: {
  texto: "La pulpería ofrece buena comida y sus paredes están adornadas con cuadros de la época en la que fue construida y objetos antiguos. Al momento de irte, te ofrecen llevarte alguna.",
  opciones: [
    {texto: "Me llevo esa asombrosa espada que cuelga de la pared.", objeto: "Espada", destino: "arturo"},
    {texto: "No, gracias. Pero me voy a llevar la botella que me quedó un poco de vino", objeto: "Botella", destino:"arturo"}
  ]
},

arturo: {
  texto: "Al salir del lugar, la lluvia de hojas se ha calmado. Sin embargo, luego de caminar un poco hay otro lugar que llama tu atención. Es un local pequeño atendido por un hombre entrado en años llamado Arturo, quien te ofrece algunas de las especias que él mismo hace, no sin antes hablarte sobre el lugar y advertirte de las sorpresas que te podés encontrar por el camino.",
  opciones: [
    {texto: "Llevás un dulce de leche. Para alguna merienda", destino: "atula_estatua"},
    {texto: "Llevás una sal natural hecha con 14 especias diferentes", destino: "atula_estatua", objeto: "Sal"}
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
      {texto: "Desenvaino la espada que me llevé de La Protegida y se la clavó en el corazón. O donde pueda.", destino: "atula_espada", requiere: "Espada"},
      {texto: "Desesperada, le tiro la sal de Arturo en los ojos.", destino: "atula_sal", requiere: "Sal"},
      {texto: "Salgo corriendo. Y rezo porque corramos bien rápido", destino: "atula_correr"},
      {texto: "Le parto la botella de vino en la cabeza. Total ya está vacía", destino: "atula_botella", requiere: "Botella"}
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

  pasos_bosque: {
    texto: "Evidentemente Atula no nos ayudó porque se te cruza un forastero y nos pide todo nuestro dinero bajo amenaza de muerte",
    opciones: [
      {texto: "Lo asesinás con la espada", requiere: "Espada", destino: "forastero_espada"},
      {texto: "Le tirás la sal que te llevaste de Arturo", requiere: "Sal", destino: "forastero_sal"},
      {texto: "Lo peleás a puño limpio", destino: "forastero_punos",},
      {texto: "Le das el dinero", destino: "dinero_robado"}
    ]
  },

  forastero_espada: {
    texto: "Le pegaste un espadazo y le hiciste sangrar toda la cara. Ya está corriendo a buscar a su mamá.",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir a la calle y buscar el auto", destino: "calle_inicio"}
    ],
    final: true
  },

    forastero_sal: {
    texto: "La sal le entró en los ojos pero pronto se recompuso. Suerte que vinieron un total de 7 (SÍ, SIETE) perros a salvarnos.",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir a la calle y buscar el auto", destino: "calle_inicio"}
    ],
    final: true
  },

    forastero_punos: {
    texto: "Nunca se vio venir esa derecha a mano cerrada. Lo noqueaste como una campeona.",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir a la calle y buscar el auto", destino: "calle_inicio"}
    ],
    final: true
  },

    forastero_espada: {
    texto: "Bueno, sirvió para que no nos mate. Pero nos robó todo el dinero.",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir a la calle y buscar el auto", destino: "calle_inicio"}
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
    texto: "En la inmensidad te perdiste. Todo se ve igual para cualquier lado que mires. Al caminar un poco más, allá a lo lejos, se ve un puente. Mientras lo estás cruzando, ves que hay",
    opciones: [
      { texto: "un duende del otro lado", destino: "duende_tesoro"},
      { texto: "y una sirena mirándote desde el agua", destino: "sirena_puzzle"}  
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
      {texto: "Tu propia imaginación", destino: "no_drogada"},
      {texto: "Una chica con ojos de caleidoscopio", destino: "ojos_sol", puntos: 10},
      {texto: "Una chica con ojos de videotape", destino: "no_cancion"},
      {texto: ""}
    ]
  },

    no_drogada: {
    texto: "Bueno, parece que la flor rosa no hizo demasiado efecto en vos y estás lo suficientemente consciente para saber que todo era producto de tu imaginación, ¿no?",
    opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir a la calle", destino: "calle_inicio"},
      {texto: "Ah, ¿sí? Me gustaría volver a probar una flor", destino: "oler_flor"}
    ],
    final: true
  },

  no_cancion: {
    texto: "La flor rosa te dejó tan confundida que hasta confundiste la canción, el caleidoscopio con el cassette y a Charly con Paul. También perdiste algo de dinero por el camino. Mejor quedarse quieto unos minutos, tomar aire y pensar con claridad.",
        opciones: [
      {texto: "Volver a la feria", destino: "feria_bosque"},
      {texto: "Salir a la calle", destino: "calle_inicio"},
      {texto: "Ah, ¿sí? Me gustaría volver a probar una flor", destino: "oler_flor"}],
      final: true
  },

  ojos_sol: {
    texto: "Ahora las flores se tornan verdes y amarillas, y se elevan por sobre tu cabeza. Buscas a la chica que tiene en sus ojos... ¿qué?",
    opciones: [
      {texto: "El sol", destino: "puente_fuente"},
      {texto: "Papel", destino: "no_cancion"},
      {texto: "Que las flores cambien de color hasta lo podría pensar, pero ¿que 'se eleven sobre mi cabeza'?", destino: "no_drogada"}
    ]
  },

    puente_fuente: {
    texto: "La seguís hasta un puente junto a una fuente, en donde todo el mundo te sonríe mientras pasas a través de las flores, mientras está comiendo...",
    opciones: [
      {texto: "Un volcán de chocolate", destino: "no_cancion"},
      {texto: "Pasteles de malvavisco", destino: "bote"},
      {texto: "El campo estaba vacío cuando llegué, ¿de dónde salió toda esta gente", destino: "no_drogada"}
    ]
  },

  bote: {
    texto: "La chica se fue. Estás en la orilla de un río, en donde hay un bote con una persona. Tiene unos 83 años, pero se ve tan vital como a sus 20. Te mira con una sonrisa y te saluda con un acento inglés. De Liverpool, para ser más precisos. Te dice que se llama Paul, y en sus manos lleva una guitarra acústica. Le podés pedir una canción y solamente una canción. ¿Cuál?",

    textoLibre: true,
    validarTexto: (input) => ({
    destino: "bajo",
    guardar: { clave: "motivacion", valor: input }
    }),
    guardarRespuesta: (clave, valor) => {
    localStorage.setItem(clave, valor); // podés hacer algo más sofisticado si querés
  }
    },

    bajo: {
      texto: "Una gran elección. Llegaste al final de este camino. Felicitaciones. Te ganaste este hermoso bajo Höfner", imagen: "PinturaSalaBar.png",
      opciones: [
        {texto: "Salir a la calle", destino: "calle_inicio", imagen: "PinturaSalaBar.png"}
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
      { texto: "Entrar en la cabaña", destino: "cabana_juego" },
      { texto: "Rodearla y seguir", destino: "fin_bosque" }
    ]
  },

  casitas_bosque: {
    texto: "Caminando entre las casitas del bosque ves una que te llama la atención. Porque a pesar de que todas son muy similares, esta tiene a unos pasos de su puerta un árbol del que sale un hongo inmenso y de un color naranja brillante.",
    opciones: [
      {texto: "Tomarle una fotografía al hongo", requiere: "Cámara", destino: "viejo_casa"},
      {texto: "Seguir caminando", destino: "lago_juego" }
    ]
  },

  viejo_casa: {
    texto: "Un viejo sale de la casa y te ve fotografiando el hongo. Te ofrece llevártelo.",
    opciones: [
      {texto: "Le agradecés y seguís"},
      {texto: "Te llevás el hongo", objeto: "Hongo"}
    ]
  },

  fin_bosque: {
    texto: "Descubrís un claro con un lago escondido. Paz total.",
    opciones: [{ texto: "Volver al inicio", destino: "inicio", puntos: 5 }]
  }
};