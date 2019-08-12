import { TestBed } from '@angular/core/testing';

import { PureCircleProgressService } from './pure-circle-progress.service';

describe('PureCircleProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PureCircleProgressService = TestBed.get(PureCircleProgressService);
    expect(service).toBeTruthy();
  });
});
