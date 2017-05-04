//David Gibb

import {bird} from "./bird"
import {game} from "./game"

export var input={

keys:[0xFF,0xFF],

 keyDown: function(e){
    	switch(e.keyCode)
	{

			case 68:
			game.draw();
			break;

			case 32: //spacebar
				switch(game.mode){

					case 'start':
						game.run();
						bird.velocity-=25;
					break;

					case 'running':
						bird.velocity-=25;
					break;

					case 'pause':
						bird.velocity-=25;
					break;
				}
			break;

			case 13: //enter
				switch(game.mode){

					case 'running':
						game.pause();
					break;

					case 'pause':
						game.run();
					break;

					case 'over':
					game.start();
					break;

				}
			break;
		}
	},
};
