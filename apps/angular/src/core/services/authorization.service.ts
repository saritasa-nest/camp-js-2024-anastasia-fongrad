import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthorizationTokenDto } from '@js-camp/core/dtos/authorization-token.dto';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserLogin } from '@js-camp/core/models/user-login';
import { ServerErrorsMapper } from '@js-camp/core/mappers/input-errors.mapper';
import { UserRegistration } from '@js-camp/core/models/user-registration';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { InputErrors } from '@js-camp/core/models/input-error';
import { AuthorizationTokenMapper } from '@js-camp/core/mappers/authorization-token.mapper';

import { AppUrlConfig } from './app-url-config.service';
import { LocalStorageService } from './local-storage.service';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AuthorizationService {

	private readonly http = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	private readonly localStorageService = inject(LocalStorageService);

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
	public register(registrationData: UserRegistration): Observable<void | InputErrors[]> {
		return this.http.post<AuthorizationTokenDto>(
			this.appUrlConfig.paths.registration,
			UserRegistrationMapper.toDto(registrationData),
		).pipe(
			map(() => undefined),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/**
	 * 1.
	 * @param loginData 1.
	 * @returns 1.
	 */
	public login(loginData: UserLogin): Observable<void | InputErrors[]> {
		return this.http.post<AuthorizationTokenDto>(
			this.appUrlConfig.paths.login,
			UserLoginMapper.toDto(loginData),
		).pipe(
			map((tokenDto: AuthorizationTokenDto) => {
				this.localStorageService.saveToken(AuthorizationTokenMapper.fromDto(tokenDto));
				return undefined;
			}),
			catchError((error: unknown) => this.parseError(error)),
		);
	}

	/** 1. */
	public logout(): void {
		this.localStorageService.clearToken();
	}

	/** 1. */
	public isAuthorized(): Observable<boolean> {
		return this.verify().pipe(
			map(() => true),
			catchError(() => of(false)),
		);
	}

	/** 1. */
	public refresh(): Observable<void | InputErrors[]> {
		return this.localStorageService.getRefreshToken().pipe(
			switchMap(refreshToken => {
				if (!refreshToken) {
					return of(undefined);
				}
				return this.http.post<AuthorizationTokenDto>(
					this.appUrlConfig.paths.tokenRefresh,
					{ refresh: refreshToken },
				).pipe(
					map((tokenDto: AuthorizationTokenDto) => {
						this.localStorageService.saveToken(AuthorizationTokenMapper.fromDto(tokenDto));
						return undefined;
					}),
					catchError((error: unknown) => this.parseError(error)),
				);
			}),
		);
	}

	/** 1. */
	public verify(): Observable<void | InputErrors[]> {
		return this.localStorageService.getAccessToken().pipe(
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
