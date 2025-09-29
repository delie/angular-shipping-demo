import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrlToken } from '@demo/core';

@Injectable({ providedIn: 'root' })
export class VesselHttpService {
  #httpClient = inject(HttpClient);
  #apiUrl = inject(apiUrlToken);

  get = () => this.#httpClient.get<any>(`${this.#apiUrl}/vessels.json`);
}
