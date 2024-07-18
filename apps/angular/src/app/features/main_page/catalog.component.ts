import { Component } from '@angular/core';
import { AnimeTableComponent } from '@js-camp/angular/shared/components/anime_table/anime_table.component';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';

/** 1. */
@Component({
	selector: 'main-page',
	imports: [AnimeTableComponent, HeaderComponent],
	styleUrl: './catalog.component.css',
	templateUrl: './catalog.component.html',
	standalone: true,
})
export class MainPageComponent { }
