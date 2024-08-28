/** Image upload type. */
export type ImageUpload = {

	/** Image upload policy. */
	readonly policy: string;

	/** Access action status. */
	readonly successActionStatus: string;

	/** Amazon s3 direct credentials. */
	readonly amazonCredential: string;

	/** Amazon s3 direct date. */
	readonly amazonDate: string;

	/** Amazon s3 direct signature. */
	readonly amazonSignature: string;

	/** Amazon s3 direct algorithm. */
	readonly amazonAlgorithm: string;

	/** Upload form action. */
	readonly formAction: string;

	/** S3 object key. */
	readonly key: string;

	/** Access control list. */
	readonly acl: string;

	/** Amazon s3 direct security token. */
	readonly amazonSecurityToken: string;

	/** Content type of the file. */
	readonly contentType: string;

	/** Cache control header. */
	readonly cacheControl: string;

	/** Content disposition header. */
	readonly contentDisposition: string;
};
