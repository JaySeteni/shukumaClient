import { TestBed } from '@angular/core/testing';

import { TrackDeliveriesService } from './track-deliveries.service';

describe('TrackDeliveriesService', () => {
  let service: TrackDeliveriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackDeliveriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
