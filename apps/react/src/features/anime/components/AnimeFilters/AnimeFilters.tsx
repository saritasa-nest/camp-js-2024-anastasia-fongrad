import { memo, FC, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import { Box, Button, Typography, Select, SelectChangeEvent, InputLabel, FormControl, MenuItem, Checkbox, OutlinedInput, ListItemText } from '@mui/material';

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

	const [sortOrder, setSortOrder] = useState(0);

	const sortItems = () => {
		if (sortOrder === 0) {
			setSortOrder(1);
		} else if (sortOrder === 1) {
			setSortOrder(2);
		} else {
			setSortOrder(0);
		}
	  };

	const getSortIcon = () => {
		if (sortOrder === 1) {
		  return <ArrowUpwardIcon />;
		} else if (sortOrder === 2) {
		  return <ArrowDownwardIcon />;
		} else {
		  return <SortIcon />;
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
			<Button
				variant="contained"
				color="primary"
				onClick={sortItems}
				startIcon={getSortIcon()}
			>
				Sort by Name
			</Button>
				<Paper
					component="div"
					className={styles.filters__group}
				>
					<InputBase
						className={styles['filters__input-base']}
						placeholder='Search Anime ...'
						aria-label='search anime'
					/>
					<IconButton
						type="button"
						className={styles['filters__icon-button']}
						aria-label="search"
						color="primary"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<FormControl sx={{ m: 1, width: 300 }}>
					<InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
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
			</form>
		</Box>
	);
};

/** Genre filters component. */
export const AnimeFilters = memo(AnimeFiltersComponent);
