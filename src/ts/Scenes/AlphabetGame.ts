import Utilities from "../Utilities";

export default class AlphabetGame extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "AlphabetGame";

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("AlphabetGame", "create");

		const row1Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
		const row2Letters = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
		const row3Letters = ["S", "T", "U", "V", "W", "X", "Y", "Z"];

		const leftPadding: number = 75;
		const letterSize: number = 80;
		const letterSpacing: number = 80;

		for (let i = 0; i < row1Letters.length; i++) {
			this.add.text(leftPadding + letterSpacing * i, 100, row1Letters[i])
				.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
				.setInteractive().on("pointerdown", () => { this.playLetter(row1Letters[i]); }, this);
		}

		for (let i = 0; i < row2Letters.length; i++) {
			this.add.text(leftPadding + letterSpacing * i, 225, row2Letters[i])
				.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
				.setInteractive().on("pointerdown", () => { this.playLetter(row1Letters[i]); }, this);
		}

		for (let i = 0; i < row3Letters.length; i++) {
			this.add.text(leftPadding + letterSpacing * i + (letterSpacing / 2), 350, row3Letters[i])
				.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
				.setInteractive().on("pointerdown", () => { this.playLetter(row1Letters[i]); }, this);
		}

		this.add.text(this.cameras.main.centerX, 500, "SONG")
			.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
			.setInteractive().on("pointerdown", this.playSong, this);
	}

	/**
	 * Plays a letter.
	 */
	public playLetter(letter: string): void {
		console.log(arguments);
		// TODO
	}

	/**
	 * Plays an alphabet song.
	 */
	public playSong(): void {
		// TODO make sure the song isn't already playing
		// TODO play song
		console.log("Play Song");
	}
}
