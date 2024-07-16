import { AnimeDetailedDto } from './anime_detailed.dto';
import { ErrorResponseDto } from './error_response.dto';

export type getAnimeByIdDto = AnimeDetailedDto | ErrorResponseDto;
