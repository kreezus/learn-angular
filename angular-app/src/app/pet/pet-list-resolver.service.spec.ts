import { TestBed } from '@angular/core/testing';

import { PetListResolverService } from './pet-list-resolver.service';

describe('PetListResolverService', () => {
  let service: PetListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
