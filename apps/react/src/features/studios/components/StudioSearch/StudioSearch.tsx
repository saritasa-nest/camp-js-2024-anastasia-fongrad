import { IconButton, InputBase, Paper } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '@js-camp/react/store';
import { resetCursor, setPaginationEvent, setSearchValue } from '@js-camp/react/store/studio/slice';
import { useSearchParams } from 'react-router-dom';

import styles from './StudioSearch.module.css';

const StudioSearchComponent: FC = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();
	const searchValue = searchParams.get('search');

	const handleInputValueChange = (event: ChangeEvent) => {
		setInputValue((event.target as HTMLInputElement).value);
	};

	const handleSearchButtonClick = () => {
		dispatch(resetCursor());
		dispatch(setPaginationEvent(false));
		dispatch(setSearchValue(inputValue));
	};

	return (
		<Paper className={styles.search__form}>
			<InputBase
				className={styles['search__input-base']}
				placeholder="Search Studios ..."
				aria-label="search genres"
				onChange={handleInputValueChange}
				defaultValue={searchValue ?? ''}
			/>
			<IconButton
				type="button"
				className={styles['search__icon-button']}
				aria-label="search"
				color="primary"
				onClick={handleSearchButtonClick}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

/** Studio search component. */
export const StudioSearch = StudioSearchComponent;
