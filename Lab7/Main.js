function main()
{
    this.ctx = init();
    console.log(is_touch_device());
    document.addEventListener('touchstart', () => this.onTouchStart(event));
    document.addEventListener('touchmove', () => this.touchMove(event));
    document.addEventListener('touchend', () => this.onTouchEnd(event));
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
    //console.log("touches");
    this.touches = e.touches;
    this.time1 = new Date();
    // Print out (x,y) co-ords of touch: touches[0].clientX contains
    // the x position.
    //console.log(touches[0].clientX, touches[0].clientY);
}

function touchMove(e)
{
    this.endTouches = e.touches;
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.moveTo(this.touches[0].clientX, this.touches[0].clientY);
    this.ctx.lineTo(this.endTouches[0].clientX, this.endTouches[0].clientY);
    this.ctx.stroke();
}

function onTouchEnd(e)
{
    this.time2 = new Date();
    this.timeElapsed = this.time2 - this.time1;
    this.length = Math.sqrt(((this.endTouches[0].clientX - this.touches[0].clientX) * (this.endTouches[0].clientX - this.touches[0].clientX))
                            + ((this.endTouches[0].clientY - this.touches[0].clientY) * (this.endTouches[0].clientY - this.touches[0].clientY)));
    console.log("Time Elapsed: " + this.timeElapsed);
    console.log("Line Length:" + this.length);

    if(this.length >= 100 && this.timeElapsed <= 200)
    {
        this.ctx.save();
        this.ctx.fillStyle = 'rgb(0,0,0)';
        this.ctx.font = 'italic 40pt Calibri';
        this.ctx.textBaseline = "top";
        this.ctx.fillText("Swipe", (this.canvas.width / 2), (this.canvas.height / 2));
        console.log(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.restore();
    }
}