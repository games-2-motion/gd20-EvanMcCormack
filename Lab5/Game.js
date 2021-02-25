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
        var canvas = document.createElement("canvas");
        // Assign the canvas an id so we can reference it elsewhere.
        canvas.id = 'mycanvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // We want this to be a 2D canvas.
        var ctx = canvas.getContext("2d");
        // Adds the canvas element to the document.
        document.body.appendChild(canvas);
        
        return ctx;
    }
    
    update(){
        console.log("Game Updating");  
        if(this.player.checkCollision(this.goal))
        {
            console.log("Collision");
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
    
    draw(ctx){
        this.player.draw(ctx);
        this.goal.draw(ctx);
    }
}

