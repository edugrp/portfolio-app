import { TestBed } from '@angular/core/testing';

import { CryptosService } from './cryptos.service';

describe('CryptosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptosService = TestBed.get(CryptosService);
    expect(service).toBeTruthy();
  });
});
