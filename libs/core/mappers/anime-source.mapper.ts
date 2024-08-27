import { AnimeSourceDto } from '../dtos/enums/anime-source.dto';
import { AnimeSource } from '../models/enums/anime-source.model';

const FROM_DTO: Readonly<Record<AnimeSourceDto, AnimeSource>> = {
	[AnimeSourceDto.BOOK]: AnimeSource.Book,
	[AnimeSourceDto.CARD_GAME]: AnimeSource.CardGame,
	[AnimeSourceDto.FOUR_KOMA_MANGA]: AnimeSource.FourKomaManga,
	[AnimeSourceDto.GAME]: AnimeSource.Game,
	[AnimeSourceDto.LIGHT_NOVEL]: AnimeSource.LightNovel,
	[AnimeSourceDto.MANGA]: AnimeSource.Manga,
	[AnimeSourceDto.MIXED_MEDIA]: AnimeSource.MixedMedia,
	[AnimeSourceDto.MUSIC]: AnimeSource.Music,
	[AnimeSourceDto.NOVEL]: AnimeSource.Novel,
	[AnimeSourceDto.ORIGINAL]: AnimeSource.Original,
	[AnimeSourceDto.OTHER]: AnimeSource.Other,
	[AnimeSourceDto.UNKNOWN]: AnimeSource.Unknown,
	[AnimeSourceDto.PICTURE_BOOK]: AnimeSource.PictureBook,
	[AnimeSourceDto.RADIO]: AnimeSource.Radio,
	[AnimeSourceDto.VISUAL_NOVEL]: AnimeSource.VisualNovel,
	[AnimeSourceDto.WEB_MANGA]: AnimeSource.WebManga,
	[AnimeSourceDto.WEB_NOVEL]: AnimeSource.WebNovel,
};

export namespace AnimeSourceMapper {
	/**
	 * Maps DTO to model.
	 * @param dto Anime source DTO.
	 */
	export function fromDto(dto: AnimeSourceDto): AnimeSource {
		return FROM_DTO[dto];
	}
}
