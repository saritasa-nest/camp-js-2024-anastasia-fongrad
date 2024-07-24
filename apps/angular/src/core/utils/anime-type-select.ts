import { ModelType } from '@js-camp/core/utils/enums/model-type.enum';
import { DtoType } from '@js-camp/core/utils/enums/dto-type.enum';

/** 1. */
export type AnimeSelectType = {

	/** 1. */
	value: string;

	/** 1. */
	viewValue: string;
};

/** 1. */
export const animeSelectType: AnimeSelectType[] = Object.keys(ModelType).map(key => ({
	value: DtoType[key as keyof typeof DtoType],
	viewValue: ModelType[key as keyof typeof ModelType],
}));
