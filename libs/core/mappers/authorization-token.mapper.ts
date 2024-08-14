import { AuthorizationToken } from '../models/authorization-token.model';
import { AuthorizationTokenDto } from '../dtos/authorization-token.dto';

export namespace AuthorizationTokenMapper {

	/**
	 * Maps authorization token from a dto object to a model.
	 * @param dto Authorization token dto.
	 */
	export function fromDto(dto: AuthorizationTokenDto): AuthorizationToken {
		return {
			accessToken: dto.access,
			refreshToken: dto.refresh,
		};
	}
}
