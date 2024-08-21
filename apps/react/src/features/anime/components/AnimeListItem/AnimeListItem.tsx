import { memo, forwardRef } from 'react';
import { Anime } from '@js-camp/core/models/anime.model';
import { Chip, Tooltip, ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

type Props = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly anime: Anime;

	/** Click handler. */
	readonly onClick: () => void;
};

// eslint-disable-next-line max-len
const AnimeListItemComponent = forwardRef<HTMLLIElement, Props>(({ selected, anime, onClick }: Props, ref) => {
	const location = useLocation();
	const genreUrl = `${anime.id}${location.search}`;
	return (
		<ListItem ref={ref} disablePadding alignItems="flex-start">
			<ListItemButton
				component={NavLink}
				to={genreUrl}
				onClick={onClick}
				selected={selected}
				sx={{ gap: 2, padding: 2 }}
			>
				<ListItemAvatar>
					<Avatar
						alt={anime.titleJapanese}
						src={anime.imageUrl}
						sx={{ width: 80, height: 80 }}
					/>
				</ListItemAvatar>
				<ListItemText
					primary={anime.titleJapanese}
					secondary={anime.titleEnglish}
				/>
				<Tooltip title="Anime status" placement="top" arrow>
					<Chip variant="outlined" label={anime.status ?? '--'} />
				</Tooltip>
				<Tooltip title="Anime type" placement="top" arrow>
					<Chip color="primary" variant="outlined" label={anime.type ?? '--'} />
				</Tooltip>
			</ListItemButton>
		</ListItem>
	);
});

/** Anime list item component. */
export const AnimeListItem = memo(AnimeListItemComponent);
