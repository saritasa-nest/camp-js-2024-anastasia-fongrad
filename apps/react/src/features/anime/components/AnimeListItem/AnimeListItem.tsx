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

const AnimeListItemComponent: FC<GenreListItemProps> = ({ selected, genre, onClick }: GenreListItemProps) => (
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

/** Genre list item component. */
export const AnimeListItem = memo(AnimeListItemComponent);
