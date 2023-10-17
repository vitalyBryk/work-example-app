import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
class PermissionsService {
  canActivate(): Observable<boolean>{
    return of(true)
  }
}


export const homeGuardGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};


