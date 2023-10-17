import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth/components/auth-page/auth-page.component';
import { loginGuardGuard } from './core/guards/login-guard.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch:"full"
  },
  {
    path: "login",
    component: AuthPageComponent,
    canActivate: [loginGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
