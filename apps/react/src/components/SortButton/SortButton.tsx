import { memo, FC, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import { Button } from '@mui/material';

type SortButtonProps = {

	/** An array of anime genres. */
	readonly sortOrder: number;

	/** Handles displaying genre details on click. */
	readonly sortItems: () => void;

	readonly title: string;
};

const SortButtonComponent: FC<SortButtonProps> = ({ sortOrder, sortItems, title }) => {
	const getSortIcon = () => {
		if (sortOrder === 1) {
			return <ArrowUpwardIcon />;
		} else if (sortOrder === 2) {
			return <ArrowDownwardIcon />;
		} else {
			return <SortIcon />;
		}
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
