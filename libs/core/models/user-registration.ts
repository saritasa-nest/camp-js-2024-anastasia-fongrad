import { Immerable, OmitImmerable } from './immerable';

/** Genre. */
export class UserRegistration extends Immerable {

	/** Id. */
	public readonly email: string;

	/** Name. */
	public readonly firstName: string;

	/** 1. */
	public readonly lastName: string;

	/** 1. */
	public readonly password: string;

	/** 1. */
	public readonly avatar?: string;

	public constructor(data: GenreConstructorData) {
		super();
		this.email = data.email;
		this.firstName = data.firstName;
		this.lastName = data.lastName;
		this.password = data.password;
		this.avatar = data?.avatar ?? undefined;
	}
}

type GenreConstructorData = OmitImmerable<UserRegistration>;
