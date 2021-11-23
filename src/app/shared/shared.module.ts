import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StudentSlotComponent } from './student-slot/student-slot.component';
import { TutorSlotComponent } from './tutor-slot/tutor-slot.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AutocompleteComponent,
    CalendarComponent,
    StudentSlotComponent,
    TutorSlotComponent,
  ],
  exports: [AutocompleteComponent, CalendarComponent],
})
export class SharedModule {}
