/**
 * main is the entry point for Javascript programs.
 *
 */
function main()
{
    console.log("Hello World!");

    var ctx = initCanvas();
    for (var i = 0; i < 200; i++)
    {   
        draw(ctx);
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

function draw(ctx)
{
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;

        ctx.fillStyle = rgb(r,g,b);
        // args are x,y,width,height
        ctx.fillRect(Math.random() * (window.innerWidth-50), Math.random() * (window.innerHeight+50), 10, 10);
}
