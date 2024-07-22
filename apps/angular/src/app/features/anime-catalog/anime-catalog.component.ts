import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';

/** A component that represents anime catalog page. */
@Component({
	selector: 'main-page',
	imports: [AnimeTableComponent, HeaderComponent],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCatalogComponent {}
