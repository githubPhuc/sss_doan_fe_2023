import { TestBed } from '@angular/core/testing';

import { NotifierService } from './notifier.service';

describe('NitifierService', () => {
  let service: NotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
