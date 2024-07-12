/** The result of a die roll for a specific player. */
export type PlayerTurnResult = {

	/** The index of the player throwing a dice. */
	readonly playerIndex: number;

	/** The number of the player in the game queue. */
	readonly playerTurn: number;

	/** The result of throwing a dice. */
	readonly diceResult: number;
};
