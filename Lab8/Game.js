class Game
{
    /**
	 * game class constructor
	 * @constructor
	 */
    constructor() {
        this.ctx = this.initCanvas();
        this.player = new Player(50, 50, 30, this.ctx);
        this.player2 = new Player(90, 50, 10, this.ctx);
		this.initWorld();
        this.ctx.clearRect(0,0, this.ctx.width, this.ctx.height);

        this.boundRecursiveUpdate = () => this.update(this);
    }

    /**
	 * initialises the canvas where everything is drawn on
	 */
    initWorld() {
        console.log("Initialising game world");        
	}

    initCanvas()
    {
        // Use the document object to create a new element canvas.
        this.canvas = document.createElement("canvas");
        // Assign the canvas an id so we can reference it elsewhere.
        this.canvas.id = 'mycanvas';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // We want this to be a 2D canvas.
        var ctx = this.canvas.getContext("2d");
        // Adds the canvas element to the document.
        document.body.appendChild(this.canvas);
        
        return ctx;
    }
    
    update(){
        window.requestAnimationFrame(this.boundRecursiveUpdate);
        this.player.update();
        this.player2.update();
        this.draw(this.ctx);
    } 
    
    draw(ctx){
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.player.draw(ctx);
        this.player2.draw(ctx);
    }
}

