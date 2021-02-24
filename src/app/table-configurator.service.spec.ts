import { TestBed } from '@angular/core/testing';

import { TableConfiguratorService } from './table-configurator.service';

describe('TableConfiguratorService', () => {
  let service: TableConfiguratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableConfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
