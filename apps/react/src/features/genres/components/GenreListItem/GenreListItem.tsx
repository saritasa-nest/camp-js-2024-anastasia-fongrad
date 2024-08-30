import { memo, forwardRef } from 'react';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

type Props = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly genre: AnimeGenre;

	/** Select an element on click. */
	readonly onClick: () => void;
};

const GenreListItemComponent = forwardRef<HTMLLIElement, Props>(({ selected, genre, onClick }, ref) => (
	<ListItem disablePadding ref={ref}>
		<ListItemButton onClick={onClick} selected={selected}>
			<ListItemText primary={genre.name} secondary={`Type - ${genre.type}`} />
		</ListItemButton>
	</ListItem>
));

/** Genre list item component. */
export const GenreListItem = memo(GenreListItemComponent);
