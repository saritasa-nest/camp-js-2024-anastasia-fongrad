import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ImageData } from '@js-camp/core/models/image-data.model';
import { ImageDataMapper } from '@js-camp/core/mappers/image-data.mapper';
import { ImageUpload } from '@js-camp/core/models/image-upload.model';
import { ImageUploadDto } from '@js-camp/core/dtos/image-upload.dto';
import { ImageUploadMapper } from '@js-camp/core/mappers/image-upload.mapper';

import { AppUrlConfig } from './app-url-config.service';

/** Connects to the API to manage user profiles data. */
@Injectable({
	providedIn: 'root',
})
export class ImageUploadService {

	private readonly http = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * Gets parameters for upload to S3 bucket.
	 * @param imageData Basic image metadata.
	 */
	public getUploadParams(imageData: ImageData): Observable<ImageUpload> {
		const dtoParameters = ImageDataMapper.toDto(imageData);
		const url = this.appUrlConfig.paths.getImageParams;
		return this.http.post<ImageUploadDto>(
			url,
			dtoParameters,
		).pipe(
			map((response: ImageUploadDto) => ImageUploadMapper.fromDto(response)),
		);
	}
}
