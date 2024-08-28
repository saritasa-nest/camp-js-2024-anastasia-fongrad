import { ImageDestination } from '../dtos/enums/image-destination.enum';

/** 1. */
export type ImageData = {

	/** Refresh jwt token. */
	readonly destinationDirectory: ImageDestination;

	/** Access jwt token. */
	readonly filename: string;

	/** 1. */
	readonly contentType: string;
};
