import { memo, FC, useState, useCallback, useRef, useEffect } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { Loading } from '@js-camp/react/components/loading';
import { selectAreGenresLoading, selectGenres, selectGenresHasNext } from '@js-camp/react/store/genre/selectors';
import { fetchGenres } from '@js-camp/react/store/genre/dispatchers';
import { ListItemSkeleton } from '@js-camp/react/components/skeleton';

import useQueryParams from '../../hooks/useQueryParams';

import { GenresSort } from '../GenresSort';
import { GenreListItem } from '../GenreListItem';
import { GenreSearch } from '../GenreSearch';
import { GenresFilter } from '../GenresFilter';

import { useDebounce } from '../../hooks/useDebounce';

import styles from './GenreList.module.css';

type Props = {

	/** Displaying genre details on click handler. */
	readonly onGenreClick: (id: number) => void;
};

const GenresListComponent: FC<Props> = ({ onGenreClick }: Props) => {
	const { genreId } = useParams<{ genreId: string; }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);
	const dispatch = useAppDispatch();
	const { getQueryParamsByKeys } = useQueryParams();
	const genres = useAppSelector(selectGenres);
	const isLoading = useAppSelector(selectAreGenresLoading);
	const hasMore = useAppSelector(selectGenresHasNext);
	const wrapperElementRef = useRef<HTMLUListElement>(null);
	const observer = useRef<IntersectionObserver>();
	const lastGenreElementRef = useCallback(
		(node: HTMLLIElement | null) => {
			observer.current?.disconnect();
			if (node) {
				observer.current = new IntersectionObserver(entries => {
					if (entries[0].isIntersecting && hasMore) {
						dispatchGenres(hasMore);
						observer.current?.disconnect();
					}
				});

				observer.current.observe(node);
			}
		},
		[hasMore],
	);
	const handleGenreClick = useCallback(
		(id: number) => {
			setSelectedGenreId(id);
			onGenreClick(id);
		},
		[onGenreClick],
	);
	const { search, filter, sortField, sortDirection } = getQueryParamsByKeys([
		'search',
		'filter',
		'sortField',
		'sortDirection',
	]);
	const debouncedSearch = useDebounce(search, 1);
	const dispatchGenres = useCallback(
		(next: string | null) =>
			dispatch(
				fetchGenres({
					search: debouncedSearch,
					filter,
					sort: sortField,
					direction: sortDirection,
					nextCursor: next,
				}),
			),
		[debouncedSearch, filter, sortField, sortDirection],
	);

	useEffect(() => {
		wrapperElementRef.current?.scrollTo({ top: 0, behavior: 'instant' });
		dispatchGenres(null);
	}, [debouncedSearch, filter, sortField, sortDirection]);

	return (
		<Box className={styles['genre-list']}>
			<GenreSearch />
			<GenresFilter />
			<GenresSort />
			<List className={styles['genre-list__items']} ref={wrapperElementRef}>
				<ListItem disablePadding>
					<ListItemButton>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary="Add Genre" />
					</ListItemButton>
				</ListItem>
				{isLoading &&
					genres.length === 0 &&
					Array.from(new Array(10)).map((_, index) => <ListItemSkeleton key={index} />)}
				{genres.map((genre, index) => {
					if (genres.length === index + 1) {
						return (
							<GenreListItem
								key={index}
								genre={genre}
								ref={lastGenreElementRef}
								onClick={() => handleGenreClick(genre.id)}
								selected={genre.id === selectedGenreId}
							/>
						);
					}
					return (
						<GenreListItem
							key={index}
							genre={genre}
							onClick={() => handleGenreClick(genre.id)}
							selected={genre.id === selectedGenreId}
						/>
					);
				})}
				{isLoading && <Loading />}
			</List>
		</Box>
	);
};

/** Genre list component. */
export const GenresList = memo(GenresListComponent);
