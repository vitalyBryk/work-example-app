import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth/pages/auth-page/auth-page.component';
import { loginGuard } from './core/guards/login-guard/login-guard.guard';
import { registerGuard } from './core/guards/register-guard/register.guard';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { homeGuardGuard } from './core/guards/home-guard/home-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'authorization',
    children: [
      {
        path: 'sign-in',
        component: AuthPageComponent,
        data:{form:"signIn"},
        canActivate: [loginGuard]
      },
      {
        path: 'sign-up',
        component: AuthPageComponent,
        data:{form:"signUp"},
        canActivate: [registerGuard]
      }
    ]
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [homeGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
