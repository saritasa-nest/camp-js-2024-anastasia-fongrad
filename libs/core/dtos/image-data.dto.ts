import { ImageDestination } from './enums/image-destination.enum';

/** Authorization jwt tokens DTO. */
export type ImageDataDto = {

	/** Refresh jwt token. */
	readonly dest: ImageDestination;

	/** Access jwt token. */
	readonly filename: string;

	/** 1. */
	readonly content_type: string;
};
