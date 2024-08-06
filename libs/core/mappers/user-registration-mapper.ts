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

			// Disable eslint for a dto field name.
			// eslint-disable-next-line @typescript-eslint/naming-convention
			first_name: model.firstName,

			// Disable eslint for a dto field name.
			// eslint-disable-next-line @typescript-eslint/naming-convention
			last_name: model.lastName,
			password: model.password,
		};
	}
}
