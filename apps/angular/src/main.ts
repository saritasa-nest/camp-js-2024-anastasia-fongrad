import { enableProdMode } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { RefreshInterceptor } from './core/interceptors/refresh.interceptor';
import { AppConfig } from './core/utils/app-config';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(appRoutes),
		provideHttpClient(
			withInterceptors([apiInterceptor]),
			withFetch(),
			withInterceptorsFromDi(),
		),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: RefreshInterceptor,
			multi: true,
		},
		AppConfig,
		provideAnimationsAsync(),
	],
}).catch(err => console.error(err));
