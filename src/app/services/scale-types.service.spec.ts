import { TestBed } from '@angular/core/testing';

import { ScaleTypesService } from './scale-types.service';

describe('ScaleTypesService', () => {
  let service: ScaleTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaleTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
