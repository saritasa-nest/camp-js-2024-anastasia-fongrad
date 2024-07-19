import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

/** 1. */
@Component({
	selector: 'header-component',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	standalone: true,
	imports: [MatToolbarModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}