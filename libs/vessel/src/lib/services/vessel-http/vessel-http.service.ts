import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrlToken } from '@app/core';
import { VesselResponse } from '../../types/vessel-response.type';

@Injectable({ providedIn: 'root' })
export class VesselHttpService {
  #httpClient = inject(HttpClient);
  #apiUrl = inject(apiUrlToken);

  get = () => this.#httpClient.get<VesselResponse>(`${this.#apiUrl}/vessels.json`);
}
