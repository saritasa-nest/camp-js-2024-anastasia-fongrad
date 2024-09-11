import { ImageDestinationDto } from './enums/image-destination-dto.enum';

/** Image upload request DTO. */
export type ImageUploadRequestDto = {

	/** Image destination. */
	readonly dest: ImageDestinationDto;

	/** Image filename. */
	readonly filename: string;

	/** File's content type. */
	readonly content_type: string;

	/** File's content length. */
	readonly content_length: number;
};
