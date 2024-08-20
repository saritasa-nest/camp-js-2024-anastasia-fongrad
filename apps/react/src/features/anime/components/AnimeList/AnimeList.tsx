import { memo, FC, useState, useEffect, useRef, useCallback } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { selectAnimeHasMore, selectAreAnimeLoading, selectAnime } from '@js-camp/react/store/anime/selectors';
import { useAppSelector, useAppDispatch } from '@js-camp/react/store';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { Loader } from '@js-camp/react/components/Loader';
import { fetchAnime } from '@js-camp/react/store/anime/dispatchers';

import { useQueryParameters } from '../../hooks/useQueryParameters';

import { AnimeListItem } from '../AnimeListItem';
import { AnimeFilters } from '../AnimeFilters';

import styles from './AnimeList.module.css';

const DEFAULT_PAGE_NUMBER = 1;

type Props = {

	/** Handles displaying genre details on click. */
	onGenreClick: (id: number) => void;
};

const AnimeListComponent: FC<Props> = ({ onGenreClick }: Props) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);
	const isLoading = useAppSelector(selectAreAnimeLoading);
	const hasMore = useAppSelector(selectAnimeHasMore);
	const dispatch = useAppDispatch();
	const anime = useAppSelector(selectAnime);
	const [pageNumber, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);
	const { changePageIndex, getQueryParameters } = useQueryParameters();
	const observer = useRef<IntersectionObserver>();
	const wrapperElementRef = useRef<HTMLElement>(null);

	const handleGenreClick = (id: number) => {
		setSelectedGenreId(id);
		onGenreClick(id);
	};

	useEffect(() => {
		changePageIndex(pageNumber);
		dispatch(fetchAnime(getQueryParameters()));
	}, [pageNumber]);

	const lastGenreElementRef = useCallback((node: HTMLLIElement | null) => {
		observer.current?.disconnect();

		if (node) {
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber(prev => prev + 1);
					observer.current?.disconnect();
				}
			});

			observer.current.observe(node);
		}
	}, [hasMore]);

	useEffect(() => {
		setPageNumber(DEFAULT_PAGE_NUMBER);
		wrapperElementRef.current?.scrollTo({ top: 0, behavior: 'instant' });
	}, []);

	return (
		<Box ref={wrapperElementRef} className={styles['genre-list']}>
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
				{anime.map((animeItem, index) => {
					if (anime.length === index + 1) {
						return <AnimeListItem
							ref={lastGenreElementRef}
							key={animeItem.id}
							anime={animeItem}
							onClick={() => handleGenreClick(animeItem.id)}
							selected={animeItem.id === selectedGenreId}
						/>;
					}
					return <AnimeListItem
						key={animeItem.id}
						anime={animeItem}
						onClick={() => handleGenreClick(animeItem.id)}
						selected={animeItem.id === selectedGenreId}
					/>;
				})}
			</List>

			{ isLoading && <Loader/>}
		</Box>
	);
};

/** Genre list component. */
export const AnimeList = memo(AnimeListComponent);
