/** Drawer state. */
export type DrawerState = {

	/** Open drawer state. */
	open: boolean;
};

/** Initial state for the drawer's slice of the Redux store. */
export const initialState: DrawerState = {
	open: false,
};
