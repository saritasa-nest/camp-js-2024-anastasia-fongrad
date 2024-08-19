import { memo, FC, useState, useCallback, useRef, useEffect } from "react";
import { AnimeGenre } from "@js-camp/core/models/genre.model";
import { Box, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";

import { GenreListItem } from "../GenreListItem";
import { GenreFilters } from "../GenreFilters";

import styles from "./GenreList.module.css";
import { useAppDispatch, useAppSelector } from "@js-camp/react/store";
import { selectAreGenresLoading, selectGenresError, selectGenresHasNext } from "@js-camp/react/store/genre/selectors";
import { fetchGenres } from "@js-camp/react/store/genre/dispatchers";

type Props = {
	/** An array of anime genres. */
	readonly genres: readonly AnimeGenre[];

	/** Displaying genre details on click handler. */
	readonly onGenreClick: (id: number) => void;
};

const GenresListComponent: FC<Props> = ({ genres, onGenreClick }: Props) => {
	const { genreId } = useParams<{ genreId: string }>();
	const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(genreId ? Number(genreId) : undefined);
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(selectAreGenresLoading);
	const error = useAppSelector(selectGenresError);
	const hasMore = useAppSelector(selectGenresHasNext);
	const [pageNumber, setPageNumber] = useState(0);
	const observer = useRef<IntersectionObserver>();

	// console.log(1, isLoading);
	// console.log(2, error);
	// console.log(3, pageNumber);
	// console.log(4, hasMore);
	const lastGenreElementRef = useCallback(
		(node: HTMLLIElement | null) => {
			observer.current?.disconnect();

			if (node) {
				observer.current = new IntersectionObserver((entries) => {
					if (entries[0].isIntersecting && hasMore) {
						setPageNumber((prev) => prev + 1);
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
	// console.log(2)
	// 	useEffect(() => {
	// 	dispatch(fetchGenres());
	// }, [pageNumber, dispatch]);

	return (
		<Box className={styles["genre-list"]}>
			<GenreFilters />
			<List className={styles["genre-list__items"]}>
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
								key={genre.id}
								genre={genre}
								ref={lastGenreElementRef}
								onClick={() => handleGenreClick(genre.id)}
								selected={genre.id === selectedGenreId}
							/>
						);
					}
					return (
						<GenreListItem
							key={genre.id}
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
