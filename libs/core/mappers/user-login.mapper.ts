import { UserLogin } from '../models/user-login.model';
import { UserLoginDto } from '../dtos/user-login.dto';

export namespace UserLoginMapper {

	/**
	 * Maps user login data from a model to a dto object.
	 * @param model User login object model.
	 */
	export function toDto(model: UserLogin): UserLoginDto {
		return {
			email: model.email,
			password: model.password,
		};
	}
}
