function main()
{
    var ctx = initCanvas();

    var x  = 50;
    var y  = 50;
    var width = 100;
    var height = 100;
    var colour = rgb(0, 0, 0);
    var square = new Square(x,y,width,height,colour);

    square.draw(ctx);

    document.addEventListener("keydown", () => this.keyDownHandler(square, event));
   
    ctx.clearRect(0,0, ctx.width, ctx.height);
}

function initCanvas()
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

function clamp(value, min, max)
{
    if(max<min) {
        var temp = min;
        min = max;
        max = temp;
    }
    return Math.max(min, Math.min(value, max));
}

function rgb(r, g, b)
{
    return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function keyDownHandler(square, e)
{
    if([37, 38, 39, 40].indexOf(e.keyCode)>-1){
        e.preventDefault();
    }
        if(e.keyCode === 38){
            square.move(square.x, square.y - 10);
        }
        if(e.keyCode === 37){
            square.move(square.x - 10, square.y);
        }
        if(e.keyCode === 40){
            square.move(square.x, square.y + 10);
        }
        if(e.keyCode === 39){
            square.move(square.x + 10, square.y);
        }
}