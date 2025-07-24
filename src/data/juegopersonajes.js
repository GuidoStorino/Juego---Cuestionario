export const juegopersonajes = {
    conectar_gente: {
        texto:"Juego personajes",
    opciones: [
        { texto: "Carta en papel", destino: "pepito_intro"}
    ]
  },

pepito_intro: {
  texto: `Hola, soy Pepito. Mi canción favorita es _____ y mi actividad favorita es _____. ¿Podés adivinar cuáles son?`,
  textoLibre: true,
  validarTexto: (input) => {
    const respuestas = input.toLowerCase().split(",");
    const cancion = respuestas[0]?.trim();
    const actividad = respuestas[1]?.trim();

    if (!cancion || !actividad) return null;

    return {
      guardar: {
        clave: "pepitoRespuestas",
        valor: {
          cancion,
          actividad
        }
      },
      destino: "pepito_resultado"
    };
  }
},
}