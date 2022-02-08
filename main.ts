input.onButtonPressed(Button.A, function () {
    if (true) {
        ESP8266_IoT.connectKidsiot("9e8aB6lZZR7MnUtI ", "1")
        ESP8266_IoT.uploadKidsiot(77)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (true) {
        ESP8266_IoT.connectKidsiot("9e8aB6lZZR7MnUtI ", "2")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        ESP8266_IoT.uploadKidsiot(23)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        ESP8266_IoT.connectKidsiot("9e8aB6lZZR7MnUtI ", "1")
        ESP8266_IoT.uploadKidsiot(23)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (true) {
        ESP8266_IoT.connectKidsiot("9e8aB6lZZR7MnUtI ", "2")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        ESP8266_IoT.uploadKidsiot(73)
    }
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.off, function () {
    basic.showIcon(IconNames.SmallHeart)
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.on, function () {
    basic.showIcon(IconNames.Heart)
    serial.writeLine("do1")
})
basic.showIcon(IconNames.SmallDiamond)
ESP8266_IoT.initWIFI(SerialPin.P1, SerialPin.P2, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Hotspot", "password")
basic.pause(5000)
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(false)) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
