import { AnimeListDto } from './anime-list.dto';
import { ErrorResponseDto } from './error-response.dto';

export type GetAnimeDto = AnimeListDto | ErrorResponseDto;
