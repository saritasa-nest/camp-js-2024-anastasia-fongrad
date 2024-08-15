import { memo, FC } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { Box, Typography, List } from '@mui/material';

import { GenreListItem } from '../GenreListItem';
import { GenreFilters } from '../GenreFilters';

import styles from './GenreList.module.css';

type GenresListProps = {

	/** 1. */
	genres: Array<AnimeGenre>;

	/** Click handler. */
	onGenreClick: (id: number) => void;
};

const GenresListComponent: FC<GenresListProps> = ({ genres, onGenreClick }) => (
	<Box className={styles.listContainer}>
		<Typography variant="h5" component="div" gutterBottom>
			Filters
		</Typography>
		<GenreFilters/>
		<List className={styles.list}>
			{genres.map(genre => (
				<GenreListItem
					key={genre.id}
					genre={genre}
					onClick={() => onGenreClick(genre.id)}
				/>
			))}
		</List>
	</Box>
);

/** 1. */
export const GenresList = memo(GenresListComponent);
