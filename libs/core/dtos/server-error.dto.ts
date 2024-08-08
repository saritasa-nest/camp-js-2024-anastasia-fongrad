import { ErrorMessageDto } from './enums/error-message-dto.enum';

/** Server error dto. */
export type ServerErrorDto = {

	/** Server error attribute. */
	readonly attr: string;

	/** Server error code. */
	readonly code: string;

	/** Server error detailed message. */
	readonly detail: ErrorMessageDto;
};
