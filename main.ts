let numero_aleatorio = 0
let nivel1 = 0
let jugadas_microbit: number[] = []
let numero_jugadas_hechas = 0
let indice = 0
let jugadas_usuario: number[] = []
function llamada_crear_secuencia () {
	
}
input.onPinPressed(TouchPin.P0, function () {
    llamada_evaluar_jugada_de_usuario(0)
})
function crear_frecuencia () {
    numero_aleatorio = randint(0, 2)
    nivel1 = nivel1 + 1
    basic.showString("\"N\"")
    basic.showNumber(nivel1)
    jugadas_microbit.push(numero_aleatorio)
    for (let value of jugadas_microbit) {
        if (value == 0) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Giraffe)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 1) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Ghost)
            basic.pause(200)
            basic.clearScreen()
        }
        if (value == 2) {
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.House)
            basic.pause(200)
            basic.clearScreen()
        }
    }
    numero_jugadas_hechas = 0
    indice = 0
    jugadas_usuario = []
}
function crear_frecuencia2 () {
    numero_aleatorio = randint(0, 2)
    nivel1 = nivel1 + 1
    basic.showString("\"N\"")
    basic.showNumber(nivel1)
}
function llamada_reiniciar_juego () {
    indice = 0
    nivel1 = 0
    numero_jugadas_hechas = 0
    jugadas_microbit = []
    jugadas_usuario = []
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
}
input.onButtonPressed(Button.A, function () {
    llamada_reiniciar_juego()
})
function llamada_evaluar_jugada_de_usuario (núm: number) {
	
}
function evaluar_juagada_de_usuario (núm: number) {
    jugadas_usuario.push(núm)
    if (jugadas_usuario[indice] == jugadas_microbit[0]) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        numero_jugadas_hechas += 1
        indice = indice + 1
        if (numero_jugadas_hechas == nivel1) {
            llamada_crear_secuencia()
        }
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.showString("\"Game Over\"")
        control.reset()
    }
}
input.onPinPressed(TouchPin.P2, function () {
    llamada_evaluar_jugada_de_usuario(2)
})
input.onPinPressed(TouchPin.P1, function () {
    llamada_evaluar_jugada_de_usuario(1)
})
