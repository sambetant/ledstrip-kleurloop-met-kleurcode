let pixel = 0
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        pixel += 1
        strip.setPixelColor(pixel, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(pixel + 1, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(pixel + 2, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(pixel + 3, neopixel.colors(NeoPixelColors.Indigo))
        strip.setPixelColor(pixel + 4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(pixel + 5, neopixel.colors(NeoPixelColors.Violet))
        strip.setPixelColor(pixel + 6, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(50)
        strip.clear()
    }
    for (let index = 0; index < 60; index++) {
        pixel += -1
        strip.setPixelColor(pixel, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(pixel + 1, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(pixel + 2, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(pixel + 3, neopixel.colors(NeoPixelColors.Indigo))
        strip.setPixelColor(pixel + 4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(pixel + 5, neopixel.colors(NeoPixelColors.Violet))
        strip.setPixelColor(pixel + 6, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(50)
        strip.clear()
    }
})
