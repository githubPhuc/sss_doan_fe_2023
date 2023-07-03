import { TestBed } from '@angular/core/testing';

import { ImportDepotService } from './import-depot.service';

describe('ImportDepotService', () => {
  let service: ImportDepotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportDepotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
