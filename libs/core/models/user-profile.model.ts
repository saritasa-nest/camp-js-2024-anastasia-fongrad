/** User profile. */
export class UserProfile {

	/** User's email. */
	public readonly email: string;

	/** User's first name. */
	public readonly firstName: string;

	/** User's last name. */
	public readonly lastName: string;

	/** User's profile avatar. */
	public readonly avatar?: string;

	public constructor(data: UserProfileConstructorData) {
		this.email = data.email;
		this.firstName = data.firstName;
		this.lastName = data.lastName;
		this.avatar = data.avatar;
	}

	/** Returns users full name. */
	public getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

type UserProfileConstructorData = {

	/** User's email. */
	readonly email: string;

	/** User's first name. */
	readonly firstName: string;

	/** User's last name. */
	readonly lastName: string;

	/** User's profile avatar. */
	readonly avatar?: string;
};
