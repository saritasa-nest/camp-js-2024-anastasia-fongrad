export type ImageUploadDto = {

	/** Refresh jwt token. */
	readonly policy: string;

	/** Access jwt token. */
	readonly success_action_status: string;

	/** 1. */
	readonly 'x-amz-credential': string;

	/** 1. */
	readonly 'x-amz-date': string;

	/** 1. */
	readonly 'x-amz-signature': string;

	/** 1. */
	readonly 'x-amz-algorithm': string;

	/** 1. */
	readonly form_action: string;

	/** 1. */
	readonly key: string;

	/** 1. */
	readonly acl: string;

	/** 1. */
	readonly 'x-amz-security-token': string;

	/** 1. */
	readonly 'content-type': string;

	/** 1. */
	readonly 'Cache-Control': string;

	/** 1. */
	readonly 'Content-Disposition': string;
};
