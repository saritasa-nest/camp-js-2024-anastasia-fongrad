import { ImageDestinationDto } from '@js-camp/core/dtos/enums/image-destination-dto.enum';
import { ImageUploadRequestDto } from '@js-camp/core/dtos/image-upload-request.dto';
import { ImageUploadDto } from '@js-camp/core/dtos/image-upload.dto';
import { AppUrlConfig } from '@js-camp/react/utils/appUrlConfig';

import { http } from '..';

export namespace ImageUploadService {

	/**
	 * 1.
	 * @param file 1.
	 */
	export async function uploadUserAvatar(file: File): Promise<void> {
		await uploadImage(file, ImageDestinationDto.UserAvatar);
	}

	/**
	 * 1.
	 * @param file 1.
	 * @param imageDestination 1.
	 */
	async function uploadImage(file: File, imageDestination: ImageDestinationDto): Promise<void> {
		const uploadRequest: ImageUploadRequestDto = {
			dest: imageDestination,
			filename: file.name,
			content_type: file.type,
			content_length: file.size,
		}
		try {
			const { url, params } = await getUploadParameters(uploadRequest);
			const { data} = await http.post<string>(url, params);
		}
		catch(error: unknown) {
			throw error;
		}
	}

	/**
	 * 1.
	 * @param uploadRequest 1.
	 */
	async function getUploadParameters(uploadRequest: ImageUploadRequestDto): Promise<ImageUploadDto> {
		const url = AppUrlConfig.paths.getParams;
		const { data } = await http.get<ImageUploadDto>(
			url,
			{ params: uploadRequest },
		);
		return data;
	}
}
