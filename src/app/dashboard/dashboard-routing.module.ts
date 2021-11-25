import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { PaymentComponent } from "./payment/payment.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'tutor', component: TutorComponent },
      { path: 'payment', component: PaymentComponent },
    ],
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}