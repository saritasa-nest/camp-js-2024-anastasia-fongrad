import { memo, FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {

	/** Is alert dialog open. */
	readonly isAlertOpen: boolean;

	/** Handles the closing of the alert dialog. */
	readonly onAlertClose: () => void;

	/** Alert dialog title. */
	readonly title: string;

	/** Alert dialog message. */
	readonly description: string;
};

const AlertDialogComponent: FC<Props> = ({
	isAlertOpen, onAlertClose, title, description
}) => (
	<Dialog
		open={isAlertOpen}
		onClose={onAlertClose}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-description">
				{ description }
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={onAlertClose}>Close</Button>
		</DialogActions>
	</Dialog>
);

/** Alert dialog component. */
export const AlertDialog = memo(AlertDialogComponent);
