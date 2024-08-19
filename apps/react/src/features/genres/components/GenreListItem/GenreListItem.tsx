import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

type Props = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly genre: AnimeGenre;

	/** Displaying genre details on click handler. */
	readonly onClick: () => void;
};

const GenreListItemComponent: FC<Props> = ({ selected, genre, onClick }: Props) => (
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
export const GenreListItem = memo(GenreListItemComponent);
