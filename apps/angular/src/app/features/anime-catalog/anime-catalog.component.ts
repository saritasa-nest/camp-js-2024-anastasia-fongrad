import { Component } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/app/features/anime-table/anime-table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

type Food = {

	/** 1. */
	value: string;

	/** 1. */
	viewValue: string;
};

/** A component that represents anime catalog page. */
@Component({
	selector: 'camp-anime-catalog',
	imports: [
		AnimeTableComponent,
		HeaderComponent,
		MatPaginatorModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		FormsModule,
		MatIconModule,
		MatButtonModule,
	],
	styleUrl: './anime-catalog.component.css',
	templateUrl: './anime-catalog.component.html',
	standalone: true,
})
export class AnimeCatalogComponent {
	/** 1. */
	protected readonly foods: Food[] = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' },
	];

	/** 1. */
	protected selectedFood = this.foods[2].value;
}
