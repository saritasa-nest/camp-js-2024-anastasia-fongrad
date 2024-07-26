import { Component } from '@angular/core';
import { HeaderComponent } from '@js-camp/angular/shared/components/header/header.component';

/** Main app component. */
@Component({
	selector: 'camp-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
	standalone: true,
	imports: [HeaderComponent],
})
export class AuthComponent {}
