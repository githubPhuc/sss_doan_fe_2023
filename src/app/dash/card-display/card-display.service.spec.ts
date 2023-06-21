import { TestBed } from '@angular/core/testing';

import { CardDisplayService } from './card-display.service';

describe('CardDisplayService', () => {
  let service: CardDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
