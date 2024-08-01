import { UserLogin } from '../models/user-login';
import { UserLoginDto } from '../dtos/user-login.dto';

export namespace UserLoginMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: UserLogin): UserLoginDto {
		return {
			email: model.email,
			password: model.password,
		};
	}
}
