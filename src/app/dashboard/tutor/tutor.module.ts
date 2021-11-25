import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TutorRoutingModule } from './tutor-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TutorRoutingModule, SharedModule],
})
export class TutorModule {}
