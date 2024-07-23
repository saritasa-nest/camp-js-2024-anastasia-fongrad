import { Component } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';

/** A component that represents anime catalog page. */
@Component({
	selector: 'camp-anime-catalog',
	imports: [AnimeTableComponent, HeaderComponent],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
})
export class AnimeCatalogComponent {}
