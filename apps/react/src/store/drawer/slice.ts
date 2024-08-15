import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';

/** 1. */
export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setOpen(state, action: PayloadAction<boolean>) {
			state.open = action.payload;
		},
	},
});

/** 1. */
export const { setOpen } = drawerSlice.actions;

export default drawerSlice.reducer;
