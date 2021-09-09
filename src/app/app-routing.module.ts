import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './login-form/auth/auth.component';
import { RegisterComponent } from './login-form/register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
