import { UserRegistration } from '../models/user-registration';
import { UserRegistrationDto } from '../dtos/user-registration.dto';

export namespace UserRegistrationMapper {

	/**
	 * 1.
	 * @param model 1.
	 */
	export function toDto(model: UserRegistration): UserRegistrationDto {
		return {
			email: model.email,
			first_name: model.firstName,
			last_name: model.lastName,
			password: model.password,
		};
	}
}
