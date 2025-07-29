export const barhistorias = {
    barhistorias: {
        texto:"El viejo empieza a hablar con mucha calma. Con la cadencia necesaria para que captar tu atención y la fuerza exacta para que solamente nosotros lo escuchemos. Y así, empieza a contar todos los años que lleva yendo a aquel bar y algunos de sus secretos...",
    opciones: [
      { texto: "", destino: ""},
      { texto: "El segundo espejo del baño, el cual te transporta al tocarlo", destino: "espejo_bar"},
      { texto: "La puerta de atrás del bar, en donde hace muchos años murió el antiguo dueño y, se dice, nunca pudo salir. Ahora su fantasma vive atrapado allí.", destino: "sala_prop_bar"}
    ]
  },

espejo_bar: {
    texto: "El tocar ese espejo parece haberte llevado hacia otro lugar. Algo mareada y confundida, te levantás del suelo en una calle empedrada.",
    opciones: [
        {texto: "Hay un auto antiguo estacionado. ¿El espejo me transportó hacia el pasado?", destino: "espejo_pasado"},
        {texto: "Hay un auto antiguo estacionado. Muy cerca de una pared... ¿El espejo me transportó hacia un callejón sin salida?", destino: "espejo_callejon"},
        {texto: "Hay un auto antiguo estacionado y... ¿Está abierto?", destino: "auto_abierto"}
    ]
},

auto_abierto: {
    texto: "Te acercás al auto y efectivamente estaba abierto. Adentro hay:",
    opciones: [
        {texto: "una persona muerta con sangre en el rostro", destino: "historia_asesinato"},
        {texto: "unas llaves. Podría manejarlo...", destino: "auto_robo"},
        {texto: "un sobre blanco", destino: "auto_carta"}
    ]
},

historia_asesinato: {
    texto: "Al seguir mirando descubrís que el hombre fue asesinado de un disparo. Abrís la guantera y encontrás unos papeles Uno de ellos tiene escritas unas palabras en latín.",
    opciones: [
        {texto: "Resolver este misterio", destino: "crimenauto"},
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"}
    ]
},

auto_robo: {
    texto: "Probás las llaves y el auto enciende. Lo primero pensás es cuál es el embrague, y si los autos antiguos los tienen en el mismo orden que los de ahora. Lo segundo, es que será mejor salir de ahí rápido.",
    opciones: [
        {texto: "Salís arando a todo lo que da", destino: "sirena_policia"},
        {texto: "Si vas despacito nadie va a sospechar", destino: "auto_despacio"},
        {texto: "Voy a una velocidad normal pero doblo en la esquina", destino: "doblo_esquina"}
    ]
},

sirena_policia: {
    texto: "Saliste con todo, llamaste demasiado la atención y las sirenas de la policía no tardaron hacerse oír.",
    opciones: [
        {texto: "Sigo en la mía, en algún momento los voy a perder", destino: "perder_policia_meteoro"},
        {texto: "Salgo del auto y me pongo a caminar como si nada", destino: "perder_policia_caminando" }
    ]
},

perder_policia_meteoro: {
    texto: "Excelente, Meteoro. Perdiste a la policía como una campeona. Ya estás para la Formula 1. ¿Y ahora?",
    opciones: [
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
        {texto: "Volver al bar", destino: "bar"},
        {texto: "Salir a la calle de inicio", destino: "calle_inicio"},
       ], final: true
},

perder_policia_caminando: {
    texto: "Ah pero qué astucia. Te hiciste bien la boluda y perdiste a los ratis. Me saco el sombrero ante usted. ¿Y ahora?",
    opciones: [
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
        {texto: "Volver al bar", destino: "bar"},
        {texto: "Salir a la calle de inicio", destino: "calle_inicio"}
    ], final: true
},

doblo_esquina: {
    texto: ""
}

}