import { DtoStatus, ModelStatus } from '../utils/statusEnums';

export namespace StatusMapper {

	/**
	 * Maps dto to model.
	 * @param dto Genre dto.
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
