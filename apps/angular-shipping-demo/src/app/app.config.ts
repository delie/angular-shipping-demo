import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { apiUrlToken } from '@demo/core';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
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
  ],
});
