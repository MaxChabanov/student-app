import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StudentSlotComponent } from './student-slot/student-slot.component';
import { TutorSlotComponent } from './tutor-slot/tutor-slot.component';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AutocompleteComponent,
    CalendarComponent,
    StudentSlotComponent,
    TutorSlotComponent,
    SidebarComponent,
  ],
  exports: [AutocompleteComponent, CalendarComponent, SidebarComponent],
})
export class SharedModule {}
