import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Configuration } from './app/interfaces/configuration.interface';

// app-config.json file is expected in the root public folder.  Please see Configuration interface.
fetch('app-config.json')
  .then((r) => r.json())
  .then((config: Configuration) => {
    bootstrapApplication(AppComponent, appConfig(config.apiUrl)).catch((err) => console.error(err));
  });
