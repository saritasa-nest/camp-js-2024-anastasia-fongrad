import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiUrlService } from './api-url.service';
import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserLogin } from '@js-camp/core/models/user-login';
import { InputErrorsMapper } from '@js-camp/core/mappers/input-errors.mapper';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { UserProfileMapper } from '@js-camp/core/mappers/user-profile.mapper';
import { UserProfileDto } from '@js-camp/core/dtos/user-profile.dto';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class UserLoginService {

	private http: HttpClient = inject(HttpClient);

	private apiUrlService: ApiUrlService = inject(ApiUrlService);

	/**
	 * 1.
	 * @param registrationData 1.
	 * @returns 1.
	 */
	public postLoginData(registrationData: UserLogin): Observable<UserAccessToken> {
		return this.http.post<UserAccessToken>(
			this.apiUrlService.loginPath,
			UserLoginMapper.toDto(registrationData),
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

	/** 1. */
	public getUserProfile(): Observable<UserProfile> {
		return this.http.get<UserProfileDto>(
			this.apiUrlService.userProfilePath
		).pipe(
			map((response: UserProfileDto) => UserProfileMapper.fromDto(response)),
		);
	}
}
