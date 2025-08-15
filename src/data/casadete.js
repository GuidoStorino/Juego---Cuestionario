 export const casadete = {
 casadete: {
    texto: "La casa de té es bonita, acogedora, tiene sillas cómodas en donde sentarse y mesitas de madera. El lugar está completamente vacío. A través de la ventana, se puede observar cómo la lluvia de hojas doradas continúa sin cesar. Mientras miramos, se sienten los pasos de alguien que nos viene a atender. Es una anciana algo encorvada y de cabello muy blanco. Nos entrega la carta del lugar.",
    opciones:  [
      {texto: "Hacés un comentario liviano sobre el clima para distender un poco.", destino: "historia_te"},
      {texto: "Simplemente mirás la carta", destino: "carta_te"}
    ]
  },

  carta_te: {
    texto: "",
    opciones: [
      {texto: "Té de hierbas azules", destino: "afuera_casa_te", objeto: "Hierbas Azules"},
      {texto: "Té de hierbas rojas", destino: "afuera_casa_te", objeto: "Hierbas Rojas" },
      {texto: "Té de hierbas verdes", destino: "afuera_casa_te", objeto: "Hierbas Verdes"},
      {texto: "Té de hierbas doradas", destino: "afuera_casa_te", objeto: "Hierbas Doradas"}
    ]
  },

  historia_te: {
    texto: "Hace muchos años que esto no se veía, siglos quizás... Pero lo anticipamos, yo lo anticipé. Y nadie quiso escucharme. Ahora sólo queda esperar pacientemente el destino inevitable. De manera que el azul servirá sólo para una calma temporal. Bienaventurados los que deciden ser indicados por el camino a tomar. Como dije, el destino es inevitable y no hay por qué rechazarlo. Para eso, el rojo les será útil. El verde suena bonito y natural, sí. Y valientes aquellos, ¡o muy tontos! que se dejan llevar por el brillo y optan por enfrentarse al peligroso dorado. Pero suficiente de hablar del clima, ¿qué desean tomar?",
    opciones: [
      {texto: "Mirar la carta", destino: "carta_te"}
    ]
  },

 afuera_casa_te: {
  texto: "Ya afuera de la Casa de Té, das unos pasos y mirás el cielo",
  opciones: [
    {texto: "La lluvia de hojas doradas se arremolina allí arriba sobre las copas de los árboles y se dirigen hacia un solo lugar, indicándote hacia dónde ir.", requiere: "Hierbas Rojas", destino: "cueva_bosque" },
    {texto: "Las hojas calman su furia poco a poco y te quedás hasta ver cómo la última de ellas toca la tierra para quedarse allí.", requiere: "Hierbas Azules", destino: "fin_bosque_uno"},
    {texto: "Las hojas doradas se van tornando de un color más amarillo hasta llegar a ser completamente verdes. Algunas, incluso, se posan en las ramas como si siempre hubieran estado allí. La lluvia cesa y crecen algunas flores. Caminás un poco y encontrás un campo primaveral.", requiere: "Hierbas Verdes", destino: "pre_hippiebosque"},
    {texto: "Hay más y más hojas cayendo desde el cielo sin ton ni son. Serán más del doble que antes, aunque tus ojos entrecerrados no logran ver mucho. Te tapás la cara con un brazo y avanzás entre la tormenta de hojas doradas.", requiere: "Hierbas Doradas", destino: "historia_dragones"}
  ]
 },

 pre_hippiebosque: {
  texto: "Una hippie sentada frente a una mesa de madera. Sobre la mesa hay 12 piedras. Te cuenta que son las piedras del zodíaco, las cuales han perdido su poder. Para recuperarlo, tienen que reencontrarse con sus respectivas características. Te explica que, como es obvio, lógico, y ya todos deberían saber, si nacés en determinada fecha tenés inherentemente determinadas características que compartís con todos los que nacieron en esa fecha. En este caso, una virtud, un defecto, y una conducta.",
  opciones: [{
    texto: "Ayudar a la hippie", destino: "hippiebosque"
  }]
 },

 fin_bosque_uno: {
    texto: "Lograste la calma de los árboles y llegaste al final de este camino. Se te recompensa con este incienso.",
    opciones: [
        {texto: "Tomar incienzo aromático y salir del bosque", objeto: "Incienso Aromático", destino: "calle_inicio"},
        {texto: "Tomar incienzo y volver a la feria", objeto: "Incienso Aromático", destino: "feria_bosque"}
    ],
    final: true
 },

 historia_dragones: {
  texto: "Se produce un ruido siniestro. El enemigo causante de esto y de los males de este bosque está llegando. Es...",
  opciones: [
    {texto: "Un dragón furioso y ávido por escupir su fuego", destino: "ayudante_bosque1"},
    {texto: "Una sombra gigante que oscurece todo lugar que toca", destino: "ayudante_bosque2"},
    {texto: "Un monstruo potente que además de ser fuerte se camufla en el bosque gracias a su color verde", destino: "ayudante_bosque3"}
  ]
 },

 ayudante_bosque1: {
  texto: "Podés recibir la ayuda de una de las criaturas del bosque. Elegila con cuidado.",
  opciones: [
    {texto: "Un hada que te aportará la magia y el brillo de su varita", destino: "hada_neutro"},
    {texto: "Un centauro nacido en el lugar más recóndito del bosque, que te aportará toda su fuerza", destino: "centauro_pierde"},
    {texto: "Una serpiente con la astucia de un zorro y la sabiduría de un búho, que además puede aportar su veneno", destino: "serpiente_gana", objeto: "Sangre de Unicornio"}
  ]
 },

  ayudante_bosque2: {
  texto: "Podés recibir la ayuda de una de las criaturas del bosque. Elegila con cuidado.",
  opciones: [
    {texto: "Un hada que te aportará la magia y el brillo de su varita", destino: "hada_gana", objeto: "Sangre de Unicornio"},
    {texto: "Un centauro nacido en el lugar más recóndito del bosque, que te aportará toda su fuerza", destino: "centauro_neutro"},
    {texto: "Una serpiente con la astucia de un zorro y la sabiduría de un búho, que además puede aportar su veneno", destino: "serpiente_pierde"}
  ]
 },

  ayudante_bosque3: {
  texto: "Podés recibir la ayuda de una de las criaturas del bosque. Elegila con cuidado.",
  opciones: [
    {texto: "Un hada que te aportará la magia y el brillo de su varita", destino: "hada_pierde"},
    {texto: "Un centauro nacido en el lugar más recóndito del bosque, que te aportará toda su fuerza", destino: "centauro_gana", objeto: "Sangre de Unicornio"},
    {texto: "Una serpiente con la astucia de un zorro y la sabiduría de un búho, que además puede aportar su veneno", destino: "serpiente_neutro"}
  ]
 },

 hada_gana: {
  texto: "La sombra oscureció el bosque y por momentos el alma de todas las criaturas vivientes, pero no pudo contra la luz y la magia del hada, y fue derrotado tras una pelea épica. Ganaste Sangre de Unicornio.",
  opciones: [
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

  serpiente_gana: {
  texto: "El dragón incendió todo lo que estaba a su paso. Hasta que la sabiduría de la serpiente, su veneno, y nuestra ayuda lograron crear un antídoto que hizo que de su boca no saliera más que un esbozo de humo. Ganaste Sangre de Unicornio.",
  opciones: [
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

  centauro_gana: {
  texto: "El monstruo era muy fuerte. Pero nuestro aliado el centauro también. Y no sólo eso, también conocía cada secreto y lugar del bosque. Nuestro enemigo no tuvo cómo esconderse y fue derrotado tras una bestial pelea. Ganaste Sangre de Unicornio.",
  opciones: [
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

  hada_neutro: {
  texto: "El fuego del dragón y la magia del hada chocaron en un espectáculo que pareció duras horas. Hasta que exhaustos ambos, se fueron volando en direcciones opuestas. No hubo ganadores esta vez.",
  opciones: [
    {texto: "Volver a intentar", destino: "historia_dragones"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"},
    
  ]
 },

  serpiente_neutro: {
  texto: "El monstruo y la serpiente se olieron, se buscaron, se enfrentaron por todo el bosque. Finalmente, no hubo ganadores esta vez.",
  opciones: [
    {texto: "Volver a intentar", destino: "historia_dragones"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

  centauro_neutro: {
  texto: "No fue suficiente el poder de la sombra para oscurecer la fría alma de nuestro centauro, pero tampoco lo fue la fuerza de éste como para vencer a tamaño enemigo. No hubo ganadores esta vez.",
  opciones: [
    {texto: "Volver a intentar", destino: "historia_dragones"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

  hada_pierde: {
  texto: "Hay veces en las que la magia no es tan útil y la fuerza bruta se impone. Hemos sido derrotados.",
  opciones: [
    {texto: "Volver a intentar", destino: "historia_dragones"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"},
    
  ]
 },

  serpiente_pierde: {
  texto: "El poder de la sombra oscureció cada árbol, hoja, y corazón de cada criatura del bosque. No hubo antídoto o veneno que sirva contra un enemigo de tales características.",
  opciones: [
    {texto: "Volver a intentar", destino: "historia_dragones"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

  centauro_pierde: {
  texto: "De poco sirve la fuerza y el conocimiento del campo de batalla cuando el enemigo incendia todo lo que está a su paso mientras sobrevuela el lugar. Hemos sido derrotados esta vez.",
  opciones: [
    {texto: "Volver a intentar", destino: "historia_dragones"},
    {texto: "Volver al bosque", destino: "bosque_intro"},
    {texto: "Volver a la casa de té", destino: "casadete"},
    {texto: "Salir del bosque", destino: "calle inicio"}
  ]
 },

}