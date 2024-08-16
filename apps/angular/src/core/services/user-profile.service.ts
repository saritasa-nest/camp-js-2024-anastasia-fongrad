import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserProfile } from '@js-camp/core/models/user-profile.model';
import { UserProfileDto } from '@js-camp/core/dtos/user-profile.dto';
import { UserProfileMapper } from '@js-camp/core/mappers/user-profile.mapper';

import { AppUrlConfig } from './app-url-config.service';

/** Connects to the API to manage user profiles data. */
@Injectable({
	providedIn: 'root',
})
export class UserProfileService {

	private readonly http = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/** Gets an user profile from the server. */
	public getProfile(): Observable<UserProfile | null> {
		return this.http.get<UserProfileDto>(
			this.appUrlConfig.paths.userProfile,
		).pipe(
			map((response: UserProfileDto) => UserProfileMapper.fromDto(response)),
		);
	}
}
