import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

type Props = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly genre: AnimeGenre;

	/** Select an element on click. */
	readonly onClick: () => void;
};

const GenreListItemComponent: FC<Props> = ({ selected, genre, onClick }: Props) => {
	const genreUrl = `${genre.id}`;

	return (
		<ListItem disablePadding>
			<ListItemButton
				component={NavLink}
				to={genreUrl}
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
};

/** Genre list item component. */
export const GenreListItem = memo(GenreListItemComponent);
