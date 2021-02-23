class Game
{
    /**
	 * game class constructor
	 * @constructor
	 */
    constructor() {
		this.ctx = this.initWorld();
    }

    /**
	 * initialises the canvas where everything is drawn on
	 */
    initWorld() {
        console.log("Initialising game world");
	}
    
    update(){
        console.log("Game Updating");
        window.requestAnimationFrame(this.update())
    } 

    draw(){
    }
}

