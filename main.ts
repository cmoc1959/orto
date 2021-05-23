function plantilla_b_v () {
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        textSprite.setImage(assets.tile`myTile9`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile9`)
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 7 7 7 7 7 . . . . . 7 
            7 . . 7 7 7 7 7 7 7 . . . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 7 7 7 7 7 . . . . . 7 
                7 . . 7 7 7 7 7 7 7 . . . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "b"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . 7 7 . . 7 
            7 . . 7 7 . . . . . . 7 7 . . 7 
            7 . . 7 7 7 . . . . 7 7 7 . . 7 
            7 . . . 7 7 . . . . 7 7 . . . 7 
            7 . . . 7 7 7 . . 7 7 7 . . . 7 
            7 . . . . 7 7 . . 7 7 . . . . 7 
            7 . . . . . 7 7 7 7 . . . . . 7 
            7 . . . . . . 7 7 . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . 7 7 . . 7 
                7 . . 7 7 . . . . . . 7 7 . . 7 
                7 . . 7 7 7 . . . . 7 7 7 . . 7 
                7 . . . 7 7 . . . . 7 7 . . . 7 
                7 . . . 7 7 7 . . 7 7 7 . . . 7 
                7 . . . . 7 7 . . 7 7 . . . . 7 
                7 . . . . . 7 7 7 7 . . . . . 7 
                7 . . . . . . 7 7 . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "v"
            hay_letra += 1
        }
    }
    textSprite.setPosition(lista_posicion_x[posicion], 50)
}
function muestras () {
    text_list = [
    "melón",
    "baúl",
    "café",
    "bebé",
    "turrón",
    "vaso",
    "casa",
    "verde",
    "mechero",
    "camión",
    "cocina",
    "pétalo",
    "horno",
    "víbora",
    "comprar",
    "empleo",
    "campo",
    "camping",
    "campo",
    "amparo",
    "cambio",
    "comprar",
    "brazo",
    "cobre",
    "palabra",
    "súbdito",
    "amable",
    "trombón",
    "árbol",
    "cambio",
    "venir",
    "debido",
    "deben",
    "bióloga",
    "recibir",
    "subir",
    "exhibir",
    "inhibir",
    "nieve",
    "flexivo",
    "nueve",
    "abusivo",
    "cuba",
    "labios",
    "tablero",
    "cubrir",
    "labrar",
    "koala",
    "kimono",
    "kiosco",
    "kiwi",
    "kilo",
    "kenia",
    "quedar",
    "queja",
    "quince",
    "quinta",
    "queso",
    "química",
    "quedar",
    "achaque",
    "aparqué",
    "aquí",
    "ataque",
    "buque",
    "cheque",
    "duque",
    "esquí",
    "maniquí",
    "parque",
    "aquejar",
    "biquini",
    "boquete",
    "coqueto",
    "equidad",
    "equipo",
    "líquido",
    "máquina",
    "orquesta",
    "paquete",
    "maqueta",
    "vaquero",
    "abrazar",
    "azotar",
    "cazar",
    "danzar",
    "lanzar",
    "azteca",
    "castizo",
    "forzado",
    "fugaz",
    "juzgado",
    "acidez",
    "azafrán",
    "baliza",
    "barcaza",
    "belleza",
    "buzón",
    "cabeza",
    "calzado",
    "carroza",
    "cereza",
    "cerveza",
    "combina",
    "corazón",
    "fuerza",
    "maíz",
    "nariz",
    "pedazo",
    "pizarra",
    "plaza",
    "polizón",
    "ahí",
    "ahora",
    "bahía",
    "rehacer",
    "exhibir",
    "choza",
    "ducha",
    "cachete",
    "cuchara",
    "champú",
    "web",
    "wasabi",
    "watio",
    "wifi",
    "western",
    "wanda",
    "newton",
    "clown",
    "show",
    "kiwi",
    "taiwan",
    "darwin",
    "extraer",
    "aspirar",
    "ausilio",
    "espacio",
    "exponer",
    "frágil",
    "gente",
    "jabalí",
    "lógica",
    "angina",
    "encoger",
    "dibujar",
    "abajo",
    "baraja",
    "aguja",
    "tarjeta",
    "viajar",
    "bruja",
    "encajar",
    "ventaja"
    ]
}
function quita_c_q_k (indice: number) {
    textSprite = textsprite.create(letra, 2, 1)
    textSprite.setBorder(1, 1, 2)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(16 + indice * 20, 50)
    if (letra == "c" || (letra == "q" || letra == "k")) {
        textSprite.destroy()
        textSprite = textsprite.create(" ", 2, 1)
        textSprite.setBorder(1, 1, 2)
        textSprite.setMaxFontHeight(10)
        textSprite.setPosition(16 + indice * 20, 50)
        lista_posicion_x.push(16 + indice * 20)
        lista_letras.push(letra)
        lista_marcada.push("n")
    } else {
        pon_vocal_acento(indice)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (posicion > lista_letras.length - 1) {
        posicion = lista_letras.length
    } else {
        posicion += 1
    }
})
function s_x () {
    if (palabra.includes("s") || palabra.includes("x")) {
        for (let index = 0; index <= palabra.length; index++) {
            letra = palabra.charAt(index)
            quita_s_x(index)
        }
    } else {
        forma_palabras()
    }
}
function quita_vocales (indice: number) {
    textSprite = textsprite.create(letra, 2, 1)
    textSprite.setBorder(1, 1, 2)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(16 + indice * 20, 50)
    if (letra == "a" || (letra == "e" || (letra == "i" || (letra == "o" || (letra == "u" || (letra == "á" || (letra == "é" || (letra == "í" || (letra == "ó" || letra == "ú"))))))))) {
        textSprite.destroy()
        textSprite = textsprite.create(" ", 2, 1)
        textSprite.setBorder(1, 1, 2)
        textSprite.setMaxFontHeight(10)
        textSprite.setPosition(16 + indice * 20, 50)
        lista_posicion_x.push(16 + indice * 20)
        lista_letras.push(letra)
        lista_marcada.push("n")
    }
}
function quita_b_v (indice: number) {
    textSprite = textsprite.create(letra, 2, 1)
    textSprite.setBorder(1, 1, 2)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(16 + indice * 20, 50)
    if (letra == "b" || letra == "v") {
        textSprite.destroy()
        textSprite = textsprite.create(" ", 2, 1)
        textSprite.setBorder(1, 1, 2)
        textSprite.setMaxFontHeight(10)
        textSprite.setPosition(16 + indice * 20, 50)
        lista_posicion_x.push(16 + indice * 20)
        lista_letras.push(letra)
        lista_marcada.push("n")
    } else {
        pon_vocal_acento(indice)
    }
}
function quita_g_j (indice: number) {
    textSprite = textsprite.create(letra, 2, 1)
    textSprite.setBorder(1, 1, 2)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(16 + indice * 20, 50)
    if (letra == "g" || letra == "j") {
        textSprite.destroy()
        textSprite = textsprite.create(" ", 2, 1)
        textSprite.setBorder(1, 1, 2)
        textSprite.setMaxFontHeight(10)
        textSprite.setPosition(16 + indice * 20, 50)
        lista_posicion_x.push(16 + indice * 20)
        lista_letras.push(letra)
        lista_marcada.push("n")
    } else {
        pon_vocal_acento(indice)
    }
}
function vocales () {
    for (let index = 0; index <= palabra.length; index++) {
        letra = palabra.charAt(index)
        quita_vocales(index)
    }
}
function plantilla_c_q_k () {
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        textSprite.setImage(assets.tile`myTile9`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile9`)
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile14`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 7 7 7 . . . 7 
            7 . . . . 7 7 7 7 7 7 7 . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 7 7 7 . . . 7 
            7 . . . . 7 7 7 7 7 7 7 . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 7 7 7 . . . 7 
                7 . . . . 7 7 7 7 7 7 7 . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 7 7 7 . . . 7 
                7 . . . . 7 7 7 7 7 7 7 . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "c"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 . . . . . . 7 
            7 . . . . 7 7 7 7 . . . . . . 7 
            7 . . 7 7 . . . . 7 7 . . . . 7 
            7 . . 7 7 . . . . 7 7 . . . . 7 
            7 . . 7 7 . . . . 7 7 . . . . 7 
            7 . . . . 7 7 7 7 7 7 . . . . 7 
            7 . . . . 7 7 7 7 7 7 . . . . 7 
            7 . . . . . . . . 7 7 . . . . 7 
            7 . . . . . . . . 7 7 . . . . 7 
            7 . . . . . . . . 7 7 . . . . 7 
            7 . . . . . . . . 7 7 . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 . . . . . . 7 
                7 . . . . 7 7 7 7 . . . . . . 7 
                7 . . 7 7 . . . . 7 7 . . . . 7 
                7 . . 7 7 . . . . 7 7 . . . . 7 
                7 . . 7 7 . . . . 7 7 . . . . 7 
                7 . . . . 7 7 7 7 7 7 . . . . 7 
                7 . . . . 7 7 7 7 7 7 . . . . 7 
                7 . . . . . . . . 7 7 . . . . 7 
                7 . . . . . . . . 7 7 . . . . 7 
                7 . . . . . . . . 7 7 . . . . 7 
                7 . . . . . . . . 7 7 . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "q"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . 7 7 . . . . 7 7 . . . . 7 
            7 . . 7 7 . . . 7 7 . . . . . 7 
            7 . . 7 7 . . 7 7 . . . . . . 7 
            7 . . 7 7 . 7 7 . . . . . . . 7 
            7 . . 7 7 7 7 . . . . . . . . 7 
            7 . . 7 7 7 7 7 . . . . . . . 7 
            7 . . 7 7 . 7 7 7 . . . . . . 7 
            7 . . 7 7 . . 7 7 7 . . . . . 7 
            7 . . 7 7 . . . 7 7 7 . . . . 7 
            7 . . 7 7 . . . . 7 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . 7 7 . . . . 7 7 . . . . 7 
                7 . . 7 7 . . . 7 7 . . . . . 7 
                7 . . 7 7 . . 7 7 . . . . . . 7 
                7 . . 7 7 . 7 7 . . . . . . . 7 
                7 . . 7 7 7 7 . . . . . . . . 7 
                7 . . 7 7 7 7 7 . . . . . . . 7 
                7 . . 7 7 . 7 7 7 . . . . . . 7 
                7 . . 7 7 . . 7 7 7 . . . . . 7 
                7 . . 7 7 . . . 7 7 7 . . . . 7 
                7 . . 7 7 . . . . 7 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "k"
            hay_letra += 1
        }
    }
    textSprite.setPosition(lista_posicion_x[posicion], 50)
}
function plantilla_vocales () {
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        textSprite.setImage(assets.tile`myTile9`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile9`)
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        textSprite.setImage(assets.tile`myTile`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile`)
            marcada = "a"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        textSprite.setImage(assets.tile`myTile0`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile0`)
            marcada = "e"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        textSprite.setImage(assets.tile`myTile1`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile1`)
            marcada = "i"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        textSprite.setImage(assets.tile`myTile2`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile2`)
            marcada = "o"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        textSprite.setImage(assets.tile`myTile3`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile3`)
            marcada = "u"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile5`)) {
        textSprite.setImage(assets.tile`myTile5`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile5`)
            marcada = "á"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
        textSprite.setImage(assets.tile`myTile6`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile6`)
            marcada = "é"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        textSprite.setImage(assets.tile`myTile7`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile7`)
            marcada = "í"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile8`)) {
        textSprite.setImage(assets.tile`myTile8`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile8`)
            marcada = "ó"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
        textSprite.setImage(assets.tile`myTile4`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile4`)
            marcada = "ú"
            hay_letra += 1
        }
    }
    textSprite.setPosition(lista_posicion_x[posicion], 50)
}
function carga_indice () {
    linea0 = "   Tipo de ejercicios"
    linea1 = "[1] vocales.         "
    linea2 = "[2] n, m.            "
    linea3 = "[3] b, v.            "
    linea4 = "[4] c, q, k.         "
    linea5 = "[5] s, x.            "
    linea6 = "[6] g, j.            "
}
function plantilla_g_j () {
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        textSprite.setImage(assets.tile`myTile9`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile9`)
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . . . . . . 7 7 . . . 7 
            7 . . . . . . . . . 7 7 . . . 7 
            7 . . . . . . . . . 7 7 . . . 7 
            7 . . . . 7 7 7 7 7 7 7 . . . 7 
            7 . . . . 7 7 7 7 7 7 7 . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . . . . . . 7 7 . . . 7 
                7 . . . . . . . . . 7 7 . . . 7 
                7 . . . . . . . . . 7 7 . . . 7 
                7 . . . . 7 7 7 7 7 7 7 . . . 7 
                7 . . . . 7 7 7 7 7 7 7 . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "g"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile17`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . . . . . 7 7 . . . . . 7 
            7 . . . 7 7 7 7 . . . . . . . 7 
            7 . . . 7 7 7 7 . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . . . . . 7 7 . . . . . 7 
                7 . . . 7 7 7 7 . . . . . . . 7 
                7 . . . 7 7 7 7 . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "j"
            hay_letra += 1
        }
    }
    textSprite.setPosition(lista_posicion_x[posicion], 50)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (x > 146) {
        x = 152
        y = 72
        marca.setPosition(x, y)
    } else {
        x += 16
        y = 104
        marca.setPosition(x, y)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (y == 72) {
        y = 104
        x = 152
        marca.setPosition(x, y)
    } else {
        if (x < 16) {
            x = 8
            marca.setPosition(x, y)
        } else {
            x += -16
            marca.setPosition(x, y)
        }
    }
})
function m_n () {
    if (palabra.includes("m") || palabra.includes("n")) {
        for (let index = 0; index <= palabra.length; index++) {
            letra = palabra.charAt(index)
            quita_m_n(index)
        }
    } else {
        forma_palabras()
    }
}
function g_j () {
    if (palabra.includes("g") || palabra.includes("j")) {
        for (let index = 0; index <= palabra.length; index++) {
            letra = palabra.charAt(index)
            quita_g_j(index)
        }
    } else {
        forma_palabras()
    }
}
function carga_leyenda () {
    linea7 = "....Instrucciones...."
    linea8 = "[B] fija la letra.    "
    linea9 = "[^] avanza posición.  "
    linea10 = "[v] posición atrás.   "
    linea11 = "[<] mueve cursor.  "
    linea12 = "[>] mueve cursor.  "
}
function barra (x: number, y: number) {
    line_sep = sprites.create(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ................................................................................................................................................................
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.Player)
    line_sep.setPosition(x, y)
}
function pon_vocal_acento (indice: number) {
    if (letra == "á") {
        textSprite.destroy()
        mySprite = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 1 1 2 2 2 2 2 1 
            1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
            1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
            1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
            1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
            1 2 2 1 1 2 2 2 2 1 1 2 2 2 2 1 
            1 2 2 1 1 2 2 2 2 1 1 2 2 2 2 1 
            1 2 2 1 1 2 2 2 2 1 1 2 2 2 2 1 
            1 2 2 1 1 2 2 2 2 1 1 2 2 2 2 1 
            1 2 2 2 2 1 1 1 1 1 1 1 1 2 2 1 
            1 2 2 2 2 1 1 1 1 1 1 1 1 2 2 1 
            1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Player)
        mySprite.setPosition(16 + indice * 20, 50)
    } else {
        if (letra == "é") {
            textSprite.destroy()
            mySprite = sprites.create(img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 1 
                1 2 2 2 2 2 2 2 1 1 1 2 2 2 2 1 
                1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
                1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                1 2 2 2 2 1 1 1 1 1 1 1 1 2 2 1 
                1 2 2 2 2 1 1 1 1 1 1 1 1 2 2 1 
                1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                1 2 2 1 1 1 1 1 1 1 1 1 1 2 2 1 
                1 2 2 1 1 1 1 1 1 1 1 2 2 2 2 1 
                1 2 2 1 1 2 2 2 2 2 2 2 2 2 2 1 
                1 2 2 2 2 1 1 1 1 1 1 1 1 2 2 1 
                1 2 2 2 2 1 1 1 1 1 1 1 1 2 2 1 
                1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `, SpriteKind.Player)
            mySprite.setPosition(16 + indice * 20, 50)
        } else {
            if (letra == "í") {
                textSprite.destroy()
                mySprite = sprites.create(img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 1 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    `, SpriteKind.Player)
                mySprite.setPosition(16 + indice * 20, 50)
            } else {
                if (letra == "ó") {
                    textSprite.destroy()
                    mySprite = sprites.create(img`
                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                        1 2 2 2 2 2 2 2 2 1 1 2 2 2 2 1 
                        1 2 2 2 2 2 2 2 1 1 1 2 2 2 2 1 
                        1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
                        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                        1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
                        1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
                        1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                        1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                        1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                        1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                        1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
                        1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
                        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                        `, SpriteKind.Player)
                    mySprite.setPosition(16 + indice * 20, 50)
                } else {
                    if (letra == "ú") {
                        textSprite.destroy()
                        mySprite = sprites.create(img`
                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                            1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                            1 2 2 2 2 2 2 2 1 1 2 2 2 2 2 1 
                            1 2 2 2 2 2 2 1 1 1 2 2 2 2 2 1 
                            1 2 2 2 2 2 2 1 1 2 2 2 2 2 2 1 
                            1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                            1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                            1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                            1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                            1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                            1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                            1 2 2 1 1 2 2 2 2 2 2 1 1 2 2 1 
                            1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
                            1 2 2 2 2 1 1 1 1 1 1 2 2 2 2 1 
                            1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
                            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                            `, SpriteKind.Player)
                        mySprite.setPosition(16 + indice * 20, 50)
                    } else {
                    	
                    }
                }
            }
        }
    }
}
function quita_s_x (indice: number) {
    textSprite = textsprite.create(letra, 2, 1)
    textSprite.setBorder(1, 1, 2)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(16 + indice * 20, 50)
    if (letra == "s" || letra == "x") {
        textSprite.destroy()
        textSprite = textsprite.create(" ", 2, 1)
        textSprite.setBorder(1, 1, 2)
        textSprite.setMaxFontHeight(10)
        textSprite.setPosition(16 + indice * 20, 50)
        lista_posicion_x.push(16 + indice * 20)
        lista_letras.push(letra)
        lista_marcada.push("n")
    } else {
        pon_vocal_acento(indice)
    }
}
function c_q_k () {
    if (palabra.includes("c") || (palabra.includes("q") || palabra.includes("k"))) {
        for (let index = 0; index <= palabra.length; index++) {
            letra = palabra.charAt(index)
            quita_c_q_k(index)
        }
    } else {
        forma_palabras()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (posicion < 1) {
        posicion = 0
    } else {
        posicion += -1
    }
})
function plantilla_s_x () {
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        textSprite.setImage(assets.tile`myTile9`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile9`)
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile16`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 7 7 . . . . 7 
            7 . . . . 7 7 7 7 7 7 . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . . . . . . 7 7 . . . 7 
            7 . . . . . . . . . 7 7 . . . 7 
            7 . . . 7 7 7 7 7 7 . . . . . 7 
            7 . . . 7 7 7 7 7 7 . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 7 7 . . . . 7 
                7 . . . . 7 7 7 7 7 7 . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . . . . . . 7 7 . . . 7 
                7 . . . . . . . . . 7 7 . . . 7 
                7 . . . 7 7 7 7 7 7 . . . . . 7 
                7 . . . 7 7 7 7 7 7 . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "s"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . 7 7 . . . . . . 7 7 . . 7 
            7 . . . 7 7 . . . . 7 7 . . . 7 
            7 . . . . 7 7 . . 7 7 . . . . 7 
            7 . . . . . 7 7 7 7 . . . . . 7 
            7 . . . . . 7 7 7 7 . . . . . 7 
            7 . . . . 7 7 . . 7 7 . . . . 7 
            7 . . . 7 7 . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . . 7 7 . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . 7 7 . . . . . . 7 7 . . 7 
                7 . . . 7 7 . . . . 7 7 . . . 7 
                7 . . . . 7 7 . . 7 7 . . . . 7 
                7 . . . . . 7 7 7 7 . . . . . 7 
                7 . . . . . 7 7 7 7 . . . . . 7 
                7 . . . . 7 7 . . 7 7 . . . . 7 
                7 . . . 7 7 . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . . 7 7 . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "x"
            hay_letra += 1
        }
    }
    textSprite.setPosition(lista_posicion_x[posicion], 50)
}
function forma_palabras () {
    textSprite2 = textsprite.create("Elige la letra correcta")
    textSprite2.setPosition(70, 15)
    barra(80, 90)
    barra(80, 22)
    marca = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    x = 8
    y = 104
    posicion = 0
    hay_letra = 0
    bien = 0
    marca.setPosition(x, y)
    muestras()
    lista_posicion_x = []
    lista_letras = []
    lista_marcada = []
    palabra = text_list[randint(0, text_list.length - 1)]
    if (opcion == 1) {
        tiles.setTilemap(tilemap`level1`)
        vocales()
    }
    if (opcion == 2) {
        tiles.setTilemap(tilemap`level4`)
        m_n()
    }
    if (opcion == 3) {
        tiles.setTilemap(tilemap`level6`)
        b_v()
    }
    if (opcion == 4) {
        tiles.setTilemap(tilemap`level10`)
        c_q_k()
    }
    if (opcion == 5) {
        tiles.setTilemap(tilemap`level11`)
        s_x()
    }
    if (opcion == 6) {
        tiles.setTilemap(tilemap`level12`)
        g_j()
    }
}
function quita_m_n (indice: number) {
    textSprite = textsprite.create(letra, 2, 1)
    textSprite.setBorder(1, 1, 2)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(16 + indice * 20, 50)
    if (letra == "m" || letra == "n") {
        textSprite.destroy()
        textSprite = textsprite.create(" ", 2, 1)
        textSprite.setBorder(1, 1, 2)
        textSprite.setMaxFontHeight(10)
        textSprite.setPosition(16 + indice * 20, 50)
        lista_posicion_x.push(16 + indice * 20)
        lista_letras.push(letra)
        lista_marcada.push("n")
    } else {
        pon_vocal_acento(indice)
    }
}
function plantilla_m_n () {
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        textSprite.setImage(assets.tile`myTile9`)
        if (controller.B.isPressed()) {
            marcar_letra(assets.tile`myTile9`)
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . 7 7 7 . . 7 7 7 . . . 7 
            7 . . . 7 7 7 . . 7 7 7 . . . 7 
            7 . 7 7 . . . 7 7 . . . 7 7 . 7 
            7 . 7 7 . . . 7 7 . . . 7 7 . 7 
            7 . 7 7 . . . 7 7 . . . 7 7 . 7 
            7 . 7 7 . . . 7 7 . . . 7 7 . 7 
            7 . 7 7 . . . 7 7 . . . 7 7 . 7 
            7 . 7 7 . . . 7 7 . . . 7 7 . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . 7 7 7 . . 7 7 7 . . . 7 
                7 . . . 7 7 7 . . 7 7 7 . . . 7 
                7 . 7 7 . . . 7 7 . . . 7 7 . 7 
                7 . 7 7 . . . 7 7 . . . 7 7 . 7 
                7 . 7 7 . . . 7 7 . . . 7 7 . 7 
                7 . 7 7 . . . 7 7 . . . 7 7 . 7 
                7 . 7 7 . . . 7 7 . . . 7 7 . 7 
                7 . 7 7 . . . 7 7 . . . 7 7 . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "m"
            hay_letra += 1
        }
    }
    if (marca.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        textSprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . . . 7 7 7 7 7 . . . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . 7 7 . . . . . 7 7 . . . 7 
            7 . . . . . . . . . . . . . . 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (controller.B.isPressed()) {
            marcar_letra(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . . . 7 7 7 7 7 . . . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . 7 7 . . . . . 7 7 . . . 7 
                7 . . . . . . . . . . . . . . 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `)
            marcada = "n"
            hay_letra += 1
        }
    }
    textSprite.setPosition(lista_posicion_x[posicion], 50)
}
function marcar_letra (imagen_letra: Image) {
    if (hay_letra > 0) {
        sprites.create(imagen_letra, SpriteKind.Player).setPosition(lista_posicion_x[posicion], 50)
        if (marcada == lista_letras[posicion] && lista_marcada[posicion] == "n") {
            lista_marcada[posicion] = "s"
            bien += 1
        }
        hay_letra = 0
    } else {
        sprites.create(imagen_letra, SpriteKind.Player).setPosition(lista_posicion_x[posicion], 50)
    }
    if (bien == lista_letras.length) {
        music.powerUp.play()
        info.changeScoreBy(1)
        textSprite3 = textsprite.create("¡¡ muy bien !!", 15, 9)
        textSprite3.setPosition(70, 70)
        pause(2000)
        textSprite3 = textsprite.create("¡¡ muy bien !!", 15, 15)
        textSprite3.setPosition(70, 70)
        marca.destroy()
        for (let index = 0; index <= palabra.length; index++) {
            textSprite = textsprite.create(" ", 15, 15)
            textSprite.setBorder(1, 15, 2)
            textSprite.setMaxFontHeight(10)
            textSprite.setPosition(16 + index * 20, 50)
        }
        opcion = randint(1, 6)
        forma_palabras()
    }
}
function b_v () {
    if (palabra.includes("b") || palabra.includes("v")) {
        for (let index = 0; index <= palabra.length; index++) {
            letra = palabra.charAt(index)
            quita_b_v(index)
        }
    } else {
        forma_palabras()
    }
}
let textSprite3: TextSprite = null
let bien = 0
let textSprite2: TextSprite = null
let mySprite: Sprite = null
let line_sep: Sprite = null
let y = 0
let x = 0
let palabra = ""
let lista_marcada: string[] = []
let lista_letras: string[] = []
let letra = ""
let text_list: string[] = []
let posicion = 0
let lista_posicion_x: number[] = []
let marcada = ""
let hay_letra = 0
let textSprite: TextSprite = null
let marca: Sprite = null
let opcion = 0
let linea6 = ""
let linea5 = ""
let linea4 = ""
let linea3 = ""
let linea2 = ""
let linea1 = ""
let linea0 = ""
let linea12 = ""
let linea11 = ""
let linea10 = ""
let linea9 = ""
let linea8 = ""
let linea7 = ""
game.splash("ortografía", "Autor: Claudio Orts")
game.setDialogTextColor(8)
game.setDialogCursor(img`
    ...bbbbbbbbbb...
    ..b1111111111b..
    .b111111111111b.
    .b111111111111b.
    .bddccccccccddb.
    .bdc66666666cdb.
    .bdc61d66666cdb.
    .bdc6d666666cdb.
    .bdc66666666cdb.
    .bdc66666666cdb.
    .bdc66666666cdb.
    .bddccccccccddb.
    .cbbbbbbbbbbbbc.
    fccccccccccccccf
    fbbbbbbbbbbbbbbf
    fbcdddddddddddbf
    fbcbbbbbbbbbbcbf
    fbcbbbbbbbbbbcbf
    fbccccccccccccbf
    fbbbbbbbbbbbbbbf
    fbffffffffffffbf
    ffffffffffffffff
    `)
game.setDialogFrame(img`
    ..................................................................
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333113333333333333311333333333333331133333333333333113.
    .3333333333331111333333333333111133333333333311113333333333331111.
    .3333333333331111333333333333111133333333333311113333333333331111.
    .3113333333111111311333333311111131133333331111113113333333111111.
    .1111333311111111111133331111111111113333111111111111333311111111.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333113333333333333311333333333333331133333333333333113333333333.
    .3311111133333333331111113333333333111111333333333311111133333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333333333333333333333333333333333333333333333333333333333333.
    .3333333666333333333333366333333333333336633333333333336663333333.
    .3333336676633333333333666633333333333366663333333333366766333333.
    .3333336777666333333333677633333333333367763333333336667776333333.
    .3333336777676333333663677633333333366367763333333336767776333333.
    .3336636777676333333676677633333333367667763333333336767776366333.
    .3367636777676333333676677636633333367667763663333336767776367633.
    .3367666777776333333676677667633333367667766763333336777776667633.
    .3367666777663333333677777667633333367777766763333333667776667633.
    .3366777777633333333667777677633333366777767763333333367777776633.
    .3336666777633366663366777776336666336677777633666633367776666333.
    .3333336777636667766636777666666776663677766666677666367776333333.
    .3333336777666777777666777666677777766677766667777776667776333333.
    .3666666777667777777766777666777777776677766677777777667776666663.
    .6677766777677777777776777667777777777677766777777777767776677766.
    .6777776777677777777776777667777777777677766777777777767776777776.
    ..................................................................
    `)
carga_leyenda()
game.showLongText("" + linea7 + linea8 + linea9 + linea10 + linea11 + linea12, DialogLayout.Full)
game.setDialogTextColor(13)
game.setDialogCursor(img`
    .cccccccccccccccccccccc.
    cbddddddddddddddddddddbc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cddddddddddddddddddddddc
    cbddddddddddddddddddddbc
    ccbbbbbbbbbbbbbbbbbbbbcc
    ccffffffffffffffffffffcc
    cbcc33c6c44c3c7c66c3ccbc
    cbcc33c6c44c3c7c66c3ccbc
    fbcc33c6c44ccc7c66c3ccbf
    fdccccccccccccccccccccdf
    fdcbbddddddddddddddbbcdf
    fdffffffffffffffffffffdf
    fdccc6c33c4c6c44c3c7ccdf
    fdccc6c33c4c6c44c3c7ccdf
    fdccc6c33ccc6c44ccc7ccdf
    fdccccccccccccccccccccdf
    fdcbbddddddddddddddbbcdf
    fdcbbddddddddddddddbbcdf
    fdffffffffffffffffffffdf
    ffffffffffffffffffffffff
    `)
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87766866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    ..886668888888888888888888888888888888888666888.
    ..86668686768868688676888676886868867688686668..
    .8677866676686767686676867668676768667686687768.
    .8778768776787767787677677678776778767766678778.
    877677687677877677877676767787767787767686776778
    8767768877788676768877787778867676887778.8677678
    867788.8768..86768..8678768..86768..8678..887768
    8888...888....888....88.88....888....88.....8888
    `)
carga_indice()
game.showLongText("" + linea0 + linea1 + linea2 + linea3 + linea4 + linea5 + linea6, DialogLayout.Full)
opcion = randint(1, 6)
let negra = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
let line_negra = negra
line_negra.setPosition(16, 50)
info.setScore(0)
let contador = game.askForNumber("Cuánto tiempo quieres jugar? [0...999] segundos", 3)
info.startCountdown(contador)
forma_palabras()
forever(function () {
    if (opcion == 1) {
        plantilla_vocales()
    }
    if (opcion == 2) {
        plantilla_m_n()
    }
    if (opcion == 3) {
        plantilla_b_v()
    }
    if (opcion == 4) {
        plantilla_c_q_k()
    }
    if (opcion == 5) {
        plantilla_s_x()
    }
    if (opcion == 6) {
        plantilla_g_j()
    }
})
