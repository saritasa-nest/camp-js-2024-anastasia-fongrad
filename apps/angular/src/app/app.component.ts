import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/** App component. */
@Component({
	selector: 'camp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	standalone: true,
	imports: [RouterModule],
})
export class AppComponent {}
