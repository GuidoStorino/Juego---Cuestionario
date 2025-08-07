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
        {texto: "Lomito", objeto: "Lomito", destino: "camino_empedrado"},
        {texto: "Un queso con agujeritos, como el de los dibujitos", objeto: "Queso", destino: "camino_empedrado"},
        {texto: "Una pata de jamón", objeto: "Jamón", destino: "camino_empedrado"},
        {texto: "Un salamín", objeto: "Salamín", destino: "camino_empedrado"}
    ]
},

ferreteria: {
    opciones: [
        {texto: "Un disyuntor", objeto: "Disyuntor", destino: "camino_empedrado"},
        {texto: "Una linterna", objeto: "Linterna", destino: "camino_empedrado"},
        {texto: "Un destornillador", objeto: "Destornillador", destino: "camino_empedrado"},
        {texto: "Una cinta métrica", objeto: "Cinta métrica", destino: "camino_empedrado"}
    ]
},

instrumentos_local: {
    opciones: [
        {texto: "Una guitarra", objeto: "Instrumento", destino: "camino_empedrado"},
        {texto: "Una pandereta", objeto: "Instrumento", destino: "camino_empedrado"},
        {texto: "Un bajo", objeto: "Instrumento", destino: "camino_empedrado"},
        {texto: "Un ukelele", objeto: "Instrumento", destino: "camino_empedrado"}
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

camino_empedrado: {
    texto: "Y como quien no quiere la cosa, ahora perdiste a la policía y manejás un auto antiguo por una calle iluminada y en donde hay algunas cosas para hacer",
    opciones: [
        {texto: "Recital", destino: "recital"},
        {texto: "Cine", destino: "cine"},
        {texto: ""},
        {texto: "Das una vuelta y dejás el auto estacionado donde estaba", destino: "espejo_bar"} 
    ]
},

cine: {
    texto: "Las películas en cartelera ofrecen estas opciones",
    opciones: [
        {texto: "Un buen drama" , destino: "ruido_pochoclos"},
        {texto: "Una comedia para pasar el rato", destino: "ruido_pochoclos"},
        {texto: "Una que no te llama mucho pero te gusta el director", destino: "ruido_pochoclos"},
        {texto: "Una de terror, para variar un poco", destino: "ruido_pochoclos"}
    ]
},

ruido_pochoclos: {
    texto: "Cuando empieza la película, hay una persona haciendo ruido y revolviendo el balde de pochoclos. ¿Qué hacés?",
    opciones: [
        {texto: "Seguís como si nada, no te molesta", destino: "perdiste_pochoclos"},
        {texto: "Le pedís amablemente que haga menos ruido", destino: "tibia_pochoclos"},
        {texto: "Le gritás porque no puede ser que haga tanto ruido y moleste de esa forma a los demás", destino: "bien_pochoclos"},
        {texto: "Te levantás de tu lugar, la encarás y le pegás una patada ninja", destino: "ganaste_pochoclos"}
    ]
},

perdiste_pochoclos: {
    texto: "Perdiste. Esa actitud no es la correcta.",
    opciones: [
        {texto: "Volver al bar", destino: "bar"},
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
        {texto: "Salir a la calle", destino: "calle_inicio"}
    ],
    final: true
},

tibia_pochoclos: {
    texto: "Una actitud tibia, qué decirte...",
    opciones: [
        {texto: "Volver al bar", destino: "bar"},
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
        {texto: "Salir a la calle", destino: "calle_inicio"}
    ],
    final: true
},

bien_pochoclos: {
    texto: "Una actitud honorable. Era lo mínimo que se merecía.",
    opciones: [
        {texto: "Volver al bar", destino: "bar"},
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
        {texto: "Salir a la calle", destino: "calle_inicio"}
    ],
    final: true
},

ganaste_pochoclos: {
    texto: "Ganaste el juego, mi admiración y la de toda la sala, que se olvidó de la película e inunda el lugar de aplausos. Era lo que todos deseaban hacer, pero vos te animaste. Felicitaciones.",
    opciones: [
        {texto: "Volver al bar", destino: "bar"},
        {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
        {texto: "Salir a la calle", destino: "calle_inicio"}
    ],
    final: true
},

}