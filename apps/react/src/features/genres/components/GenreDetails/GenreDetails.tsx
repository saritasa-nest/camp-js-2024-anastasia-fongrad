import { memo, FC, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { fetchGenreById } from '@js-camp/react/store/genre/dispatchers';

import { selectGenreDetail } from '@js-camp/react/store/genre/selectors';

import styles from './GenreDetails.module.css';

const GenreDetailsComponent: FC = () => {
	const { genreId } = useParams<{ genreId: string; }>();

	const dispatch = useAppDispatch();

	const genreData = useAppSelector(selectGenreDetail);

	// const [genres, setGenres] = useState<AnimeGenre | null>(genreData);

	useEffect(() => {
		if (genreId !== undefined) {
			dispatch(fetchGenreById(+genreId));
		}
	}, [genreId]);

	return (
		<div>
			<Typography variant="h5" component="h5" gutterBottom>
				{`Genre ${genreData?.id}`}
			</Typography>
			<Typography paragraph>
				Name: {genreData?.name}
			</Typography>
			<Typography paragraph>
				Type: {genreData?.type}
			</Typography>
			<div className={styles.buttons}>
				<Button variant="outlined">Edit</Button>
				<Button variant="outlined" color="error">
					Delete
				</Button>
			</div>
		</div>
	);
};

/** Genre details component. */
export const GenreDetails = memo(GenreDetailsComponent);
