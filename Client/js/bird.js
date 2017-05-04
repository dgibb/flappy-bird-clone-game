import {canvas} from "./canvas"
import {pipes} from "./pipes"
import {game} from "./game"

export var bird={

x:0,
y:0,
circle:0,
velocity:0,
height:48,
width:48,
birdUp:0,
birdDown:0,

init: function(){
	var canvas=document.getElementById('flappy-screen');
	bird.x =canvas.width/4;
	bird.y=(canvas.height)/2;
	bird.birdUp=document.getElementById('birdUp');
	bird.birdDown=document.getElementById('birdDown');
	bird.draw();
},

draw: function(){
	if (bird.velocity>=0){
		canvas.ctx.drawImage(bird.birdDown, bird.x, bird.y);
		}
	else{
		canvas.ctx.drawImage(bird.birdUp, bird.x, bird.y);
	}
},

step(){

	bird.collision()

	bird.y+=bird.velocity;

	if (bird.y<0){bird.y=0;bird.velocity=0}
	if ((bird.y+bird.height)>canvas.grassLine){game.over()}

	bird.velocity+=game.gravity;
	bird.velocity*=0.9;

	bird.draw();

},

collision:function(){

	for(var i=0; i<pipes.queue.length;i++){
		if (((bird.x+48)>pipes.queue[i][0])&&(bird.x<(pipes.queue[i][0]+100))){
			if(((bird.y)<pipes.queue[i][1])||((bird.y+48)>(pipes.queue[i][1]+200))){
				console.log(bird.x, bird.y, pipes.queue[i][0], pipes.queue[i][1])
				game.over();
			}
		}
	}

},

};
