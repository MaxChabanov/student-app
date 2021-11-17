import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { StudentTutorGuard } from './guards/student-tutor.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    // canActivate: [StudentTutorGuard],
  },
  {
    path: 'tutor',
    loadChildren: () =>
      import('./tutor/tutor.module').then((m) => m.TutorModule),
    // canActivate: [StudentTutorGuard],
  },

  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
