export const escape_policia = { 
escape_policia: {
    id: "escape_policia",
    texto: "Llamaste demasiado la atención y las sirenas de la policía no tardaron en hacerse oír. ¡Apretá el acelerador más fuerte!",
    opciones: [
        {texto: "-", destino: "perder_juego_policia"},
        {texto: "-", destino: "perder_juego_policia" },
        {texto: "-", destino: "policia_2" }
    ]
},

policia_2: {
    id: "policia_2",
    texto: "Se te quedó el auto. Apretá el embrague para volver a arrancar",
    opciones: [
        {texto: "-", destino: "policia_3"},
        {texto: "-", destino: "perder_juego_policia" },
        {texto: "-", destino: "perder_juego_policia" }
    ]
},

policia_3: {
    id: "policia_3",
    texto: "¡Y ahora el acelerador de vuelta!",
    opciones: [
        {texto: "-", destino: "perder_juego_policia"},
        {texto: "-", destino: "perder_juego_policia" },
        {texto: "-", destino: "policia_4" }
    ]
},

policia_4: {
    id: "policia_4",
    texto: "Hay un perrito en el camino. Frená, ¡frená! ¡FRENÁ!",
    opciones: [
        {texto: "-", destino: "perder_juego_policia"},
        {texto: "-", destino: "policia_5" },
        {texto: "-", destino: "perder_juego_policia" }
    ]
},

policia_5: {
    id: "policia_5",
    texto: "¡Acelerá!",
    opciones: [
        {texto: "-", destino: "perder_juego_policia"},
        {texto: "-", destino: "perder_juego_policia" },
        {texto: "-", destino: "perder_policia_meteoro" }
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

perder_juego_policia: {
    texto: "Te atrapó la policía. Con un dejo de resignación te dice: 'Hay que aprender bien el orden de los pedales'",
    opciones: [
    {texto: "Volver a jugar", destino: "escape_policia"},
    {texto: "Volver a la calle empedrada", destino: "espejo_bar"},
    {texto: "Volver al bar", destino: "bar"},
    {texto: "Salir a la calle de inicio", destino: "calle_inicio"},
    ], final: true
}

}