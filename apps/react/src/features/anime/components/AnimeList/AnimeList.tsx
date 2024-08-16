import { memo, FC, useState } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';

import { AnimeListItem } from '../AnimeListItem';
import { AnimeFilters } from '../AnimeFilters';

import styles from './AnimeList.module.css';

type GenresListProps = {

	/** An array of anime genres. */
	readonly genres: readonly AnimeGenre[];

	/** Handles displaying genre details on click. */
	onGenreClick: (id: number) => void;
};

const AnimeListComponent: FC<GenresListProps> = ({ genres, onGenreClick }: GenresListProps) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);

	const handleGenreClick = (id: number) => {
		setSelectedGenreId(id);
		onGenreClick(id);
	};

	return (
		<Box className={styles['genre-list']}>
			<AnimeFilters/>
			<List className={styles['genre-list__items']}>
				<ListItem disablePadding>
					<ListItemButton>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="add"
						>
							<AddIcon />
						</IconButton>
						<ListItemText primary='Add Genre'/>
					</ListItemButton>
				</ListItem>
				{genres.map(genre => (
					<AnimeListItem
						key={genre.id}
						genre={genre}
						onClick={() => handleGenreClick(genre.id)}
						selected={genre.id === selectedGenreId}
					/>
				))}
			</List>
		</Box>
	);
};

/** Genre list component. */
export const AnimeList = memo(AnimeListComponent);
