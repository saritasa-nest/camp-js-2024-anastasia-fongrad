import { ImageData } from '../models/image-data.model';
import { ImageDataDto } from '../dtos/image-data.dto';

export namespace ImageDataMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: ImageData): ImageDataDto {
		return {
			dest: model.destinationDirectory,
			filename: model.filename,

			// Disable eslint for a dto field name
			// eslint-disable-next-line @typescript-eslint/naming-convention
			content_type: model.contentType,
		};
	}
}
