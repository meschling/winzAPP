import { TestBed, inject } from '@angular/core/testing';

import { VineyardService } from './vineyard.service';

describe('VineyardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VineyardService]
    });
  });

  it('should be created', inject([VineyardService], (service: VineyardService) => {
    expect(service).toBeTruthy();
  }));
});
