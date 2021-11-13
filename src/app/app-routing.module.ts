import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TutorComponent } from './tutor/tutor.component';
import { StudentComponent } from './student/student.component';

import { StudentTutorGuard } from './guards/student-tutor.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: LoginComponent },
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
  { path: 'student', loadChildren: () => import('./user-roles/user-roles.module').then(m => m.UserRolesModule) },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
