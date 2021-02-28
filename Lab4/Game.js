/**
 * @Author Michael Rainsford Ryan
 * @Date 12/11/2020
 */

/**
 * A game class to manage and store all aspects of the game.
 */
class Game {
    /**
     * @constuctor
     * Constructs the game class, initialising all member variables.
     */
    constructor() {

        this.canvas = null; // The games canvas to draw to, initialised later.

        this.initCanvas(); // Initialise the canvas so it can be used in the scene manager.

        // Create a new scene manager and initialise it with the canvas context.
        this.sceneManager = new SceneManager(this.canvas.getContext('2d'));

        // Add a title scene to the scene manager
        this.sceneManager.addScene(new TitleScene("Title Scene", "rgb(255, 100, 100)"));

        // Add a title scene to the scene manager
        this.sceneManager.addScene(new MenuScene("Menu Scene", "rgb(100, 100, 255)"));

        // Go to the test scene.
        this.sceneManager.goToScene("Title Scene");
        
        this.sceneManager.render();
    }
    
    /**
     * Initialises the canvas member variable as a new to the canvas item.
     */
    initCanvas() {
        // Use the document to create a canvas element
        this.canvas = document.createElement("canvas");
        
        // Assign an ID to the canvas for use later
        this.canvas.id = 'mycanvas';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
	
        // Add the canvas element to the document
        document.body.appendChild(this.canvas);
    }

    /**
     * Renders the game content to the canvas.
     */
    render()
    {
        this.sceneManager.render();
    }
}