/**
 * @Author Michael Rainsford Ryan
 * @Date 12/11/2020
 */

/**
 * main is the entry point for Javascript programs.
 */
function main() {
	var game = new Game(); // Creates a new game object.

	// Add an event listener to the click event.
	document.addEventListener("click",
		() => this.clickHandler(game.sceneManager, event));
}

/**
 * Handles click events.
 * Every time the mouse is clicked, the scene manager moves to the next scene
 *     and renders it.
 * @param {object} sceneManager The scene manager to use.
 * @param {object} _event The click event.
 */
function clickHandler(sceneManager, _event) {
	sceneManager.goToNextScene();
	sceneManager.render();
}