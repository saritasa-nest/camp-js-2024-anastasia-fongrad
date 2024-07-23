import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

/** Header component for the app. */
@Component({
	selector: 'camp-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	standalone: true,
	imports: [MatToolbarModule],
})
export class HeaderComponent {}
