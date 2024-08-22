import { memo, FC } from 'react';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';
import { AnimeStudio } from '@js-camp/core/models/studio.model';

type StudioListItemProps = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime studio. */
	readonly studio: AnimeStudio;

	/** Click handler. */
	readonly onClick: () => void;
};

const StudioListItemComponent: FC<StudioListItemProps> = ({ selected, studio, onClick }: StudioListItemProps) => (
	<ListItem disablePadding>
		<ListItemButton
			onClick={onClick}
			selected={selected}
		>
			<ListItemText
				primary={studio.name}
				secondary={`Id - ${studio.id}`}
			/>
		</ListItemButton>
	</ListItem>
);

/** Studio list item component. */
export const StudioListItem = memo(StudioListItemComponent);
