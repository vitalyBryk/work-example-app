import { CanActivateFn } from '@angular/router';

export const registerGuard: CanActivateFn = (route, state) => {
  console.log(route,state);
  return true;
};
