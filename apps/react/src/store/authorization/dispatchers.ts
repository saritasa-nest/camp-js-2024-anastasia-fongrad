import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@js-camp/react/api/services/authService';
import { UserLogin } from '@js-camp/core/models/user-login.model';
import { UserRegistration } from '@js-camp/core/models/user-registration.model';
import { AuthTokenService } from '@js-camp/react/api/services/authTokenService';
import { HandleErrorsService } from '@js-camp/react/api/services/handleErrorsService';

/** Async thunk action for user login. */
export const loginUser = createAsyncThunk(
	'user/login',
	async(loginData: UserLogin, { rejectWithValue }) => {
		try {
			const authToken = await AuthService.login(loginData);
			if (authToken) {
				AuthTokenService.saveAuthToken(authToken);
				return authToken;
			}
			return rejectWithValue(null);
		} catch (error: unknown) {
			return rejectWithValue(HandleErrorsService.parseError(error));
		}
	},
);

/** Async thunk action for user registration. */
export const registerUser = createAsyncThunk(
	'user/register',
	async(registrationData: UserRegistration, { rejectWithValue }) => {
		try {
			const authToken = await AuthService.register(registrationData);
			if (authToken) {
				AuthTokenService.saveAuthToken(authToken);
				return authToken;
			}
			return rejectWithValue(null);
		} catch (error: unknown) {
			return rejectWithValue(HandleErrorsService.parseError(error));
		}
	},
);
