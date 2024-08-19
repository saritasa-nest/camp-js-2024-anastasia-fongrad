import { memo, FC } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import { Button } from '@mui/material';
import { AnimeSortDirections } from '@js-camp/core/models/enums/anime-sort-directions.enum';

type SortButtonProps = {

	/** An array of anime genres. */
	readonly sortOrder: AnimeSortDirections;

	/** Handles displaying genre details on click. */
	readonly sortItems: () => void;

	/** 1. */
	readonly title: string;
};

const SortButtonComponent: FC<SortButtonProps> = ({ sortOrder, sortItems, title }) => {
	const getSortIcon = () => {
		if (sortOrder === AnimeSortDirections.Ascending) {
			return <ArrowUpwardIcon />;
		} else if (sortOrder === AnimeSortDirections.Descending) {
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

/** Genre filters component. */
export const SortButton = memo(SortButtonComponent);
