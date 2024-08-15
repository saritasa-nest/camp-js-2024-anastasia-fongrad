import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';

/** Slice of the Redux store for managing drawer's open state. */
export const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setOpen(state, action: PayloadAction<boolean>) {
			state.open = action.payload;
		},
	},
});

/** Sets new open state. */
export const { setOpen } = drawerSlice.actions;

export default drawerSlice.reducer;
