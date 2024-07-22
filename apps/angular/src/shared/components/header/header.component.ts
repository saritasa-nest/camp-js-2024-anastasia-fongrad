import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

/** Header component for the app. */
@Component({
	selector: 'header-component',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	standalone: true,
	imports: [MatToolbarModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
