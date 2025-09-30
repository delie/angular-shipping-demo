import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { apiUrlToken } from '@app/core';
import { EmissionHttpService } from './emission-http.service';

describe('EmissionHttpService', () => {
  let service: EmissionHttpService;
  let httpTest: HttpTestingController;
  let req: TestRequest;
  let response: any;

  const mockApiUrl = 'http://mock';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmissionHttpService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        { provide: apiUrlToken, useValue: mockApiUrl },
      ],
    });
    service = TestBed.inject(EmissionHttpService);
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
      req = httpTest.expectOne(`${mockApiUrl}/emissions.json`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
      expect(response).toEqual([]);
    });
  });
});
