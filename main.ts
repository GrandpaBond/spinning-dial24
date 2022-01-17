function dial24_finish () {
    dial24_list = []
    if (dial24_is != -1) {
        basic.clearScreen()
        dial24_is = -1
    }
}
function dial24_point (value: number) {
    if (dial24_is > -1) {
        dial_flip(dial24_is)
    }
    dial24_is = dial24_list[(value + 24) % 24]
    dial_flip(dial24_is)
}
function dial24_init () {
    dial24_list = [
    2120,
    2130,
    3130,
    3140,
    3141,
    3241,
    3242,
    3243,
    3343,
    3344,
    3334,
    2334,
    2324,
    2314,
    1314,
    1304,
    1303,
    1203,
    1202,
    1201,
    1101,
    1100,
    1110,
    2110
    ]
    dial24_is = -1
    basic.clearScreen()
    led.plot(2, 2)
}
function dial_flip (xyxy: number) {
    dial24_flip_xy(Math.idiv(xyxy, 100))
    dial24_flip_xy(xyxy % 100)
}
function dial24_flip_xy (xy: number) {
    led.toggle(Math.idiv(xy, 10), xy % 10)
}
let dial24_is = 0
let dial24_list: number[] = []
dial24_init()
for (let index = 0; index <= 99; index++) {
    dial24_point(index)
    basic.pause(100)
}
dial24_finish()
