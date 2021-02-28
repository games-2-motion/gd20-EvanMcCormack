function main()
{
    this.ctx = init();
    console.log(is_touch_device());
    document.addEventListener('touchstart', () => this.onTouchStart(event));
    document.addEventListener('touchmove', () => this.touchMove(event));
    document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});

    
}

function init()
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

function onTouchStart(e)
{
    console.log("touches");
    this.touches = e.touches;
    // Print out (x,y) co-ords of touch: touches[0].clientX contains
    // the x position.
    console.log(touches[0].clientX, touches[0].clientY);
}

function touchMove(e)
{
    
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.moveTo(this.touches[0].clientX, this.touches[0].clientY);
    this.ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    this.ctx.stroke();
}