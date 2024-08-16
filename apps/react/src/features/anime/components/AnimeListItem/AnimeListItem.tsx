import { memo, FC } from 'react';
import { Anime } from '@js-camp/core/models/anime.model';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

type GenreListItemProps = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly anime: Anime;

	/** Click handler. */
	readonly onClick: () => void;
};

const AnimeListItemComponent: FC<GenreListItemProps> = ({ selected, anime, onClick }: GenreListItemProps) => (
	<ListItem disablePadding>
		<ListItemButton
			onClick={onClick}
			selected={selected}
		>
			<ListItemText
				primary={anime.titleJapanese}
				secondary={`Id - ${anime.id}`}
			/>
		</ListItemButton>
	</ListItem>
);

/** Genre list item component. */
export const AnimeListItem = memo(AnimeListItemComponent);
