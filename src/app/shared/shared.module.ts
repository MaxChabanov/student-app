import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [AutocompleteComponent, CalendarComponent],
  exports: [AutocompleteComponent, CalendarComponent],
})
export class SharedModule {}
