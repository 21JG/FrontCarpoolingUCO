import { TestBed } from '@angular/core/testing';

import { RouteRequestService } from './route-request.service';

describe('RouteRequestService', () => {
  let service: RouteRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
