import { TestBed } from '@angular/core/testing';

import { RapidApiService } from './rapid-api.service';

describe('RapidApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapidApiService = TestBed.get(RapidApiService);
    expect(service).toBeTruthy();
  });
});
