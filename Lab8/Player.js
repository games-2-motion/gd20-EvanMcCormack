const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
const cycleLoop = [0, 1, 0, 2];
var currentLoopIndex = 0;


class Player
{
     /**
	 * player class constructor
	 * @constructor
	 */
    constructor(x, y, fps, ctx) {
		this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.previousTime = 0;

        this.img = new Image();
        this.img.addEventListener('load', function() {
        }, false);
        this.img.src = 'playerSheet.png';
        this.playerSprite = new Sprite(this.ctx, {
            x: this.x,
            y: this.y,
            width: 256,
            height: 64,
            image: this.img,
            numberOfFrames: 4,
            fps: fps,
            loop: true
        });
    }

    init(){
        
    }

    update(){
        var now = Date.now();
        var deltaTime = (now - this.previousTime);
        this.playerSprite.update(deltaTime);
        this.draw(this.ctx);
        this.previousTime = now;
    }

    draw(ctx)
    {
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        this.playerSprite.draw();
    }
}