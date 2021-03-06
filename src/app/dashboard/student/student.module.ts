import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
