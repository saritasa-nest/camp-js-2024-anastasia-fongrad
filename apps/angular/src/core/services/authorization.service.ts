import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, catchError, map, tap } from 'rxjs';
import { AuthorizationTokenDto } from '@js-camp/core/dtos/authorization-token.dto';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserLogin } from '@js-camp/core/models/user-login.model';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { AuthorizationTokenMapper } from '@js-camp/core/mappers/authorization-token.mapper';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';

import { AppUrlConfig } from './app-url-config.service';
import { AuthorizationTokenService } from './authorization-token.service';

/** Provides methods to perform user authorization. */
@Injectable({
	providedIn: 'root',
})
export class AuthorizationService {

	private readonly http = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	private readonly tokenService = inject(AuthorizationTokenService);

	/**
	 * Registers new user in a system.
	 * @param registrationData User registration data received from the form.
	 * @returns An observable with user registration errors.
	 */
	public register(registrationData: UserRegistration): Observable<AuthorizationToken> {
		return this.http.post<AuthorizationTokenDto>(
			this.appUrlConfig.paths.registration,
			UserRegistrationMapper.toDto(registrationData),
		).pipe(
			map(token => AuthorizationTokenMapper.fromDto(token)),
		);
	}

	/**
	 * Performs user login operation.
	 * @param loginData Login data received from the form.
	 * @returns An observable with login errors..
	 */
	public login(loginData: UserLogin): Observable<AuthorizationToken> {
		return this.http.post<AuthorizationTokenDto>(
			this.appUrlConfig.paths.login,
			UserLoginMapper.toDto(loginData),
		).pipe(
			map(token => AuthorizationTokenMapper.fromDto(token)),
			tap(token => this.tokenService.saveToken(token)),
		);
	}

	/** Performs user logout operation. */
	public logout(): void {
		this.tokenService.clearToken();
	}

	/** Checks if a user is authorized in a system. */
	public isAuthorized(): Observable<boolean> {
		return this.tokenService.getAccessToken().pipe(
			map(accessToken => accessToken !== null),
			catchError(() => of(false)),
		);
	}

	/** Requests an access token refresh. */
	public refresh(): Observable<AuthorizationToken> {
		return this.tokenService.getRefreshToken().pipe(
			switchMap(refreshToken => this.http.post<AuthorizationTokenDto>(
				this.appUrlConfig.paths.tokenRefresh,
				{ refresh: refreshToken },
			).pipe(
				map(token => AuthorizationTokenMapper.fromDto(token)),
				tap(token => this.tokenService.saveToken(token)),
			)),
		);
	}

	/** Verifies users access token. */
	public verify(): Observable<void> {
		return this.tokenService.getAccessToken().pipe(
			switchMap(accessToken => this.http.post<void>(
				this.appUrlConfig.paths.tokenVerify,
				{ token: accessToken },
			)),
		);
	}
}
