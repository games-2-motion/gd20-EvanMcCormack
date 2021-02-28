/**
 * @Author Michael Rainsford Ryan
 * @Date 12/11/2020
 */

/**
 * A class to manage all scenes in the game and update the active one.
 */
class SceneManager {
    /**
     * @constructor
     * Initialises all the member variables for the class.
     * @param {object} canvasContext The canvas context to render to.
     */
    constructor(canvasContext) {
        this.currentScene = null; // The currently running scene.
        this.currentSceneIndex = -1 // The index of the current scene.
        this.scenes = {}; // A dictionary of all scenes.
        this.sceneTitles = []; // A list of all the scene titles.
        this.canvasContext = canvasContext; // The canvas context to render to.
    }
    
    /**
     * Adds a scene to scene manager.
     * @param {object} scene The scene object to be added.
     */
    addScene(scene) {
        // Checks if a scene of the same name already exists and only adds the
        //      scene if not.
        if (!this.sceneTitles.includes(scene.title)) {
            this.scenes[scene.title] = scene; // Adds the scene to the dictionary.
            this.sceneTitles.push(scene.title); // Adds the title to the list.
        }
        else {
            console.log("There is already a scene with title " + scene.title + " in the scene manager.");
        }
    }
    
    /**
     * Stops the currently running scene (if one exists) and switches to the
     *     scene specified by the parameter.
     * Prints an error to the console if the scene title does not match any of
     *     the scenes.
     * @param {string} title The title of the scene to switch to.
     */
    goToScene(title) {
        // Checks that a scene with the specified title exists.
        if (this.sceneTitles.includes(title)) {
            // Checks if there is a current scene.
            if (this.currentScene !== null) {
                this.currentScene.stop(); // Stops the current scene.
            }
            
            // Sets the current scene.
            this.currentScene = this.scenes[title]; 
            
            // Sets the current scene index
            this.currentSceneIndex = this.sceneTitles.indexOf(title);
            
            this.currentScene.start(); // Start the new current scene.
        } else {
            // Prints an error if a scene with the title couldn't be found.
            console.log("No scene with the title of " + title + " exists.");
        }
    }
    
    /**
     * Stops the previous scene (if one exists) and moves to the next scene
     *     in the list.
     * Prints an error if there are no scene in the list.
     */
    goToNextScene() {
        // Checks that there are scenes in the manager.
        if (this.sceneTitles.length > 0) {
            // Increments the scene index and wraps it if it reaches the end of
            // the list.
            this.currentSceneIndex =
                (this.currentSceneIndex + 1) % this.sceneTitles.length;

            // Checks if there is a currently running scene.
            if (this.currentScene !== null) {
                this.currentScene.stop(); // Stops the current scene.
            }

            // Finds the new current scene title.
            var sceneTitle = this.sceneTitles[this.currentSceneIndex];
            
            // Sets the current scene with the new title.
            this.currentScene = this.scenes[sceneTitle];
            
            // Starts the new current scene.
            this.currentScene.start();
        } else {
            // Prints an error if there is no scenes in the list.
            console.log("There are no scenes to switch to.");
        }
    }

    /**
     * Renders the current scene to the canvas context if neither are null.
     */
    render() {
        // Checks that the current scene and the canvas context are not null.
        if (this.currentScene !== null && this.canvasContext !== null) {
            this.currentScene.render(this.canvasContext); // Renders the scene.
        }
    }
}