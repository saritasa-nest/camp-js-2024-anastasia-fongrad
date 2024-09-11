import { ImageUploadParamsDto } from './image-upload-params.dto';

/** Image upload dto type. */
export type ImageUploadDto = {

	/** URL to send an image. */
	readonly url: string;

	/** Image upload parameters. */
	readonly params: ImageUploadParamsDto;
};
