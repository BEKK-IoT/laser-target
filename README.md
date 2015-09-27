# Arduino-uno

Setup for the Arduino uno

## Installing

- First flash your arduino-uno with the Firmata: StandarFirmata. Can be found in the default Arduino software under `File -> Examples -> Firmata -> StandarFirmata`
- Install dependencies with: `npm install`

## Running
- Run the app: `npm run app`

## Example: Blinking LED
![Arduino-uno](http://johnny-five.io/img/led-scene-0.gif)

```js
import { firebase, five } from 'devices-core';
const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(13);
  // Send a greet event to firebase
  fb.send('greet', {name: 'world'});

  // Wait for a greet event from firebase to turn the led on
  fb.on('greet', `users/${TEAM}`, () => led.on());

});
```

## Refrences
- [Jhonny-five API](http://johnny-five.io/api/)
