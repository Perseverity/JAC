import { TestBed } from '@angular/core/testing';

import { Loginv0Service } from './loginv0.service';

describe('Loginv0Service', () => {
  let service: Loginv0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loginv0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
