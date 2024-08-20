import { memo, FC, useState, useCallback, useRef, useEffect } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useParams, useSearchParams } from "react-router-dom";

import { GenreListItem } from "../GenreListItem";
import { GenreSearch } from "../GenreSearch";
import { GenresFilter } from "../GenresFilter";
import styles from "./GenreList.module.css";
import { useAppDispatch, useAppSelector } from "@js-camp/react/store";
import {
	selectAreGenresLoading,
	selectGenres,
	selectGenresError,
	selectGenresHasNext,
} from "@js-camp/react/store/genre/selectors";
import { fetchGenres } from "@js-camp/react/store/genre/dispatchers";
import { getQueryParams } from "@js-camp/react/utils/getQueryParams";

type Props = {
	/** An array of anime genres. */
	// readonly genres: readonly AnimeGenre[];

	/** Displaying genre details on click handler. */
	readonly onGenreClick: (id: number) => void;
};

const GenresListComponent: FC<Props> = ({ onGenreClick }: Props) => {
	const { genreId } = useParams<{ genreId: string }>();
	const [searchParams] = useSearchParams();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);
	const dispatch = useAppDispatch();
	const genres = useAppSelector(selectGenres);
	const isLoading = useAppSelector(selectAreGenresLoading);
	const error = useAppSelector(selectGenresError);
	const hasMore = useAppSelector(selectGenresHasNext);
	const [hasNext, setHasNext] = useState<string | null>(null);
	const wrapperElementRef = useRef<HTMLElement>(null);
	const observer = useRef<IntersectionObserver>();
	const lastGenreElementRef = useCallback(
		(node: HTMLLIElement | null) => {
			observer.current?.disconnect();
			if (node) {
				observer.current = new IntersectionObserver((entries) => {
					if (entries[0].isIntersecting && hasMore) {
						setHasNext(hasMore);
						observer.current?.disconnect();
					}
				});

				observer.current.observe(node);
			}
		},
		[hasMore]
	);
	const handleGenreClick = useCallback(
		(id: number) => {
			setSelectedGenreId(id);
			onGenreClick(id);
		},
		[onGenreClick]
	);
	const { search, sort, filter } = getQueryParams(searchParams);

	const dispatchGenres = useCallback(
		(next: string | null) =>
			dispatch(
				fetchGenres({
					search,
					sort,
					filter,
					cursor: next,
				})
			),
		[search, sort, filter]
	);

	useEffect(() => {
		wrapperElementRef.current?.scrollTo({ top: 0, behavior: "instant" });
		setHasNext(null);
	}, [searchParams]);

	useEffect(() => {
		dispatchGenres(hasNext);
	}, [hasNext, search]);

	return (
		<Box className={styles["genre-list"]}>
			<GenreSearch />
			<GenresFilter />
			<List className={styles["genre-list__items"]} ref={wrapperElementRef}>
				<ListItem disablePadding>
					<ListItemButton>
						<IconButton edge="start" color="inherit" aria-label="add">
							<AddIcon />
						</IconButton>
						<ListItemText primary="Add Genre" />
					</ListItemButton>
				</ListItem>
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
			</List>
		</Box>
	);
};

/** Genre list component. */
export const GenresList = memo(GenresListComponent);
