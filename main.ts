basic.forever(function () {
    if (input.acceleration(Dimension.X) <= -100) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) >= 100) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (input.acceleration(Dimension.X) > -100 && input.acceleration(Dimension.X) < 100) {
        basic.showIcon(IconNames.Happy)
    }
})
