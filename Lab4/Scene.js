/**
 * @Author Michael Rainsford Ryan
 * @Date 12/11/2020
 */

/**
 * A base class for all scenes with basic scene functionality defined.
 */
class Scene {
    /**
     * @constuctor
     * Constructs the scene class and initialises all member variables.
     * @param {string} title A string of the scene's name.
     */
    constructor(title) {
        this.title = title;
    }
    
    /**
     * Called when the scene starts playing.
     */
    start() {
        console.log(this.title + ' starting.');
    }
    
    /**
     * Called when the scene stops playing.
     */
    stop() {
        console.log(this.title + ' stopping.');
    }
    
    /**
     * Renders the scene to a 2D canvas context.
     * @param {object} canvasContext The 2D canvas context to render to.
     */
    render(canvasContext) {
        // Clears the window.
        canvasContext.clearRect(0,0,window.innerWidth, window.innerHeight);

        canvasContext.fillText(this.title, 50.0, 50.0);
    }
}