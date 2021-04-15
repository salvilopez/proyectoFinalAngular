import { TestBed } from '@angular/core/testing';

import { ExpertosServiceService } from './expertos-service.service';

describe('ExpertosServiceService', () => {
  let service: ExpertosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
