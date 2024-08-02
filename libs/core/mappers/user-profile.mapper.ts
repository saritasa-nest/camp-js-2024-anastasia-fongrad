import { UserProfile } from '../models/user-profile';
import { UserProfileDto } from '../dtos/user-profile.dto';

export namespace UserProfileMapper {

	/**
	 * 1.
	 * @param dto 1.
	 */
	export function fromDto(dto: UserProfileDto): UserProfile{
		return {
			email: dto.email,
			firstName: dto.first_name,
			lastName: dto.last_name,
			avatar: dto.avatar,
		};
	}
}
