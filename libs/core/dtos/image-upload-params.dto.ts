/** Image upload parameters dto type. */
export type ImageUploadParamsDto = {

	/** Image upload policy. */
	readonly policy: string;

	/** Access action status. */
	readonly success_action_status: string;

	/** Amazon s3 direct credentials. */
	readonly 'x-amz-credential': string;

	/** Amazon s3 direct date. */
	readonly 'x-amz-date': string;

	/** Amazon s3 direct signature. */
	readonly 'x-amz-signature': string;

	/** Amazon s3 direct algorithm. */
	readonly 'x-amz-algorithm': string;

	/** Upload form action. */
	readonly form_action: string;

	/** S3 object key. */
	readonly key: string;

	/** Access control list. */
	readonly acl: string;

	/** Amazon s3 direct security token. */
	readonly 'x-amz-security-token': string;

	/** Content type of the file. */
	readonly 'content-type': string;

	/** Cache control header. */
	readonly 'Cache-Control': string;

	/** Content disposition header. */
	readonly 'Content-Disposition': string;
};
