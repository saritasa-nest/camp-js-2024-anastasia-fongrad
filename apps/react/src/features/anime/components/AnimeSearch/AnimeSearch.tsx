import { memo, FC, ChangeEvent } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type Props = {

	/** 1. */
	readonly searchQuery: string;

	/** 1. */
	readonly handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AnimeSearchComponent: FC<Props> = ({ searchQuery, handleSearchChange }: Props) => (
	<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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

/** 1. */
export const AnimeSearch = memo(AnimeSearchComponent);
