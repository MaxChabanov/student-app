import { NgModule } from '@angular/core';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';

const materialArray = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule,
];

@NgModule({
  imports: [...materialArray],

  exports: [...materialArray],
})
export class MaterialModule {}
