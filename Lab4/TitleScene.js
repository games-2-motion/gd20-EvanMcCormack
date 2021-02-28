/**
 * @Author Michael Rainsford Ryan
 * @Date 18/11/2020
 */

 /**
  * A title scene class that defines the screen that greets the player when
  *     the game starts.
  */
 class TitleScene extends Scene {
    /**
     * @constructor
     * Defines and initialises the class's member variables.
     * @param {string} title The scene's name.
     * @param {string} colour The scene's background colour.
     */
    constructor(title, colour) {
        super(title); // Passes the title to the base class's constructor.

        this.colour = colour; // Defines the color variable and sets the value.
    }

    /**
     * Renders the scene to a canvas context.
     * @param {object} canvasContext The canvas context to render to.
     */
    render(canvasContext) {
        // Sets the backgound colour.
        document.body.style.background = this.colour

        // Sets the font properties before rendering the title.
        canvasContext.font = '48px serif';

        // Renders the scene using the base class's render function.
        super.render(canvasContext);
    }
 }