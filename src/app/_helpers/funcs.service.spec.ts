import { TestBed } from '@angular/core/testing';

import { FuncsService } from './funcs.service';

describe('FuncsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncsService = TestBed.get(FuncsService);
    expect(service).toBeTruthy();
  });
});
