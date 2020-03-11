import { TestBed } from '@angular/core/testing';

import { GetActualiteService } from './get-actualite.service';

describe('GetActualiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetActualiteService = TestBed.get(GetActualiteService);
    expect(service).toBeTruthy();
  });
});
