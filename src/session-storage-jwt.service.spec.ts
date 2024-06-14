import { TestBed } from '@angular/core/testing';
import { SessionStorageJwtService } from './session-storage-jwt.service';

describe('SessionStorageJwtService', () => {
  let service: SessionStorageJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
