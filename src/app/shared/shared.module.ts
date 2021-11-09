import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [AutocompleteComponent, CalendarComponent],
  exports: [AutocompleteComponent, CalendarComponent],
})
export class SharedModule {}
