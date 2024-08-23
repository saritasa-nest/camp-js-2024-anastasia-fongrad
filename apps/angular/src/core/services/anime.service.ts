import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Anime } from '@js-camp/core/models/anime.model';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { Pagination } from '@js-camp/core/models/pagination.model';
import { PaginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeQueryParametersMapper } from '@js-camp/core/mappers/anime-query-parameters.mapper';
import { AnimeQueryParameters } from '@js-camp/core/models/anime-query-parameters.model';
import { ObjectUtils } from '@js-camp/core/utils/object-utils';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { AnimeDetails } from '@js-camp/core/models/anime-details.model';
import { AnimeDetailsDto } from '@js-camp/core/dtos/anime-details-dto';
import { AnimeDetailedMapper } from '@js-camp/core/mappers/anime-details.mapper';

import { AppUrlConfig } from './app-url-config.service';

/** Connects to the API to manage anime data. */
@Injectable({
	providedIn: 'root',
})
export class AnimeService {

	private readonly http: HttpClient = inject(HttpClient);

	private readonly appUrlConfig = inject(AppUrlConfig);

	/**
	 * Gets paginated anime data from the server.
	 * @param parameters Query parameters for the request.
	 */
	public getAll(parameters: Partial<AnimeQueryParameters>): Observable<Pagination<Anime>> {
		const dtoParameters = ObjectUtils.removeEmptyFields(AnimeQueryParametersMapper.toDto(parameters));
		const httpParams = new HttpParams({ fromObject: dtoParameters });
		const url = this.appUrlConfig.paths.animeCatalog;
		const result$ = this.http.get<PaginationDto<AnimeDto>>(url, { params: httpParams });
		return result$.pipe(
			map((response: PaginationDto<AnimeDto>) => PaginationMapper.fromDto<AnimeDto, Anime>(response, AnimeMapper.fromDto)),
		);
	}

	/**
	 * Gets anime details by id from the server.
	 * @param id Anime id for the request.
	 */
	public getById(id: AnimeDetails['id']): Observable<AnimeDetails> {
		const url = this.appUrlConfig.getDetailsPath(id);
		const result$ = this.http.get<AnimeDetailsDto>(url);
		return result$.pipe(
			map((response: AnimeDetailsDto) => AnimeDetailedMapper.fromDto(response)),
		);
	}
}
