import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { UserRegistration } from '@js-camp/core/models/user-registration';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { Observable } from 'rxjs';

import { ApiUrlService } from './api-url.service';

/** 1. */
@Injectable({
	providedIn: 'root',
})
export class UserRegistrationService {

	private http: HttpClient = inject(HttpClient);

	private apiUrlService: ApiUrlService = inject(ApiUrlService);

	/**
	 * 1.
	 * @param registrationData 1.
	 * @returns 1.
	 */
	public postRegistrationData(registrationData: UserRegistration): Observable<UserAccessToken> {
		return this.http.post<UserAccessToken>(
			this.apiUrlService.registrationPath,
			UserRegistrationMapper.toDto(registrationData),
		);
	}
}
