import { TestBed } from '@angular/core/testing';

import { PcportableService } from './pcportable.service';

describe('PcportableService', () => {
  let service: PcportableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcportableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
