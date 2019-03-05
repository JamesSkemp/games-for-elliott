import Utilities from "../Utilities";
import AlphabetGame from "./AlphabetGame";

export default class MainMenu extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "MainMenu";

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("MainMenu", "create");

		const alphabetGameButton = this.add.text(this.cameras.main.centerX, 100, "Alphabet");
		alphabetGameButton.setFontFamily("Carlito").setFontSize(40).setAlign("center").setOrigin(0.5).setInteractive();
		alphabetGameButton.on("pointerdown", this.loadAlphabet, this);
		alphabetGameButton.input.cursor = "crosshair";
	}

	public update(): void {
		// Update logic, as needed.
	}

	/**
	 * Load the alphabet game.
	 */
	public loadAlphabet() {
		this.scene.start(AlphabetGame.Name);
	}
}
