/** Ready-to-display data for a specific player. */
export type PlayerDisplayResult = {

	/** The id of the player throwing a dice. */
	readonly playerId: number;

	/** The result of throwing a dice. */
	readonly newDiceResult: number;

	/** New score of the player. */
	readonly playerScore: number;

	/** Whether the player won this round. */
	readonly isWinner: boolean;
};
