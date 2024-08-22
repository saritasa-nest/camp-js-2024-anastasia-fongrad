import { UserLogin } from '@js-camp/core/models/user-login.model';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import { UserLoginMapper } from '@js-camp/core/mappers/user-login.mapper';
import { UserRegistrationMapper } from '@js-camp/core/mappers/user-registration-mapper';
import { AuthorizationToken } from '@js-camp/core/models/authorization-token.model';
import { AuthorizationTokenDto } from '@js-camp/core/dtos/authorization-token.dto';
import { AuthorizationTokenMapper } from '@js-camp/core/mappers/authorization-token.mapper';

import { http } from '..';

const registrationUrl = 'auth/register/';
const loginUrl = 'auth/login/';

export namespace AuthService {

	/** Fetches a list of genres. */
	export async function login(loginData: UserLogin): Promise<AuthorizationToken> {
		const loginDto = UserLoginMapper.toDto(loginData)
		const { data } = await http.post<AuthorizationTokenDto>(loginUrl, loginDto);
		return AuthorizationTokenMapper.fromDto(data);
	}

	/** 1. */
	export async function register(registrationData: UserRegistration): Promise<AuthorizationToken> {
		const registrationDto = UserRegistrationMapper.toDto(registrationData);
		const { data } = await http.post<AuthorizationTokenDto>(registrationUrl, registrationDto);
		return AuthorizationTokenMapper.fromDto(data);
	}
}
