import { UserProfile } from '@js-camp/core/models/user-profile.model';
import { UserProfileDto } from '@js-camp/core/dtos/user-profile.dto';
import { UserProfileMapper } from '@js-camp/core/mappers/user-profile.mapper';
import { AppUrlConfig } from '@js-camp/react/utils/appUrlConfig';

import { http } from '..';
export namespace UserProfileService {

	/** Fetches a list of genres. */
	export async function fetchGenres(): Promise<UserProfile | null> {
		const { data } = await http.get<UserProfileDto>(AppUrlConfig.paths.userProfile);
		return UserProfileMapper.fromDto(data);
	}
}
