import { UserLogin } from '@js-camp/core/models/user-login.model';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';
import { AuthorizationTokenDto } from '@js-camp/core/dtos/authorization-token.dto';
import { AuthorizationTokenMapper } from '@js-camp/core/mappers/authorization-token.mapper';
import { AppUrlConfig } from '@js-camp/react/utils/appUrlConfig';

import { http } from '..';

export namespace AuthService {

	/**
	 * Performs user login operation.
	 * @param loginData Login data received from the form.
	 */
	export async function login(loginData: UserLogin): Promise<AuthorizationToken> {
		const loginDto = UserLoginMapper.toDto(loginData);
		const { data } = await http.post<AuthorizationTokenDto>(
			AppUrlConfig.paths.login,
			loginDto,
		);
		return AuthorizationTokenMapper.fromDto(data);
	}

	/**
	 * Registers new user in a system.
	 * @param registrationData User registration data received from the form.
	 */
	export async function register(registrationData: UserRegistration): Promise<AuthorizationToken> {
		const registrationDto = UserRegistrationMapper.toDto(registrationData);
		const { data } = await http.post<AuthorizationTokenDto>(
			AppUrlConfig.paths.registration,
			registrationDto,
		);
		return AuthorizationTokenMapper.fromDto(data);
	}

	/**
	 * Requests an access token refresh.
	 * @param refreshToken Refresh token.
	 */
	export async function refresh(refreshToken: string): Promise<AuthorizationToken> {
		const { data } = await http.post<AuthorizationTokenDto>(
			AppUrlConfig.paths.tokenRefresh,
			{ refresh: refreshToken },
		);
		return AuthorizationTokenMapper.fromDto(data);
	}

	/**
	 * Verifies user access token.
	 * @param accessToken Access token.
	 */
	export async function verify(accessToken: string): Promise<void> {
		const { data } = await http.post<void>(
			AppUrlConfig.paths.tokenVerify,
			{ token: accessToken },
		);
		return data;
	}

	/**
	 * Checks if a user is authorized in a system.
	 * @param accessToken Access token.
	 */
	export function isAuthorized(accessToken: string): boolean {
		verify(accessToken)
			.then(
				() => true,
			)
			.catch(
				() => false,
			);
		return false;
	}

}
