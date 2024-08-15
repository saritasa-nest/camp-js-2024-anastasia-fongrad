import { memo, FC, useState } from 'react';
import { AnimeGenre } from '@js-camp/core/models/genre.model';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';

import { GenreListItem } from '../GenreListItem';
import { GenreFilters } from '../GenreFilters';

import styles from './GenreList.module.css';

type GenresListProps = {

	/** 1. */
	readonly genres: Array<AnimeGenre>;

	/** 1. */
	readonly title: string;

	/** Click handler. */
	onGenreClick: (id: number) => void;
};

const GenresListComponent: FC<GenresListProps> = ({ genres, title, onGenreClick }) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? +genreId : undefined);

	const handleGenreClick = (id: number) => {
		setSelectedGenreId(id);
		onGenreClick(id);
	};

	return (
		<Box className={styles.listContainer}>
			<GenreFilters title={title}/>
			<List className={styles.list}>
				<ListItem disablePadding>
					<ListItemButton sx={{ width: '100%' }}>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary={`Add ${title}`} />
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

/** 1. */
export const GenresList = memo(GenresListComponent);
