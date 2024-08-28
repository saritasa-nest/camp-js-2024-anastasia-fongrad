import { ImageUpload } from '../models/image-upload.model';
import { ImageUploadDto } from '../dtos/image-upload.dto';

export namespace ImageUploadMapper {

	/**
	 * 1.
	 * @param dto 1.
	 */
	export function fromDto(dto: ImageUploadDto): ImageUpload {
		return {
			policy: dto.policy,
			successActionStatus: dto.success_action_status,
			amazonCredential: dto['x-amz-credential'],
			amazonDate: dto['x-amz-date'],
			amazonSignature: dto['x-amz-signature'],
			amazonAlgorithm: dto['x-amz-algorithm'],
			formAction: dto.form_action,
			key: dto.key,
			acl: dto.acl,
			amazonSecurityToken: dto['x-amz-security-token'],
			contentType: dto['content-type'],
			cacheControl: dto['Cache-Control'],
			contentDisposition: dto['Content-Disposition'],
		};
	}
}
