import { ModelType } from '@js-camp/core/utils/enums/model-type.enum';
import { DtoType } from '@js-camp/core/utils/enums/dto-type.enum';

/** A type for a select element. */
export type SelectType = {

	/** Value of a select option. */
	value: string;

	/** Displayed text of a select option. */
	viewValue: string;
};

/** Values for a select element. */
export const animeSelectType: SelectType[] = Object.keys(ModelType).map(key => ({
	value: DtoType[key as keyof typeof DtoType],
	viewValue: ModelType[key as keyof typeof ModelType],
}));
