import Utilities from "../Utilities";

export default class AlphabetGame extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "AlphabetGame";
	/**
	 * Track whether a sound is currently playing.
	 */
	private soundPlaying: boolean = false;
	private alphabetSound;
	private currentColor: number = 0;
	private colors = ["red", "yellow", "green", "blue"];

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("AlphabetGame", "create");
		this.cameras.main.setBackgroundColor("#333");

		const row1Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
		const row2Letters = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
		const row3Letters = ["S", "T", "U", "V", "W", "X", "Y", "Z"];

		const leftPadding: number = 75;
		const letterSize: number = 80;
		const letterSpacing: number = 80;

		for (let i = 0; i < row1Letters.length; i++) {
			this.add.text(leftPadding + letterSpacing * i, 100, row1Letters[i])
				.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
				.setColor(this.colors[this.currentColor])
				.setInteractive().on("pointerdown", () => { this.playLetter(row1Letters[i]); }, this);
			this.incrementCurrentColor();
		}

		for (let i = 0; i < row2Letters.length; i++) {
			this.add.text(leftPadding + letterSpacing * i, 225, row2Letters[i])
				.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
				.setColor(this.colors[this.currentColor])
				.setInteractive().on("pointerdown", () => { this.playLetter(row2Letters[i]); }, this);
			this.incrementCurrentColor();
			}

		for (let i = 0; i < row3Letters.length; i++) {
			this.add.text(leftPadding + letterSpacing * i + (letterSpacing / 2), 350, row3Letters[i])
				.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
				.setColor(this.colors[this.currentColor])
				.setInteractive().on("pointerdown", () => { this.playLetter(row3Letters[i]); }, this);
			this.incrementCurrentColor();
		}

		this.add.text(this.cameras.main.centerX, 500, "SONG")
			.setFontFamily("Carlito").setFontSize(letterSize).setOrigin(0.5)
			.setColor(this.colors[this.currentColor])
			.setInteractive().on("pointerdown", this.playSong, this);
		this.incrementCurrentColor();
	}

	/**
	 * Plays a letter.
	 */
	public playLetter(letter: string): void {
		if (!this.soundPlaying) {
			const song = this.sound.add("alphabet_letter_dad_" + letter);
			song.on("complete", (sound) => {
				this.soundPlaying = false;
				song.destroy();
			});
			song.play();
			//console.log(arguments);
		}
		// TODO
	}

	/**
	 * Plays an alphabet song.
	 */
	public playSong(): void {
		if (!this.soundPlaying) {
			this.soundPlaying = true;
			const song = this.sound.add("alphabet_song_1_dad");
			//console.log(song.duration);
			//console.log(song.totalDuration);
			song.on("complete", (sound) => {
				//console.log(sound);
				//console.log("complete");
				this.soundPlaying = false;
				song.destroy();
			});
			song.play();
		}
	}

	/**
	 * Increase the current color variable so that the next usage pulls the proper color.
	 */
	private incrementCurrentColor(): void {
		this.currentColor++;
		if (this.currentColor >= this.colors.length) {
			this.currentColor = 0;
		}
	}
}
