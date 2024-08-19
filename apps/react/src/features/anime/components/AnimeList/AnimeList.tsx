import { memo, FC, useState, useRef, useCallback } from 'react';
import { Anime } from '@js-camp/core/models/anime.model';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';

import { AnimeListItem } from '../AnimeListItem';
import { AnimeFilters } from '../AnimeFilters';

import styles from './AnimeList.module.css';

const DEFAULT_PAGE_NUMBER = 1;

type Props = {

	/** An array of anime genres. */
	readonly anime: readonly Anime[];

	/** Handles displaying genre details on click. */
	onGenreClick: (id: number) => void;
};

const AnimeListComponent: FC<Props> = ({ anime, onGenreClick }: Props) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);
	const [pageNumber, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);
	const observer = useRef<IntersectionObserver>();

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
						<ListItemText primary='Add Anime'/>
					</ListItemButton>
				</ListItem>
				{anime.map(animeItem => (
					<AnimeListItem
						key={animeItem.id}
						anime={animeItem}
						onClick={() => handleGenreClick(animeItem.id)}
						selected={animeItem.id === selectedGenreId}
					/>
				))}
			</List>
		</Box>
	);
};

/** Genre list component. */
export const AnimeList = memo(AnimeListComponent);
