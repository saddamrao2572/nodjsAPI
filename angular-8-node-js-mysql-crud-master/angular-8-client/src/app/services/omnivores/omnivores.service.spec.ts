import { TestBed } from '@angular/core/testing';

import { OmnivoresService } from './omnivores/omnivores.service';

describe('OmnivoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmnivoresService = TestBed.get(OmnivoresService);
    expect(service).toBeTruthy();
  });
});
