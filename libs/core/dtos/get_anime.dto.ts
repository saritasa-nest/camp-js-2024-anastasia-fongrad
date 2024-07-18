import { AnimeListDto } from './anime_list.dto';
import { ErrorResponseDto } from './error_response.dto';

export type GetAnimeDto = AnimeListDto | ErrorResponseDto;
