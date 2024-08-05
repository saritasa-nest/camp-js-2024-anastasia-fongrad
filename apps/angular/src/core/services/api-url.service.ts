import { Injectable } from '@angular/core';

/** Provides urls to work with the API. */
@Injectable({
	providedIn: 'root',
})
export class ApiUrlService {

	/** An url for the get anime list request. */
	public readonly animeListPath: string;

	/** 1. */
	public readonly loginPath: string;

	/** 1. */
	public readonly userProfilePath: string;

	/** 1. */
	public readonly registrationPath: string;

	/** 1. */
	public readonly tokenRefreshPath: string;

	/** 1. */
	public readonly tokenVerifyPath: string;

	public constructor() {
		this.animeListPath = 'anime/anime/';
		this.loginPath = 'auth/login/';
		this.registrationPath = 'auth/register/';
		this.userProfilePath = 'users/profile/';
		this.tokenRefreshPath = 'token/refresh/';
		this.tokenVerifyPath = 'token/verify/';
	}
}
