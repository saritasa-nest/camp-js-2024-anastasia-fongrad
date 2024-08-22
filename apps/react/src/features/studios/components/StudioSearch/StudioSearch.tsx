import { IconButton, InputBase, Paper } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '@js-camp/react/store';
import { changeSearchValue, resetCursor, setPaginationEvent } from '@js-camp/react/store/studio/slice';
import { selectSearchValue } from '@js-camp/react/store/studio/selectors';

import { useQueryParams } from '../../hooks/useQueryParams';

import styles from './StudioSearch.module.css';

const StudioSearchComponent: FC = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useAppDispatch();
	const { queryParams, setQueryParams } = useQueryParams();
	const searchValue = useAppSelector(selectSearchValue) ?? queryParams.get('search');

	const handleInputValueChange = (event: ChangeEvent) => {
		setInputValue((event.target as HTMLInputElement).value);
	};

	const handleSearchButtonClick = () => {
		dispatch(changeSearchValue(inputValue.length > 0 ? inputValue : null));
		dispatch(resetCursor());
		dispatch(setPaginationEvent(false));
		setQueryParams({ ...Object.fromEntries(queryParams), search: inputValue });
	};

	return (<Paper component="form" className={styles.filters__form}>
		<InputBase
			className={styles['filters__input-base']}
			placeholder="Search Studios ..."
			aria-label="search genres"
			onChange={handleInputValueChange}
			defaultValue={searchValue ?? ''}
		/>
		<IconButton
			type="button"
			className={styles['filters__icon-button']}
			aria-label="search"
			color="primary"
			onClick={handleSearchButtonClick}
		>
			<SearchIcon />
		</IconButton>
	</Paper>);
};

/** Studio search component. */
export const StudioSearch = StudioSearchComponent;
