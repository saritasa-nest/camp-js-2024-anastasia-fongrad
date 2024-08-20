import { memo, FC } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AnimeType } from '@js-camp/core/models/enums/anime-type.enum';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import styles from './AnimeFilter.module.css';

type Props = {

	/** Selected anime types. */
	readonly animeType: AnimeType[];

	/** Handles filter changes. */
	readonly handleFiltersChange: (event: SelectChangeEvent<AnimeType[]>) => void;

	/** Available anime type options. */
	readonly animeTypes: AnimeType[];
};

const AnimeFilterComponent: FC<Props> = ({ animeType, handleFiltersChange, animeTypes }: Props) => (
	<FormControl className={styles['anime-filter']}>
		<InputLabel id="type-select-multiple-label">Type</InputLabel>
		<Select
			labelId="type-select-multiple-label"
			id="type-select-multiple"
			multiple
			value={animeType}
			onChange={handleFiltersChange}
			input={<OutlinedInput label="Tag" />}
			renderValue={selected => selected.join(', ')}
		>
			{animeTypes.map(type => (
				<MenuItem key={type} value={type}>
					<Checkbox checked={animeType.includes(type)} />
					<ListItemText primary={type} />
				</MenuItem>
			))}
		</Select>
	</FormControl>
);

/** Anime Filter Component. */
export const AnimeFilter = memo(AnimeFilterComponent);
