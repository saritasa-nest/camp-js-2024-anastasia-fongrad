import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UserAccessToken } from '@js-camp/core/models/user-access-token';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserLogin } from '@js-camp/core/models/user-login';
import { ServerErrorsMapper } from '@js-camp/core/mappers/input-errors.mapper';
import { UserProfile } from '@js-camp/core/models/user-profile';
import { UserProfileMapper } from '@js-camp/core/mappers/user-profile.mapper';
import { UserProfileDto } from '@js-camp/core/dtos/user-profile.dto';
import { UserRegistration } from '@js-camp/core/models/user-registration';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';

import { InputErrors } from '@js-camp/core/models/input-error';

import { AppUrlConfig } from './app-url-config.service';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AuthorizationService {

	private readonly http = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	private parseError(error: unknown): Observable<InputErrors[]> {
		if (error instanceof HttpErrorResponse && error.error?.errors) {
			return of(ServerErrorsMapper.fromDto(error.error.errors));
		}
		return throwError(() => new Error('An unknown error occurred'));
	}

	/**
	 * 1.
	 * @param registrationData 1.
	 * @returns 1.
	 */
	public postRegistrationData(registrationData: UserRegistration): Observable<UserAccessToken | InputErrors[]> {
		return this.http.post<UserAccessToken>(
			this.appUrlConfig.paths.registration,
			UserRegistrationMapper.toDto(registrationData),
		).pipe(
			map(response => response as UserAccessToken),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/**
	 * 1.
	 * @param registrationData 1.
	 * @returns 1.
	 */
	public postLoginData(loginData: UserLogin): Observable<UserAccessToken | InputErrors[]> {
		return this.http.post<UserAccessToken>(
			this.appUrlConfig.paths.login,
			UserLoginMapper.toDto(loginData),
		).pipe(
			map(response => response as UserAccessToken),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/** 1. */
	public getUserProfile(): Observable<UserProfile> {
		return this.http.get<UserProfileDto>(
			this.appUrlConfig.paths.userProfile,
		).pipe(
			map((response: UserProfileDto) => UserProfileMapper.fromDto(response)),
		);
	}

	/**
	 * 1.
	 * @param refreshToken 1.
	 */
	public refreshToken(refreshToken: string): Observable<UserAccessToken | InputErrors[]> {
		return this.http.post<UserAccessToken>(
			this.appUrlConfig.paths.tokenRefresh,
			{ refresh: refreshToken },
		).pipe(
			map(response => response as UserAccessToken),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/**
	 * 1.
	 * @param accessToken 1.
	 */
	public verifyToken(accessToken: string): Observable<void | InputErrors[]> {
		return this.http.post<void>(
			this.appUrlConfig.paths.tokenVerify,
			{ token: accessToken },
		).pipe(
			map(() => undefined),
			catchError((error: unknown) => this.parseError(error)),
		);
	}
}
