import { UserRegistration } from '../models/user-registration.model';
import { UserRegistrationDto } from '../dtos/user-registration.dto';

export namespace UserRegistrationMapper {

	/**
	 * Maps a user registration model to a dto object.
	 * @param model User registration model.
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
