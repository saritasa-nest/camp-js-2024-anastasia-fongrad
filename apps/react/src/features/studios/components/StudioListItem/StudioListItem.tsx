import { memo, FC } from 'react';
import { ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar } from '@mui/material';
import { AnimeStudio } from '@js-camp/core/models/studio.model';
import { NavLink } from 'react-router-dom';

type StudioListItemProps = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime studio. */
	readonly studio: AnimeStudio;
};

const StudioListItemComponent: FC<StudioListItemProps> = ({ selected, studio }) => (
	<ListItem disablePadding>
		<ListItemButton
			component={NavLink}
			to={`${studio.id}`}
			selected={selected}
		>
			<ListItemAvatar>
				<Avatar alt={studio.name} src={studio.imageUrl} />
			</ListItemAvatar>
			<ListItemText primary={studio.name} />
		</ListItemButton>
	</ListItem>
);

/** Studio list item component. */
export const StudioListItem = memo(StudioListItemComponent);
