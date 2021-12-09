import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentRoutingModule } from './student/student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TutorComponent } from './tutor/tutor.component';

import { PaymentTableComponent } from './payment/payment-table/payment-table.component';
import { PaymentComponent } from './payment/payment.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent,
    TutorComponent,
    PaymentTableComponent,
    PaymentComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
