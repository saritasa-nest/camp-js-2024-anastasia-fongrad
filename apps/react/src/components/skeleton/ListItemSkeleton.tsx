import { Box, ListItem, Skeleton } from '@mui/material';
import { memo } from 'react';

const ListItemSkeletonComponent = () => (
	<ListItem
		alignItems='center'
		sx={{
			borderBottom: 1,
			borderColor: 'rgba(0 0 0 / 5%)',
		}}
	>
		<Box
			display='flex'
			flex={'1 1 0'}
			flexDirection='column'
			gap={1}
		>
			<Skeleton width='40%'/>
			<Skeleton width='60%' />
		</Box>
	</ListItem>
);

/** Memoized ListItemSkeletonComponent. */
export const ListItemSkeleton = memo(ListItemSkeletonComponent);
