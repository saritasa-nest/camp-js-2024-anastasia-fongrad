import { ErrorMessage } from './enums/error-message.enum';

/** Server errors model. */
export type ServerError = {

	/** Controls name. */
	readonly controlName: string;

	/** . */
	readonly controlErrors: ErrorMessage[];
};
