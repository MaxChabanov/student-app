import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './login/auth/auth.component';
import { RegisterComponent } from './login/register/register.component';
import { TutorComponent } from './tutor/tutor.component';
import { StudentComponent } from './student/student.component';

import { StudentTutorGuard } from './guards/student-tutor.guard';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'tutor',
    component: TutorComponent,
    canActivate: [StudentTutorGuard],
  },
  {
    path: 'student',
    component: StudentComponent,
    /*canActivate: [StudentTutorGuard],*/
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
