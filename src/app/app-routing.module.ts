import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TutorComponent } from './tutor/tutor.component';
import { StudentComponent } from './student/student.component';
import { StudentTutorGuard } from './guards/student-tutor.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: LoginComponent },
  {
    path: 'tutor',
    component: TutorComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
    /*canActivate: [StudentTutorGuard],*/
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
