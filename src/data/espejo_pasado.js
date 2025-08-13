export const espejo_pasado = {
    espejo_pasado: {
        texto: "Efectivamente. Y no sólo eso, sino que también ves un afiche sobre una pared que tiene la foto de un artista famoso. En la parte de abajo, ves escrito tu nombre. Pero no tenés tiempo de asimilar todo, ¡la fecha es hoy! Tenemos que llegar al venue rápido, que esta noche abrís el show. Vamos",
        opciones: [ {texto: "Continuar", destino: "elegir_decada" } 

        ]

},
    elegir_decada: {
        texto: "Pero, ¿a qué década nos transportó el espejo?",
        opciones: [
            { texto: "60s", destino: "elegir_artista"},
            { texto: "70s", destino: "elegir_artista"},
            { texto: "80s", destino: "elegir_artista"},
            { texto: "90s", destino: "elegir_artista"}
        ]
    },
        elegir_artista: {
            texto: "Bien, y para qué artista de esa época te gustaría abrir?",  
            textoLibre: true,
            validarTexto: (input) => {
            return {
            destino: "elegir_instrumento",
            guardar: { clave: "instrumento", valor: input }
    }
  }
},
        elegir_instrumento: {
            texto: "Excelente. Allá vamos. Pero primero, tenés la posibilidad de elegir un instrumento musical el cual sos excelsa tocando, inigualable. ¿Cuál de estos elegirías?",
            opciones: [
                {texto: "El piano", destino: "final_auto_pasado", objeto: "Instrumento" },
                {texto: "El contrabajo", destino: "final_auto_pasado", objeto: "Instrumento" },
                {texto: "La guitarra", destino: "final_auto_pasado", objeto: "Instrumento" },
                {texto: "La batería", destino: "final_auto_pasado", objeto: "Instrumento" },
                {texto: "El violín", destino: "final_auto_pasado", objeto: "Instrumento" },
                {texto: "La viola", destino: "final_auto_pasado", objeto: "Instrumento" },
                {texto: "La flauta traversa", destino: "final_auto_pasado", objeto: "Instrumento" }
            ]
        },

        final_auto_pasado: {
            texto: "Nos sentamos en el auto y ya tenemos tu instrumento con nosotros. En marcha, te mirás en el espejo retrovisor. Tu pelo lacio y planchado se convirtió en un peinado furioso y batido, tus ojos brillan, y hay un artista principal a punto de ser opacado.",
            opciones: [
                { texto: "Volver al bar ", destino: "bar"},
                { texto: "Volver a la calle empedrada", destino: "espejo_bar"},
            ], final: true
        }

}