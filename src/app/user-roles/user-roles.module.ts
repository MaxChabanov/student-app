import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { UserRolesRoutingModule } from './user-roles-routing.module';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';

@NgModule({
  declarations: [StudentComponent, TutorComponent],
  imports: [CommonModule, UserRolesRoutingModule, SharedModule],
})
export class UserRolesModule {}
