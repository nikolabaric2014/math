let brojA = 0
let brojB = 0
input.onButtonPressed(Button.A, function () {
    brojA += 1
    basic.showString("" + (brojA))
})
input.onButtonPressed(Button.B, function () {
    brojB += 1
    basic.showString("" + (brojB))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (brojA + brojB))
    brojA = 0
    brojB = 0
})
