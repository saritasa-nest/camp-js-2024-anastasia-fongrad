import { Component, Input, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, startWith, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

/** 1. */
@Component({
	selector: 'camp-genres-select',
	templateUrl: './genres-select.component.html',
	styleUrls: ['./genres-select.component.css'],
	imports: [
		MatChipsModule,
		MatFormFieldModule,
		MatSelectModule,
		MatAutocompleteModule,
		MatIconModule,
		CommonModule,
	],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenresSelectComponent implements OnInit {
	@Input()
	public animeGenres?: AnimeGenre[];

	@Input()
	public selectedGenres?: AnimeGenre[];

	@Input()
	public genresControl?: FormControl;

	protected filteredGenres$: Observable<AnimeGenre[]> = of([]);;

	protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];

	private readonly announcer = inject(LiveAnnouncer);

	public ngOnInit(): void {
		if (this.genresControl) {
			this.filteredGenres$ = this.genresControl.valueChanges.pipe(
				startWith(''),
				map((genre: string | null) => genre ? this.filterGenre(genre) : (this.animeGenres?.slice() ?? [])),
			);
		}
	}
	/**
	 * 1.
	 * @param event 1.
	 */
	protected addGenre(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			const existingGenre = this.animeGenres?.find(genre => genre.name.toLowerCase() === value.toLowerCase());
			if (existingGenre && !this.selectedGenres?.some(genre => genre.id === existingGenre.id)) {
				this.selectedGenres?.push(existingGenre);
			}
		}
		event.chipInput?.clear();
		this.genresControl?.setValue(null);
	}

	/**
	 * 1.
	 * @param genre 1.
	 */
	protected removeGenre(genre: AnimeGenre): void {
		const index = this.selectedGenres?.indexOf(genre);
		if (index && index >= 0) {
			this.selectedGenres?.splice(index, 1);
			this.announcer.announce(`Removed ${genre.name}`);
		}
	}

	/**
	 * 1.
	 * @param event 1.
	 */
	protected selectedGenre(event: MatAutocompleteSelectedEvent): void {
		const value = event.option.viewValue;
		const existingGenre = this.animeGenres?.find(genre => genre.name.toLowerCase() === value.toLowerCase());
		if (existingGenre && !this.selectedGenres?.some(genre => genre.id === existingGenre.id)) {
			this.selectedGenres?.push(existingGenre);
		}
		this.genresControl?.setValue(null);
	}

	private filterGenre(value: string): AnimeGenre[] {
		const filterValue = value.toLowerCase();
		return this.animeGenres?.filter(genre => genre.name.toLowerCase().includes(filterValue)) ?? [];
	}

}
