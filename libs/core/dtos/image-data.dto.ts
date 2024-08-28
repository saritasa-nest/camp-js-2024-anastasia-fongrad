import { ImageDestination } from './enums/image-destination.enum';

/** Image metadata DTO. */
export type ImageDataDto = {

	/** Image destination. */
	readonly dest: ImageDestination;

	/** Image filename. */
	readonly filename: string;

	/** File's content type. */
	readonly content_type: string;
};
