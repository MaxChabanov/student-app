import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { PaymentComponent } from './payment/payment.component';
import { InProgressComponent } from './in-progress/in-progress.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'tutor', component: TutorComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'in-progress', component: InProgressComponent },
      { path: 'not-found', component: NotFoundComponent },
    ],
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
