import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { homeGuardGuard } from './home-guard.guard';

describe('homeGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => homeGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
