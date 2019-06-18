import { TestBed } from '@angular/core/testing';

import { PredictHealthApiService } from './predict-health-api.service';

describe('PredictHealthApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictHealthApiService = TestBed.get(PredictHealthApiService);
    expect(service).toBeTruthy();
  });
});
