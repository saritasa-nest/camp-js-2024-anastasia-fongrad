import { ImageDestination } from '../dtos/enums/image-destination.enum';

/** Image metadata DTO. */
export type ImageData = {

	/** Image destination. */
	readonly destinationDirectory: ImageDestination;

	/** Image filename. */
	readonly filename: string;

	/** File's content type. */
	readonly contentType: string;
};
