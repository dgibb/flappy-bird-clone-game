import {canvas} from "./canvas"

export var pipes={

queue:[],
range:0,
offset:100,
pipe:0,


init: function(){

	pipes.pipe=document.getElementById('pipes');
	pipes.queue=[];
	pipes.range=canvas.grassLine-300;
	var width = canvas.width;
	for (var i = 0; i<(canvas.width/350+1);i++){
		var pipe=[];
		pipe.push(width);
		width+=350;
		pipe.push(Math.random()*pipes.range+pipes.offset)
		pipes.queue.push(pipe);
	}
},

step: function(){
	for (var i=0; i<pipes.queue.length; i++){
		pipes.queue[i][0]-=4;
	}
	pipes.offScreen();

},

gen: function(){
	var pipe = [];
	pipe.push(pipes.queue[pipes.queue.length-1][0]+350);
	pipe.push(Math.random()*pipes.range+pipes.offset);
	console.log(pipe);
	return pipe;
},

draw:function(){
for (var i=0; i<pipes.queue.length; i++){
		canvas.ctx.drawImage(pipes.pipe, pipes.queue[i][0],  pipes.queue[i][1]-500);
	}
},

offScreen:function(){
	if(pipes.queue[0][0]<-100){
		console.log('NEW PIPE')
		pipes.queue.splice(0,1);
		pipes.queue.push(pipes.gen());
	}

},


};
