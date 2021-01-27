class Square
{
    constructor(x, y, width, height, colour)
    {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = colour;
    }

    draw(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.height, this.width);
        ctx.stroke();
    }

    move(x, y)
    {
        this.x = x;
        this.y = y;

        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");

        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        this.draw(ctx);
    }
}
