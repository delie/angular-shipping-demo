import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrlToken } from '@app/core';

@Injectable({ providedIn: 'root' })
export class EmissionHttpService {
  #httpClient = inject(HttpClient);
  #apiUrl = inject(apiUrlToken);

  get = () => this.#httpClient.get<any>(`${this.#apiUrl}/emissions.json`);
}
