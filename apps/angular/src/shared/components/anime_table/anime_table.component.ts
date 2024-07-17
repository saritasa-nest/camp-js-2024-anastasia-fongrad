import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

/** 1. */
export type PeriodicElement = {

	/** 1. */
	name: string;

	/** 1. */
	position: number;

	/** 1. */
	weight: number;

	/** 1. */
	symbol: string;
};

/** 1. */
const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/** 1. */
@Component({
	selector: 'anime-table',
	styleUrl: './anime_table.component.css',
	templateUrl: './anime_table.component.html',
	standalone: true,
	imports: [MatTableModule],
})
export class AnimeTableComponent {
	/** 1. */
	public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

	/** 1. */
	public dataSource = ELEMENT_DATA;
}
