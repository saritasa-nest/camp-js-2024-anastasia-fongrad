import { ErrorMessageDto } from '../dtos/enums/error-message-dto.enum';
import { ErrorMessage } from '../models/enums/error-message.enum';

export namespace ErrorMessageMapper {

	/**
	 * Converts server error messages from dto to a model.
	 * @param dto Server error message dto.
	 */
	export function fromDto(dto: ErrorMessageDto): ErrorMessage {
		const statusMap: Record<ErrorMessageDto, ErrorMessage> = {
			[ErrorMessageDto.NoPermission]: ErrorMessage.NoPermission,
			[ErrorMessageDto.NoAccount]: ErrorMessage.NoAccount,
			[ErrorMessageDto.AuthenticationError]: ErrorMessage.AuthenticationError,
			[ErrorMessageDto.ServerError]: ErrorMessage.ServerError,
			[ErrorMessageDto.HeaderError]: ErrorMessage.HeaderError,
			[ErrorMessageDto.InvalidToken]: ErrorMessage.InvalidToken,
			[ErrorMessageDto.NoBlank]: ErrorMessage.NoBlank,
			[ErrorMessageDto.EmailError]: ErrorMessage.EmailError,
			[ErrorMessageDto.PasswordLength]: ErrorMessage.PasswordLength,
			[ErrorMessageDto.PasswordCommon]: ErrorMessage.PasswordCommon,
			[ErrorMessageDto.PasswordNumeric]: ErrorMessage.PasswordNumeric,
			[ErrorMessageDto.NotUnique]: ErrorMessage.NotUnique,
		};
		return statusMap[dto] ?? ErrorMessage.DefaultError;
	}
}
