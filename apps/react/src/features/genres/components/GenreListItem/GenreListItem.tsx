import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

type GenreListItemProps = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly genre: AnimeGenre;

	/** Click handler. */
	readonly onClick: () => void;
};

/** List Item with genre data. */
const GenreListItemComponent: FC<GenreListItemProps> = ({ selected, genre, onClick }: GenreListItemProps) => (
	<ListItem disablePadding>
		<ListItemButton
			onClick={onClick}
			selected={selected}
		>
			<ListItemText
				primary={genre.name}
				secondary={`Id - ${genre.id}`}
			/>
		</ListItemButton>
	</ListItem>
);

/** Memoized version of GenreListItemComponent for performance optimization. */
export const GenreListItem = memo(GenreListItemComponent);
