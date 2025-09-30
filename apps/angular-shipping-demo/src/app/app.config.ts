import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { apiUrlToken } from '@app/core';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { providePrimeNG } from 'primeng/config';
import { primePreset } from './app.prime-preset';
import { appRoutes } from './app.routes';

export const appConfig = (apiUrl: string): ApplicationConfig => ({
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes),
    {
      provide: apiUrlToken,
      useValue: apiUrl,
    },
    provideStore(
      {
        router: routerReducer,
      },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: false,
        },
      }
    ),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: isDevMode() ? 25 : false, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: primePreset } }),
  ],
});
