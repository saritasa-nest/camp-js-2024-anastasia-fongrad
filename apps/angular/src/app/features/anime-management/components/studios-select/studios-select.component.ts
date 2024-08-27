import { Component, Input, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AnimeStudio } from '@js-camp/core/models/anime-studio.model';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

/** Studios select component. */
@Component({
	selector: 'camp-studios-select',
	templateUrl: './studios-select.component.html',
	styleUrls: ['./studios-select.component.css'],
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
export class StudiosSelectComponent implements OnInit {

	/** Available anime studios. */
	@Input()
	public animeStudios?: AnimeStudio[];

	/** Selected for the current anime studios. */
	@Input()
	public selectedStudios?: AnimeStudio[];

	/** Studios abstract form control. */
	@Input()
	public studioControl?: AbstractControl<AnimeStudio[], AnimeStudio[]>;

	/** A list of filtered studios. */
	protected filteredStudios$: Observable<AnimeStudio[]> = of([]);

	/** Separator key codes. */
	protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];

	private readonly announcer = inject(LiveAnnouncer);

	/** Initializes filtered studios updates on input change. */
	public ngOnInit(): void {
		if (this.studioControl) {
			this.filteredStudios$ = this.studioControl.valueChanges.pipe(
				map((studios: AnimeStudio[]) => studios ? this.filterStudios(studios) : (this.animeStudios?.slice() ?? [])),
			);
		}
	}

	/**
	 * Adds a new studio to the list of selected studios.
	 * @param event MatChip input event.
	 */
	protected addStudio(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) {
			const existingStudio = this.animeStudios?.find(studio => studio.name.toLowerCase() === value.toLowerCase());
			if (existingStudio && !this.selectedStudios?.some(studio => studio.id === existingStudio.id)) {
				this.selectedStudios?.push(existingStudio);
			}
		}
		event.chipInput?.clear();
		this.studioControl?.setValue([]);
	}

	/**
	 * Removes a studio from a selected list.
	 * @param studio Anime studio to remove.
	 */
	protected removeStudio(studio: AnimeStudio): void {
		const index = this.selectedStudios?.indexOf(studio);
		if (index && index >= 0) {
			this.selectedStudios?.splice(index, 1);
			this.announcer.announce(`Removed ${studio.name}`);
		}
	}

	/**
	 * Selects new studio for MatAutocomplete.
	 * @param event MatAutocomplete select event.
	 */
	protected selectedStudio(event: MatAutocompleteSelectedEvent): void {
		const value = event.option.viewValue;
		const existingStudio = this.animeStudios?.find(studio => studio.name.toLowerCase() === value.toLowerCase());
		if (existingStudio && !this.selectedStudios?.some(studio => studio.id === existingStudio.id)) {
			this.selectedStudios?.push(existingStudio);
		}
		this.studioControl?.setValue([]);
	}

	private filterStudios(studios: AnimeStudio[]): AnimeStudio[] {
		const filterValue = studios.map(studio => studio.name.toLowerCase());
		return this.animeStudios?.filter(studio => filterValue.includes(studio.name.toLowerCase())) ?? [];
	}
}
