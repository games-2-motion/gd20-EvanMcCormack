/* Constructor function to initialise this sprite with the canvas context
* and a set of image options. The image options specify both image and
* animation properties. For example, image width, image height, the image
* object and the y coordinate where the image should be drawn.
* The animation properties include the ticks per frame and number of
* frames.
* @param {context} context The 2D context for the canvas.
* @param {Object} imageOptions An object describing the image and animation
* properties.
*/

class Sprite
{

    constructor (context, imageOptions)
    {
        this.x = imageOptions.x;
        this.y = imageOptions.y;
        this.width = imageOptions.width;
        this.height = imageOptions.height;
        this.image = imageOptions.image;
        this.frames = imageOptions.frames;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 1000 / imageOptions.fps;;
        this.numberOfFrames = imageOptions.numberOfFrames;
        this.loop = imageOptions.loop;
        this.ctx = context;
    }

    update(deltaTime)
    {
        this.tickCount += deltaTime;

        if(this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if(this.frameIndex < this.numberOfFrames -1) 
            {
                this.frameIndex += 1;
            } else if (this.loop) 
            {
                this.frameIndex = 0;
            }
        }
    }

    gameLoop(){
        window.requestAnimationFrame(this.gameLoop);

        this.update();
        this.draw();
    }

    draw()
    {
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            this.x,
            this.y,
            this.width / this.numberOfFrames,
            this.height);
    }
}