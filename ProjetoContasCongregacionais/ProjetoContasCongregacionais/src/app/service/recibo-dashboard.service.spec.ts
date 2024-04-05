import { TestBed } from '@angular/core/testing';

import { ReciboDashboardService } from './recibo-dashboard.service';

describe('ReciboDashboardService', () => {
  let service: ReciboDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciboDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
