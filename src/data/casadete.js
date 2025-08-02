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
    texto: "",
    opciones: [
      {texto: "Continuar", destino: "carta_te"}
    ]
  },

 afuera_casa_te: {
  texto: "Ya afuera de la Casa de Té, das unos pasos y mirás el cielo",
  opciones: [
    {texto: "La lluvia de hojas doradas se arremolina allí arriba sobre las copas de los árboles y se dirigen hacia un solo lugar, indicándote hacia dónde ir.", requiere: "Hierbas Rojas", destino: "cueva_bosque" },
    {texto: "Las hojas calman su furia poco a poco y te quedás hasta ver cómo la última de ellas toca la tierra para quedarse allí.", requiere: "Hierbas Azules", destino: "fin_bosque_uno"},
    {texto: "Las hojas doradas se van tornando de un color más amarillo hasta llegar a ser completamente verdes. Algunas, incluso, se posan en las ramas como si siempre hubieran estado allí. La lluvia cesa y crecen algunas flores. Caminás un poco y encontrás un campo primaveral.", requiere: "Hierbas Verdes", destino: "historia_hada"},
    {texto: "Hay más y más hojas cayendo desde el cielo sin ton ni son. Serán más del doble que antes, aunque tus ojos entrecerrados no logran ver mucho. Te tapás la cara con un brazo y avanzás entre la tormenta de hojas doradas.", requiere: "Hierbas Doradas", destino: "historia_dragones"}
  ]
 },

 fin_bosque_uno: {
    texto: "Lograste la calma de los árboles y llegaste al final de este camino. Se te recompensa con este incienzo.",
    opciones: [
        {texto: "Tomar incienzo aromático y salir del bosque", objeto: "Incienzo Aromático", destino: "calle_inicio"},
        {texto: "Tomar incienzo y volver a la feria", objeto: "Incienzo Aromático", destino: "feria_bosque"}
    ],
    final: true
 }

}