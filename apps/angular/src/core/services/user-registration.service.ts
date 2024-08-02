import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { UserRegistration } from '@js-camp/core/models/user-registration';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { Observable, throwError } from 'rxjs';
import { InputErrors } from '@js-camp/core/models/input-error';
import { InputErrorsMapper } from '@js-camp/core/mappers/input-errors.mapper';
import { catchError, map } from 'rxjs/operators';
import { InputErrorDto } from '@js-camp/core/dtos/input-error.dto';

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
	public postRegistrationData(registrationData: UserRegistration): Observable<UserAccessToken | InputErrors[]> {
		return this.http.post<UserAccessToken | { errors: InputErrorDto[] }>(
			this.apiUrlService.registrationPath,
			UserRegistrationMapper.toDto(registrationData),
		).pipe(
			map(response => {
				return response as UserAccessToken;
			}),
			catchError(error => {
				if (error.error && error.error.errors && error.status === 400) {
					return throwError(() => InputErrorsMapper.fromDto(error.error.errors));
				}
				return throwError(() => error);
			}),
		);
	}
}
