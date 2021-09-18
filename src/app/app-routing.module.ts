import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './login/auth/auth.component';
import { RegisterComponent } from './login/register/register.component';
import { RegisterStudentComponent } from './login/register-student/register-student.component';
import { TutorComponent } from "./tutor/tutor.component";
import { StudentComponent } from "./student/student.component";

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-student', component: RegisterStudentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'student', component: StudentComponent },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
