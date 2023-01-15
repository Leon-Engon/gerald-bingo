input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showNumber(Llistatnumeros[Mostra - 1])
    Mostra += -1
})
input.onButtonPressed(Button.B, function () {
    if (list.length != 0) {
        Atzar = randint(0, 50 - 1)
        Bingo = list.removeAt(Atzar)
        Llistatnumeros.push(Bingo)
        Mostra = Llistatnumeros.length
        basic.showNumber(Bingo)
    }
})
let Bingo = 0
let Atzar = 0
let Mostra = 0
let Llistatnumeros: number[] = []
let list: number[] = []
let Bolas = 89
for (let index = 0; index <= Bolas - 1; index++) {
    list.push(index + 1)
}
