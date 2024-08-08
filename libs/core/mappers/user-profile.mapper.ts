import { UserProfile } from '../models/user-profile.model';
import { UserProfileDto } from '../dtos/user-profile.dto';

export namespace UserProfileMapper {

	/**
	 * Maps user profile dto object to a user profile model.
	 * @param dto User profile dto object.
	 */
	export function fromDto(dto: UserProfileDto): UserProfile {
		return {
			email: dto.email,
			firstName: dto.first_name,
			lastName: dto.last_name,
			avatar: dto.avatar,
		};
	}
}
