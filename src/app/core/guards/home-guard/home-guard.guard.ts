import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map,switchMap,} from 'rxjs';
import { AuthService } from '../../services/auth-service.service';



export const homeGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.getUsersData().pipe(
    switchMap(users => {
      const login = authService.getInputUsersDates().login;
      const password = authService.getInputUsersDates().password;
      return authService.checkUsersData(users, login, password).pipe(
        map( result => {
          if (result) return true;
          else {
            router.navigate(['authorization/sign-in']);
            return false;
          }
        }) 
      );
    })
  )
}


