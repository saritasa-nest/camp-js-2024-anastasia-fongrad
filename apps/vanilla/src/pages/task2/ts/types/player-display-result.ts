/** Ready-to-display data for a specific player. */
export type PlayerDisplayResult = {

	/** The index of the player throwing a dice. */
	readonly playerIndex: number;

	/** The result of throwing a dice. */
	readonly newDiceResult: number;

	/** New score of the player. */
	readonly playerScore: number;

	/** Whether the player won this round. */
	readonly isWinner: boolean;
};
