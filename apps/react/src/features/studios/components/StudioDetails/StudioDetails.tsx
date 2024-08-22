import { memo, FC } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import styles from './StudioDetails.module.css';

const StudioDetailsComponent: FC = () => {

	const { studioId } = useParams<{ studioId: string; }>();

	return (
		<div>
			<Typography variant="h5" component="div" gutterBottom>
				{ `Studio ${studioId}` }
			</Typography>
			<Typography paragraph>
				It is an animation studio based in wonderful place. Founded in 1800, it has
				quickly become a powerhouse in the anime industry. The studio is known for
				its high-quality animation, creative storytelling, and diverse range of projects.
				From action-packed thrillers to heartwarming slice-of-life stories,
				this studio has established itself as a studio that pushes the boundaries
				of animation while always staying true to its artistic vision.
			</Typography>
			<Typography paragraph>
				The studio prides itself on its talented team of animators, artists, and writers
				who are passionate about creating engaging and visually stunning anime experiences.
				With a strong commitment to innovation and collaboration, this studio continues
				to produce some of the most memorable and beloved anime titles in the world.
			</Typography>
			<div className={styles.buttons}>
				<Button variant="outlined">Edit</Button>
				<Button variant="outlined" color="error">Delete</Button>
			</div>
		</div>
	);
};

/** Studio details component. */
export const StudioDetails = memo(StudioDetailsComponent);
