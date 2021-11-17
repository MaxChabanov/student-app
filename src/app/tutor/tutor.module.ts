import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorComponent } from './tutor.component';

@NgModule({
  declarations: [TutorComponent],
  imports: [CommonModule, TutorRoutingModule, SharedModule],
})
export class TutorModule {}
