import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PaymentComponent } from './dashboard/payment/payment.component';

import { StudentTutorGuard } from './guards/student-tutor.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    // canActivate: [StudentTutorGuard],
  },

  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
