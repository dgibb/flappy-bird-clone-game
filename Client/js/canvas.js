import {pipes} from "./pipes"


export var canvas={

screen:0,
ctx:0,
width:0,
height:0,
grassLine:228,
grass:0,
sky:0,
grassX:0,
skyX:0,
GameOver:0,

init:function(){
	canvas.screen=document.getElementById('flappy-screen');

	var mc = document.getElementById('middle-content')

	canvas.screen.width=mc.clientWidth;
	canvas.screen.height=mc.clientHeight;

	canvas.ctx=canvas.screen.getContext('2d');

	canvas.ctx.width=mc.clientWidth;
	canvas.ctx.height=mc.clientHeight;

	canvas.width=mc.clientWidth;
	canvas.height=mc.clientHeight;

	canvas.grassLine=canvas.height-228;

	canvas.grass=document.getElementById('grass');
	canvas.sky=document.getElementById('sky');
	canvas.GameOver=document.getElementById('GameOver');

	canvas.draw()
},

draw(){
	canvas.ctx.drawImage(canvas.sky, canvas.skyX,0);
	pipes.draw();
	canvas.ctx.drawImage(canvas.grass, canvas.grassX, canvas.grassLine);
},


};
