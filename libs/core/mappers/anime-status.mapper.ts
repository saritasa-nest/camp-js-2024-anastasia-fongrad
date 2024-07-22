import { DtoStatus, ModelStatus } from '../utils/enums/statusEnums';

export namespace StatusMapper {

	/**
	 * Maps anime-status dto to model.
	 * @param dto Anime-status enum.
	 */
	export function fromDto(dto: DtoStatus): ModelStatus {
		const statusMap: { [key in DtoStatus]: ModelStatus } = {
			[DtoStatus.Airing]: ModelStatus.Airing,
			[DtoStatus.Finished]: ModelStatus.Finished,
			[DtoStatus.NotYetAired]: ModelStatus.NotYetAired,
		};

		return statusMap[dto];
	}
}
