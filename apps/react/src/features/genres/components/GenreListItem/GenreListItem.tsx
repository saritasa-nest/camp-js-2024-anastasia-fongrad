import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

type Props = {

	/** Genre. */
	readonly genre: AnimeGenre;

	/** Click handler. */
	readonly onClick: () => void;
};

/** Card with genre data. */
const GenreListItemComponent: FC<Props> = ({ genre, onClick }: Props) => (
	<ListItem disablePadding>
		<ListItemButton onClick={onClick} sx={{ width: '100%' }}>
			<ListItemText
				primary={genre.name}
				secondary={`Id - ${genre.id}`}
			/>
		</ListItemButton>
	</ListItem>
);

/** Memoized version of GenreCardComponent for performance optimization. */
export const GenreListItem = memo(GenreListItemComponent);
