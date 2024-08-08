import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthorizationTokenDto } from '@js-camp/core/dtos/authorization-token.dto';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserLogin } from '@js-camp/core/models/user-login.model';
import { ServerErrorsMapper } from '@js-camp/core/mappers/server-errors.mapper';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { ServerError } from '@js-camp/core/models/server-error.model';
import { AuthorizationTokenMapper } from '@js-camp/core/mappers/authorization-token.mapper';

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

	private parseError(error: unknown): Observable<ServerError[]> {
		if (error instanceof HttpErrorResponse && error.error?.errors) {
			return of(ServerErrorsMapper.fromDto(error.error.errors));
		}
		return throwError(() => new Error('An unknown error occurred'));
	}

	/**
	 * Registers new user in a system.
	 * @param registrationData User registration data received from the form.
	 * @returns An observable with user registration errors.
	 */
	public register(registrationData: UserRegistration): Observable<void | ServerError[]> {
		return this.http.post<AuthorizationTokenDto>(
			this.appUrlConfig.paths.registration,
			UserRegistrationMapper.toDto(registrationData),
		).pipe(
			map(() => undefined),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/**
	 * Performs user login operation.
	 * @param loginData Login data received from the form.
	 * @returns An observable with login errors..
	 */
	public login(loginData: UserLogin): Observable<void | ServerError[]> {
		return this.http.post<AuthorizationTokenDto>(
			this.appUrlConfig.paths.login,
			UserLoginMapper.toDto(loginData),
		).pipe(
			map((tokenDto: AuthorizationTokenDto) => {
				this.tokenService.saveToken(AuthorizationTokenMapper.fromDto(tokenDto));
				return undefined;
			}),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/** Performs user logout operation. */
	public logout(): void {
		this.tokenService.clearToken();
	}

	/** 1. */
	public isAuthorized(): Observable<boolean> {
		return this.verify().pipe(
			map(() => true),
			catchError(() => of(false)),
		);
	}

	/** Requests an access token refresh. */
	public refresh(): Observable<void | ServerError[]> {
		return this.tokenService.getRefreshToken().pipe(
			switchMap(refreshToken => {
				if (!refreshToken) {
					return of(undefined);
				}
				return this.http.post<AuthorizationTokenDto>(
					this.appUrlConfig.paths.tokenRefresh,
					{ refresh: refreshToken },
				).pipe(
					map((tokenDto: AuthorizationTokenDto) => {
						this.tokenService.saveToken(AuthorizationTokenMapper.fromDto(tokenDto));
						return undefined;
					}),
					catchError((error: unknown) => this.parseError(error)),
				);
			}),
		);
	}

	/** Verifies users access token. */
	public verify(): Observable<void | ServerError[]> {
		return this.tokenService.getAccessToken().pipe(
			switchMap(accessToken => {
				if (!accessToken) {
					return of(undefined);
				}
				return this.http.post<void>(
					this.appUrlConfig.paths.tokenVerify,
					{ token: accessToken },
				).pipe(
					map(() => undefined),
					catchError((error: unknown) => this.parseError(error)),
				);
			}),
		);
	}
}
