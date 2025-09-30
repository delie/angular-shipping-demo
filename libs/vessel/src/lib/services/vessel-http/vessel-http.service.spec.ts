import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { apiUrlToken } from '@app/core';
import { VesselResponse } from '../../types/vessel-response.type';
import { VesselHttpService } from './vessel-http.service';

describe('VesselHttpService', () => {
  let service: VesselHttpService;
  let httpTest: HttpTestingController;
  let req: TestRequest;
  let response: VesselResponse;

  const mockApiUrl = 'http://mock';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VesselHttpService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        { provide: apiUrlToken, useValue: mockApiUrl },
      ],
    });
    service = TestBed.inject(VesselHttpService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTest.verify();
  });

  describe('get()', () => {
    beforeEach(() => {
      service.get().subscribe((res) => (response = res));
    });

    it('should call the correct endpoint using GET', () => {
      req = httpTest.expectOne(`${mockApiUrl}/vessels.json`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
      expect(response).toEqual([]);
    });
  });
});
