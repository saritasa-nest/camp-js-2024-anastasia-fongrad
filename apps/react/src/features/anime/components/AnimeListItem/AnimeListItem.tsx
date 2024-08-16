import { memo, FC, Fragment } from 'react';
import { Anime } from '@js-camp/core/models/anime.model';
import { ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar, Typography } from '@mui/material';

type GenreListItemProps = {

	/** Selected state. */
	readonly selected: boolean;

	/** Anime genre. */
	readonly anime: Anime;

	/** Click handler. */
	readonly onClick: () => void;
};

const AnimeListItemComponent: FC<GenreListItemProps> = ({ selected, anime, onClick }: GenreListItemProps) => (
	<ListItem disablePadding alignItems="flex-start">
		<ListItemButton
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
				secondary={
					<Fragment>
						<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="body2"
							color="text.primary"
						>
							Ali Connors
						</Typography>
						{" — I'll be in your neighborhood doing errands this…"}
					</Fragment>
				  }
			/>
		</ListItemButton>
	</ListItem>
);

/** Genre list item component. */
export const AnimeListItem = memo(AnimeListItemComponent);
