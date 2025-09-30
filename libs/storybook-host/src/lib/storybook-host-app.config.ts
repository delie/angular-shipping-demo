import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { primePreset } from '@app/core';
import { providePrimeNG } from 'primeng/config';

export const storybookAppConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: primePreset } }),
  ],
};
