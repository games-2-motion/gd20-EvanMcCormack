class Goal
{
    /**
	 * goal class constructor
	 * @constructor
	 */
    constructor(x, y, width, height, colour) {
		this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = colour;
        this.alive = true;
    }

    init(){

    }

    update(){
    }

    kill(){
        this.alive = false;
    }

    isAlive(){
        return this.alive;
    }

    draw(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.strokeRect(this.x, this.y, this.height, this.width);
        ctx.stroke();
    }

}