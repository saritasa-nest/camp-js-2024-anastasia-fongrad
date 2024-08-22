import { memo, FC, ChangeEvent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './AnimeSearch.module.css';

type Props = {

	/** Search value. */
	readonly searchQuery: string;

	/** Handles users search. */
	readonly handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AnimeSearchComponent: FC<Props> = ({ searchQuery, handleSearchChange }: Props) => (
	<FormControl className={styles['anime-search']} variant="outlined">
		<InputLabel htmlFor="search-input">Search</InputLabel>
		<OutlinedInput
			id="search-input"
			value={searchQuery}
			onChange={handleSearchChange}
			endAdornment={
				<InputAdornment position="end">
					<IconButton
						aria-label="search"
						edge="end"
					>
						<SearchIcon />
					</IconButton>
				</InputAdornment>
			}
			label="Search"
		/>
	</FormControl>
);

/** Anime search component. */
export const AnimeSearch = memo(AnimeSearchComponent);
