import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

type GenreListItemProps = {

	/** Selected state. */
	readonly selected: boolean;

	/** Genre. */
	readonly genre: AnimeGenre;

	/** Click handler. */
	readonly onClick: () => void;
};

/** Card with genre data. */
const GenreListItemComponent: FC<GenreListItemProps> = ({ selected, genre, onClick }: GenreListItemProps) => (
	<ListItem disablePadding>
		<ListItemButton
			onClick={onClick}
			selected={selected}
			sx={{ width: '100%' }}
		>
			<ListItemText
				primary={genre.name}
				secondary={`Id - ${genre.id}`}
			/>
		</ListItemButton>
	</ListItem>
);

/** Memoized version of GenreCardComponent for performance optimization. */
export const GenreListItem = memo(GenreListItemComponent);
