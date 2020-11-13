function Square(x, y, width, height, colour)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = colour;
}

Square.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.x, this.y, this.height, this.width);
    ctx.stroke();
}