import { TestBed } from '@angular/core/testing';

import { EtiquetasServiceService } from './etiquetas-service.service';

describe('EtiquetasServiceService', () => {
  let service: EtiquetasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
