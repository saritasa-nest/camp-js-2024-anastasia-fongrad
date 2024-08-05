import { ErrorMessageDto } from '../dtos/enums/error-message-dto.enum';
import { ErrorMessage } from '../models/enums/error-message.enum';

export namespace ErrorMessageMapper {

	/**
	 * Converts anime sort parameters from a dto object to a model.
	 * @param dto Anime sort parameters dto.
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
		};
		return statusMap[dto] ?? ErrorMessage.DefaultError;
	}
}
