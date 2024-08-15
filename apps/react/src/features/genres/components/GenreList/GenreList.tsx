import { memo, FC, useState } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';

import { GenreListItem } from '../GenreListItem';
import { GenreFilters } from '../GenreFilters';

import styles from './GenreList.module.css';

type GenresListProps = {

	/** An array of anime genres. */
	readonly genres: Array<AnimeGenre>;

	/** Click handler. */
	onGenreClick: (id: number) => void;
};

/** A list of anime genres. */
const GenresListComponent: FC<GenresListProps> = ({ genres, onGenreClick }: GenresListProps) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? +genreId : undefined);

	const handleGenreClick = (id: number) => {
		setSelectedGenreId(id);
		onGenreClick(id);
	};

	return (
		<Box className={styles.listContainer}>
			<GenreFilters/>
			<List className={styles.list}>
				<ListItem disablePadding>
					<ListItemButton sx={{ width: '100%' }}>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary='Add Genre'/>
					</ListItemButton>
				</ListItem>
				{genres.map(genre => (
					<GenreListItem
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

/** Memoized version of GenresListComponent for performance optimization. */
export const GenresList = memo(GenresListComponent);
