class Game
{
    /**
	 * game class constructor
	 * @constructor
	 */
    constructor() {
        this.ctx = this.initCanvas();
        this.player = new Player(50, 50, 100, 100, 'rgb(22,100,8)');
        this.goal = new Goal(310, 310, 100, 100, 'rgb(86,8,24)');
		this.initWorld();
        this.ctx.clearRect(0,0, this.ctx.width, this.ctx.height);

        this.boundRecursiveUpdate = () => this.update(this);
    }

    /**
	 * initialises the canvas where everything is drawn on
	 */
    initWorld() {
        console.log("Initialising game world");        
        document.addEventListener("keydown", () => this.keyDownHandler(event));
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
        if(this.player.checkCollision(this.goal))
        {
            this.collisionResponse();
        }
        this.draw(this.ctx);
        window.requestAnimationFrame(this.boundRecursiveUpdate);
    } 

    keyDownHandler(e){
        if([37, 38, 39, 40].indexOf(e.keyCode)>-1){
            e.preventDefault();
        }
            if(e.keyCode === 38){
                this.player.move(this.player.x, this.player.y - 10);
            }
            if(e.keyCode === 37){
                this.player.move(this.player.x - 10, this.player.y);
            }
            if(e.keyCode === 40){
                this.player.move(this.player.x, this.player.y + 10);
            }
            if(e.keyCode === 39){
                this.player.move(this.player.x + 10, this.player.y);
            }
    }  

    collisionResponse(){
        this.goal.kill();
        this.ctx.save();
        this.ctx.fillStyle = 'rgb(0,0,0)';
        this.ctx.font = 'italic 40pt Calibri';
        this.ctx.textBaseline = "top";
        this.ctx.fillText("Game Over", (this.canvas.width / 2), (this.canvas.height / 2));
        console.log(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.restore();
    }
    
    draw(ctx){
        this.ctx.clearRect(0,0, this.ctx.width, this.ctx.height);
        this.player.draw(ctx);
        if(this.goal.isAlive()===true)
        {
            this.goal.draw(ctx);
        }
    }
}

