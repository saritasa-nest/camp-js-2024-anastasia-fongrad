import { Component, Input, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl } from '@angular/forms';
import { AnimeGenre } from '@js-camp/core/models/anime-genre.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

/** Genres select component. */
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

	/** Available anime genres. */
	@Input()
	public animeGenres?: AnimeGenre[];

	/** Selected genres for the current anime. */
	@Input()
	public selectedGenres?: AnimeGenre[];

	/** Genres abstract form control. */
	@Input()
	public genresControl?: AbstractControl<AnimeGenre[], AnimeGenre[]>;

	/** A list of filtered genres. */
	protected filteredGenres$: Observable<AnimeGenre[]> = of([]);

	/** Separator key codes. */
	protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];

	private readonly announcer = inject(LiveAnnouncer);

	/** Initializes filtered genres updates on input change. */
	public ngOnInit(): void {
		const allGenres = this.animeGenres?.length ? this.filterGenres(this.animeGenres) : (this.animeGenres?.slice() ?? []);
		this.filteredGenres$ = of(allGenres ?? []);
		if (this.genresControl) {
			this.filteredGenres$ = this.genresControl.valueChanges.pipe(
				map((genres: AnimeGenre[]) => genres.length ? this.filterGenres(genres) : (this.animeGenres?.slice() ?? [])),
			);
		}
	}

	/**
	 * Adds a new genre to the list of selected genres.
	 * @param event MatChip input event.
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
		this.genresControl?.setValue([]);
	}

	/**
	 * Removes a genre from a selected list.
	 * @param genre Anime genre to remove.
	 */
	protected removeGenre(genre: AnimeGenre): void {
		const index = this.selectedGenres?.indexOf(genre);
		if ((index != null) && (index >= 0)) {
			this.selectedGenres?.splice(index, 1);
			this.announcer.announce(`Removed ${genre.name}`);
		}
	}

	/**
	 * Selects new genre for MatAutocomplete.
	 * @param event MatAutocomplete select event.
	 */
	protected selectedGenre(event: MatAutocompleteSelectedEvent): void {
		const value = event.option.viewValue;
		const existingGenre = this.animeGenres?.find(genre => genre.name.toLowerCase() === value.toLowerCase());
		if (existingGenre && !this.selectedGenres?.some(genre => genre.id === existingGenre.id)) {
			this.selectedGenres?.push(existingGenre);
		}
		this.genresControl?.setValue([]);
	}

	private filterGenres(genres: AnimeGenre[]): AnimeGenre[] {
		const filterValue = genres.map(genre => genre.name.toLowerCase());
		return this.animeGenres?.filter(genre => filterValue.includes(genre.name.toLowerCase())) ?? [];
	}
}
