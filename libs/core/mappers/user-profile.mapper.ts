import { UserProfile } from '../models/user-profile.model';
import { UserProfileDto } from '../dtos/user-profile.dto';

export namespace UserProfileMapper {

	/**
	 * Maps user profile dto object to a user profile model.
	 * @param dto User profile dto object.
	 */
	export function fromDto(dto: UserProfileDto): UserProfile | null {
		if ((dto.email != null) && (dto.first_name != null) && (dto.last_name != null)) {
			return new UserProfile({
				email: dto.email,
				firstName: dto.first_name,
				lastName: dto.last_name,
				avatar: dto.avatar,
			});
		}
		return null;
	}
}
