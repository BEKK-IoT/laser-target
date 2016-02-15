import { firebase, five } from 'devices-core';

const TEAM = 'laser-target';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {

  const photoresistor = new five.Sensor({
    pin: "A2", 
    freq: 100
  });

  let running = false;
  let count = 0;
  let hits = 0;

 
    
  fb.on('laser-tag',  'users/laser-tagger', function(value){
  	if(value){
  		running = true;
  		count = 0;
  		hits = 0;
  	}else{
	  	running = false;
	    fb.send('stats', { "count" : count, "hits" : hits});
	  	fb.send('stats', null);
  	}
  });

  photoresistor.on("data", function() {
    if(running){
   		console.log(this.value);
    	count++;
    	if(this.value > 600){
    		hits++;
    	}
    }
  });
});