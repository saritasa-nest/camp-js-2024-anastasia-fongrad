/** The result of a die roll for a specific player. */
export type PlayerTurnResult = {

	/** The id of the player throwing a dice. */
	readonly playerId: number;

	/** The result of throwing a dice. */
	readonly diceResult: number;
};
