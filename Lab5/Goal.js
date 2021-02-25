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
    }

    init(){

    }

    update(){
    }

    draw(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.strokeRect(this.x, this.y, this.height, this.width);
        ctx.stroke();
    }

}