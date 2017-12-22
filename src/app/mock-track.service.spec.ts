import { TestBed, inject } from '@angular/core/testing';

import { MockTrackService } from './mock-track.service';

describe('MockTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockTrackService]
    });
  });

  it('should be created', inject([MockTrackService], (service: MockTrackService) => {
    expect(service).toBeTruthy();
  }));
});
