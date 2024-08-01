import { Immerable, OmitImmerable } from './immerable';

/** Genre. */
export class UserLogin extends Immerable {

	/** Id. */
	public readonly email: string;

	/** 1. */
	public readonly password: string;

	public constructor(data: GenreConstructorData) {
		super();
		this.email = data.email;
		this.password = data.password;
	}
}

type GenreConstructorData = OmitImmerable<UserLogin>;
