import { AuthorizationToken } from '../models/authorization-token.model';
import { AuthorizationTokenDto } from '../dtos/authorization-token.dto';

export namespace AuthorizationTokenMapper {

	/**
	 * Maps anime dto to model.
	 * @param dto Anime dto.
	 */
	export function fromDto(dto: AuthorizationTokenDto): AuthorizationToken {
		return {
			accessToken: dto.access,
			refreshToken: dto.refresh,
		};
	}
}
