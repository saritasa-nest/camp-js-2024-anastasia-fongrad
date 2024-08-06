import { enableProdMode } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AuthorizationService } from './core/services/authorization.service';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LocalStorageService } from './core/services/local-storage.service';
import { ApiUrlService } from './core/services/api-url.service';
import { AppConfig } from './core/utils/app-config';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(appRoutes),
		provideHttpClient(withInterceptors([apiInterceptor]), withFetch()),
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		AuthorizationService,
		LocalStorageService,
		ApiUrlService,
		AppConfig,
		provideAnimationsAsync(),
	],
}).catch(err => console.error(err));
