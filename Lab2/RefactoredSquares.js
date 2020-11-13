function main()
{
    var ctx = initCanvas();
    var squares = [];
    

    for (var i = 0; i < 100; i++)
    {
        var x  = Math.floor(Math.random()*1000);
	    var y  = Math.floor(Math.random()*1000);
	    var width = Math.floor(Math.random()*200);
        var height = Math.floor(Math.random()*200);
        var colour = rgb(Math.random()*255, Math.random()*255, Math.random()*255);
	    squares[i] = new Square(x,y,width,height,colour);
	    squares[i].draw(ctx);
    }
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