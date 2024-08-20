import { memo, FC, useState, useRef, useCallback } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { selectAreAnimeLoading, selectAnime, selectAnimeNextPage } from '@js-camp/react/store/anime/selectors';
import { useAppSelector, useAppDispatch } from '@js-camp/react/store';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { Loader } from '@js-camp/react/components/Loader';
import { fetchAnimeNext } from '@js-camp/react/store/anime/dispatchers';

import { AnimeListItem } from '../AnimeListItem';
import { AnimeFilters } from '../AnimeFilters';

import styles from './AnimeList.module.css';

type Props = {

	/** Handles displaying genre details on click. */
	onGenreClick: (id: number) => void;
};

const AnimeListComponent: FC<Props> = ({ onGenreClick }: Props) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);
	const isLoading = useAppSelector(selectAreAnimeLoading);
	const nextPage = useAppSelector(selectAnimeNextPage);
	const dispatch = useAppDispatch();
	const anime = useAppSelector(selectAnime);
	const observer = useRef<IntersectionObserver>();
	const wrapperElementRef = useRef<HTMLElement>(null);

	const handleGenreClick = useCallback((id: number) => {
		setSelectedGenreId(id);
		onGenreClick(id);
	}, []);

	const lastGenreElementRef = useCallback((node: HTMLLIElement | null) => {
		observer.current?.disconnect();

		if (node) {
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && nextPage) {
					observer.current?.disconnect();
					dispatch(fetchAnimeNext(nextPage));
				}
			});

			observer.current.observe(node);
		}
	}, [nextPage, dispatch]);

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
							anime={animeItem}
							onClick={() => handleGenreClick(animeItem.id)}
							selected={animeItem.id === selectedGenreId}
						/>;
					}
					return <AnimeListItem
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