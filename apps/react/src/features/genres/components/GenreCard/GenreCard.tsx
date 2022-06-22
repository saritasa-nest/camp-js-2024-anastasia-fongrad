import { memo, FC } from 'react';
import { Genre } from '@js-camp/core/models/genre';

interface Props {

  /** Genre. */
  readonly genre: Genre;
}

/** Card with genre data. */
const GenreCardComponent: FC<Props> = ({ genre }) => (
  <div>
    <h2>{genre.name}</h2>
    <span>Id - {genre.id}</span>
  </div>
);

export const GenreCard = memo(GenreCardComponent);
