import { memo, FC } from 'react';
import { ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar } from '@mui/material';
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
		<ListItemButton onClick={onClick} selected={selected}>
			<ListItemAvatar>
				<Avatar alt={studio.name} src={studio.imageUrl} />
			</ListItemAvatar>
			<ListItemText primary={studio.name} />
		</ListItemButton>
	</ListItem>
);

/** Studio list item component. */
export const StudioListItem = memo(StudioListItemComponent);
