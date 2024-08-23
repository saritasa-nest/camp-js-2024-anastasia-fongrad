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
	 * 1.
	 * @param loginData 1.
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
	 * 1.
	 * @param registrationData 1.
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
	 * 1.
	 * @param refreshToken 1.
	 */
	export async function refresh(refreshToken: string): Promise<AuthorizationToken> {
		const { data } = await http.post<AuthorizationTokenDto>(
			AppUrlConfig.paths.tokenRefresh,
			refreshToken,
		);
		return AuthorizationTokenMapper.fromDto(data);
	}

	/**
	 * 1.
	 * @param accessToken 1.
	 */
	export async function verify(accessToken: string): Promise<void> {
		const { data } = await http.post<void>(
			AppUrlConfig.paths.tokenVerify,
			accessToken,
		);
		return data;
	}

	/**
	 * 1.
	 * @param accessToken 1.
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
