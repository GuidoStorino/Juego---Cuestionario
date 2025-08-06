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
        {texto: "Salís arando a todo lo que da", destino: "escape_policia"},
        {texto: "Si vas despacito nadie va a sospechar", destino: "auto_despacio"},
        {texto: "Voy a una velocidad normal pero doblo en la esquina", destino: "doblo_esquina"}
    ]
},

auto_despacio: {
    texto: "Y nadie sospechó. Ya que cometiste un delito, ¿cometerías otro y entrarías a robar alguno de los locales que ves mientras paseás?",
    opciones: [
        {texto: "Un negocio llamado 'El Fiambrecito", destino: "el_fiambrecito"},
        {texto: "Una ferretería", destino: "ferreteria"},
        {texto: "Un local de instrumentos musicales", destino: "instrumentos_local"},
        {texto: "No, por supuesto que no", destino: "espejo_bar"}
    ]
},

el_fiambrecito: {
    opciones: [
        {texto: "Lomito", objeto: "Lomito", destino: "espejo_bar"},
        {texto: "Un queso con agujeritos, como el de los dibujitos", objeto: "Queso", destino: "espejo_bar"},
        {texto: "Una pata de jamón", objeto: "Jamón", destino: "espejo_bar"},
        {texto: "Un salamín", objeto: "Salamín", destino: "espejo_bar"}
    ]
},

ferreteria: {
    opciones: [
        {texto: "Un disyuntor", objeto: "Disyuntor", destino: "espejo_bar"},
        {texto: "Una linterna", objeto: "Linterna", destino: "espejo_bar"},
        {texto: "Un destornillador", objeto: "Destornillador", destino: "espejo_bar"},
        {texto: "Una cinta métrica", objeto: "Cinta métrica", destino: "espejo_bar"}
    ]
},

instrumentos_local: {
    opciones: [
        {texto: "Una guitarra", objeto: "Instrumento", destino: "espejo_bar"},
        {texto: "Una pandereta", objeto: "Instrumento", destino: "espejo_bar"},
        {texto: "Un bajo", objeto: "Instrumento", destino: "espejo_bar"},
        {texto: "Un ukelele", objeto: "Instrumento", destino: "espejo_bar"}
    ]
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
    texto: "Y como quien no quiere la cosa, ahora perdiste a la policía y manejás un auto antiguo por una calle iluminada y en donde hay algunas cosas para hacer",
    opciones: [
        {texto: "Recital", destino: "recital"},
        {texto: ""},
        {texto: "Das una vuelta y dejás el auto estacionado donde estaba", destino: "espejo_bar"} 
    ]
}

}