import { memo, FC, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SortButton } from '@js-camp/react/components/SortButton/SortButton';
import { Box, InputAdornment, TextField, Typography, Select, SelectChangeEvent, InputLabel, FormControl, MenuItem, Checkbox, OutlinedInput, ListItemText } from '@mui/material';

import styles from './AnimeFilters.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const AnimeFiltersComponent: FC = () => {

	const [personName, setPersonName] = useState<string[]>([]);

	const [sortTitleOrder, setSortTitleOrder] = useState(0);

	const [sortStatusOrder, setSortStatusOrder] = useState(0);

	const sortItemsByTitle = () => {
		if (sortTitleOrder === 0) {
			setSortTitleOrder(1);
		} else if (sortTitleOrder === 1) {
			setSortTitleOrder(2);
		} else {
			setSortTitleOrder(0);
		}
	};

	const sortItemsByStatus = () => {
		if (sortStatusOrder === 0) {
			setSortStatusOrder(1);
		} else if (sortStatusOrder === 1) {
			setSortStatusOrder(2);
		} else {
			setSortStatusOrder(0);
		}
	};


	const handleMultiChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
		target: { value },
		} = event;
		setPersonName(
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	return (
		<Box className={styles.filters}>
			<Typography
				variant="h5"
				component="h5"
				gutterBottom
			>
				Filters
			</Typography>
			<form className={styles.filters__form}>
				<div className={styles.filters__inputs}>
					<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										edge="end"
									>
										<SearchIcon />
									</IconButton>
							</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl sx={{ m: 1, width: 300 }}>
						<InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
						<Select
							labelId="demo-multiple-checkbox-label"
							id="demo-multiple-checkbox"
							multiple
							value={personName}
							onChange={handleMultiChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={(selected) => selected.join(', ')}
							MenuProps={MenuProps}
						>
						{names.map((name) => (
							<MenuItem key={name} value={name}>
							<Checkbox checked={personName.indexOf(name) > -1} />
							<ListItemText primary={name} />
							</MenuItem>
						))}
						</Select>
					</FormControl>
				</div>
				<div className={styles.filters__sort}>
					<SortButton
						title='Sort by Title'
						sortOrder={sortTitleOrder}
						sortItems={sortItemsByTitle}
					/>
					<SortButton
						title='Sort by Status'
						sortOrder={sortStatusOrder}
						sortItems={sortItemsByStatus}
					/>
				</div>
			</form>
		</Box>
	);
};

/** Genre filters component. */
export const AnimeFilters = memo(AnimeFiltersComponent);
