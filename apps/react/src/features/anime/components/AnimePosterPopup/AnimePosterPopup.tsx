import { Dialog } from '@mui/material';
import { FC, memo } from 'react';

type PosterPopupProps = {

	/** Is popup open. */
	readonly isOpen: boolean;

	/** Set popup state to open or closed. */
	readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

	/** Anime poster url. */
	readonly posterUrl: string;
};

const AnimePosterPopupComponent: FC<PosterPopupProps> = ({ isOpen, setIsOpen, posterUrl }: PosterPopupProps) => {
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<img src={posterUrl} />
		</Dialog>
	);
};

/** Anime poster popup component. */
export const AnimePosterPopup = memo(AnimePosterPopupComponent);
