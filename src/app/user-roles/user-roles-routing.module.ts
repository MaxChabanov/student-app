import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'tutor', component: TutorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRolesRoutingModule {}
