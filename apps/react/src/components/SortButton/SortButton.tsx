import { memo, FC } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import { Button } from '@mui/material';
import { AnimeSortDirections } from '@js-camp/core/models/enums/anime-sort-directions.enum';

type Props = {

	/** Current sort direction. */
	readonly sortDirection: AnimeSortDirections;

	/** Handles sorting objects. */
	readonly sortItems: () => void;

	/** Buttons title. */
	readonly title: string;
};

const SortButtonComponent: FC<Props> = ({ sortDirection, sortItems, title }) => {
	const getSortIcon = () => {
		if (sortDirection === AnimeSortDirections.Ascending) {
			return <ArrowUpwardIcon />;
		} else if (sortDirection === AnimeSortDirections.Descending) {
			return <ArrowDownwardIcon />;
		}
		return <SortIcon />;

	};

	return (
		<Button
			variant="outlined"
			color="primary"
			onClick={sortItems}
			startIcon={getSortIcon()}
		>
			{title}
		</Button>
	);
};

/** Sort button component. */
export const SortButton = memo(SortButtonComponent);
