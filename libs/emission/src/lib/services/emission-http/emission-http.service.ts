import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrlToken } from '@app/core';
import { EmissionResponse } from '../../types/emission-reponse.type';

@Injectable({ providedIn: 'root' })
export class EmissionHttpService {
  #httpClient = inject(HttpClient);
  #apiUrl = inject(apiUrlToken);

  get = () => this.#httpClient.get<EmissionResponse>(`${this.#apiUrl}/emissions.json`);
}
