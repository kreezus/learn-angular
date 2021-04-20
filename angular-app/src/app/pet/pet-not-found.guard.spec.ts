import { TestBed } from '@angular/core/testing';

import { PetNotFoundGuard } from './pet-not-found.guard';

describe('PetNotFoundGuard', () => {
  let guard: PetNotFoundGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PetNotFoundGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
