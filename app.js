let five = require('johnny-five');
let firebase = require('devices-core').firebase;
let board = new five.Board();

board.on("ready", function() {
    // https://github.com/rwaldron/johnny-five/wiki/Led 
    let led = new five.Led(11);
    led.on();
    led.brightness(2);

    firebase.send('boot', {'name': 'arduino1', 'message': 'hello!'});

    firebase.on('light', function(v) {
        v = v*(100.0/1023.0);
        led.brightness(v);
        console.log(v);
    });

});



function toggleLed(led) {
    let light = true;
    led.on();

    return function() {
        light = !light;
        light ? led.on() : led.off();
        return light;
    };
}
