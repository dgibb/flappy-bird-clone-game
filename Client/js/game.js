import {canvas} from "./canvas"
import {bird} from "./bird"
import {pipes} from "./pipes"

export var game={

gravity:1.2,
mode:'start',
timer:0,
score:0,
highScore:0,

run:function(){
	game.mode='running';
	game.timer = window.setInterval(game.step,25);
},

pause:function(){
	game.mode='pause';
	game.timer = window.clearInterval(game.timer);
},

over:function(){
	game.mode='over';
	game.timer = window.clearInterval(game.timer);
	canvas.ctx.drawImage(canvas.GameOver, ((canvas.width/2)-408), (canvas.height/3)-94);
	var string3= 'Press enter to Play Again';
	canvas.ctx.font = "60px Joystix";
	canvas.ctx.textAlign="center";
	canvas.ctx.fillText(string3,canvas.width/2, canvas.height/2+94);
	game.score-=1;
	if (game.score>game.highScore){
		game.highScore=game.score;
		game.highScore+=1;
		}
},

start:function(){
	canvas.grassX=0;
	canvas.skyX=0;
	pipes.init();
	canvas.init();
	bird.init();
	game.mode='start'
	game.score=0;
	canvas.ctx.fillStyle="rgb(255,255,255)";
	canvas.ctx.font = "30px Joystix";
	var string= 'Score: ';
	string = string.concat(game.score.toString());
	canvas.ctx.fillText(string,10,50);
	var string1= 'Highscore: ';
	string1 = string1.concat(game.highScore.toString());
	canvas.ctx.fillText(string1,10, canvas.height-20);
	var string2= 'Press Space to Begin';
	canvas.ctx.font = "60px Joystix";
	canvas.ctx.textAlign="center";
	canvas.ctx.fillText(string2,canvas.width/2, canvas.height/2);


},

step:function(){

	canvas.draw();
	bird.step();
	game.score+=1;
	canvas.grassX-=4;
	if (canvas.grassX<-1920){canvas.grassX=0;}
	canvas.skyX-=2;
	if (canvas.skyX<-1920){canvas.skyX=0}
	pipes.step();
	canvas.ctx.fillStyle="rgb(255,255,255)";
	canvas.ctx.font = "30px Joystix";
	canvas.ctx.textAlign="start";
	var string= 'Score: ';
	string = string.concat(game.score.toString());
	canvas.ctx.fillText(string,10,50);
	var string1= 'Highscore: ';
	string1 = string1.concat(game.highScore.toString());
	canvas.ctx.fillText(string1,10, canvas.height-20);

},

init(){
	canvas.init();
	pipes.init();
	bird.init();
	game.mode='start'
	canvas.ctx.fillStyle="rgb(255,255,255)";
	canvas.ctx.font = "30px Joystix";
	var string= 'Score: ';
	string = string.concat(game.score.toString());
	canvas.ctx.fillText(string,10,50);
	var string1= 'Highscore: ';
	string1 = string1.concat(game.highScore.toString());
	canvas.ctx.fillText(string1,10, canvas.height-20);
	var string2= 'Press Space to Begin';
	canvas.ctx.font = "60px Joystix";
	canvas.ctx.textAlign="center";
	canvas.ctx.fillText(string2,canvas.width/2, canvas.height/2);
	window.clearInterval(game.timer)
}

};
