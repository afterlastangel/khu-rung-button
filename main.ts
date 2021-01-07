pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let counter = 0
let is_pressed = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0 && is_pressed == 0) {
        is_pressed = 1
        if (counter == 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        if (is_pressed == 1) {
            is_pressed = 0
            if (counter == 0) {
                counter = 1
            } else {
                counter = 0
            }
        }
    }
    basic.pause(1)
})
