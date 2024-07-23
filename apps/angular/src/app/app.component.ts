import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Main app component. */
@Component({
	selector: 'camp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	standalone: true,
	imports: [RouterModule],
})
export class AppComponent {}
