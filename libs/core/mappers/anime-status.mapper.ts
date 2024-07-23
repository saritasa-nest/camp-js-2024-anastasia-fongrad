import { DtoStatus } from '../utils/enums/dto-status.enum';
import { ModelStatus } from '../utils/enums/model-status.enum';

export namespace StatusMapper {

	/**
	 * Maps anime-status dto to model.
	 * @param dto Anime-status enum.
	 */
	export function fromDto(dto: DtoStatus): ModelStatus {
		const statusMap: Record<DtoStatus, ModelStatus> = {
			[DtoStatus.Airing]: ModelStatus.Airing,
			[DtoStatus.Finished]: ModelStatus.Finished,
			[DtoStatus.NotYetAired]: ModelStatus.NotYetAired,
		};
		return statusMap[dto];
	}
}
