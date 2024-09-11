import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook, useDispatch, useSelector,
} from 'react-redux';

import { genresSlice } from './genre/slice';
import { animeSlice } from './anime/slice';
import { drawerSlice } from './drawer/slice';
import { userProfileSlice } from './userProfile/slice';
import { authorizationSlice } from './authorization/slice';

/** The Redux store of the application. */
export const store = configureStore({
	reducer: {
		genres: genresSlice.reducer,
		anime: animeSlice.reducer,
		drawer: drawerSlice.reducer,
		authorization: authorizationSlice.reducer,
		userProfile: userProfileSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		// We need to disable this check to allow ES6 classes in Redux.
		// You can find more info about this middleware in docs:
		// https://redux-toolkit.js.org/api/serializabilityMiddleware
		serializableCheck: false,
	}),
});

/** Type definition for the state of the Redux store. */
export type RootState = ReturnType<typeof store.getState>;

/** Type definition for the dispatch function of the Redux store. */
export type AppDispatch = typeof store.dispatch;

/** Typed `useDispatch` hook. */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**  Typed `useSelector` hook. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
